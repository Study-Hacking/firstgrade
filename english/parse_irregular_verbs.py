import re
import json
import random

# Map of present -> past for distractor generation
verb_map = {
    "go": "went", "come": "came", "see": "saw", "have": "had", "eat": "ate",
    "get": "got", "take": "took", "make": "made", "say": "said", "do": "did",
    "buy": "bought", "read": "read", "run": "ran", "write": "wrote", "speak": "spoke",
    "know": "knew", "give": "gave", "swim": "swam", "meet": "met", "sing": "sang",
    "stand": "stood", "sit": "sat", "sleep": "slept", "drink": "drank", "find": "found",
    "win": "won", "lose": "lost", "catch": "caught", "teach": "taught", "leave": "left",
    "think": "thought", "tell": "told", "hear": "heard", "feel": "felt", "keep": "kept",
    "begin": "began", "break": "broke", "bring": "brought", "build": "built", "become": "became",
    "put": "put", "cut": "cut", "hit": "hit", "is": "was", "am": "was", "are": "were"
}

# Reverse map for Past -> Present questions
past_map = {v: k for k, v in verb_map.items()}
# Handle duplicates in reverse map (was -> is/am)
past_map["was"] = "is/am"
past_map["were"] = "are"

def generate_distractors_present_to_past(verb, correct_past):
    distractors = set()
    
    # 1. Regularized mistake (ed)
    if verb.endswith('e'):
        distractors.add(verb + 'd')
    else:
        distractors.add(verb + 'ed')
        
    # 2. Present tense
    distractors.add(verb)
    
    # 3. Third person singular
    distractors.add(verb + 's')
    
    # 4. Present participle
    if verb.endswith('e'):
        distractors.add(verb[:-1] + 'ing')
    else:
        distractors.add(verb + 'ing')

    # Remove correct answer if generated (e.g., read -> read)
    if correct_past in distractors:
        distractors.remove(correct_past)
        
    # Filter valid distractors
    final_distractors = []
    for d in distractors:
        if d != correct_past:
            final_distractors.append(d)
            
    # Fill if needed
    while len(final_distractors) < 3:
        final_distractors.append("did " + verb)
        
    return list(final_distractors)[:3]

def generate_distractors_past_to_present(past, correct_present):
    distractors = set()
    
    # 1. Past tense itself
    distractors.add(past)
    
    # 2. Regularized past mistake (if user thinks 'went' is present, 'wented'?) - maybe not useful
    # Better: other forms
    
    # 3. Participle or other forms if known, otherwise generic logic
    if past.endswith('ed'):
        distractors.add(past[:-2]) # incorrect root derivation
        
    # 4. Add 'ing' to past? wenting?
    distractors.add(past + "ing")
    
    # 5. Add 's' to past? wents?
    distractors.add(past + "s")

    # Remove correct answer
    if correct_present in distractors:
        distractors.remove(correct_present)
        
    final_distractors = []
    for d in distractors:
        if d != correct_present:
            final_distractors.append(d)
            
    while len(final_distractors) < 3:
        final_distractors.append(past + "ed") 
        
    return list(final_distractors)[:3]

questions = []

with open('irregular_verbs_raw.txt', 'r') as f:
    lines = f.readlines()
    
    # Skip header
    lines = lines[1:]
    
    for line in lines:
        parts = re.split(r'\t+', line.strip())
        
        # We expect roughly: No, Q1, No, Q2, No, Q3
        # But split might behave differently depending on tabs.
        # Let's try to extract by index if possible, or filter empty strings.
        parts = [p for p in parts if p.strip()]
        
        # Column 1: Present -> Past
        # Format: "1", "go → ( )"
        if len(parts) >= 2:
            try:
                q_text = parts[1]
                if '→' in q_text:
                    verb = q_text.split('→')[0].strip()
                    # Handle "is / am" special case
                    if verb == "is / am":
                        correct = "was"
                        verb_key = "is" # for distractor gen
                    elif verb == "are":
                        correct = "were"
                        verb_key = "are"
                    else:
                        correct = verb_map.get(verb, verb + "ed") # Fallback
                        verb_key = verb

                    opts = generate_distractors_present_to_past(verb_key, correct)
                    opts.append(correct)
                    random.shuffle(opts)
                    
                    questions.append({
                        "question": q_text.replace('( )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": f"The past tense of '{verb}' is '{correct}'."
                    })
            except Exception as e:
                print(f"Error parsing col 1: {e}")

        # Column 2: Past -> Present
        # Format: "101", "went → ( )"
        if len(parts) >= 4:
            try:
                q_text = parts[3]
                if '→' in q_text:
                    past = q_text.split('→')[0].strip()
                    correct = past_map.get(past, past) # Fallback
                    
                    # Special handling for is/am
                    if correct == "is/am":
                        correct = "is / am"

                    opts = generate_distractors_past_to_present(past, correct)
                    opts.append(correct)
                    random.shuffle(opts)
                    
                    questions.append({
                        "question": q_text.replace('( )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": f"The original form of '{past}' is '{correct}'."
                    })
            except Exception as e:
                print(f"Error parsing col 2: {e}")

        # Column 3: Sentence
        # Format: "201", "I ( go ) to the park. → ( )"
        if len(parts) >= 6:
            try:
                q_text = parts[5]
                if '→' in q_text:
                    # Extract verb from parens
                    match = re.search(r'\(\s*([a-zA-Z\s/]+)\s*\)', q_text.split('→')[0])
                    if match:
                        verb = match.group(1).strip()
                        
                        # Special case for Q298, Q299, Q300 which are NOT simple past conversions
                        # Q298: Please ( tell ) me. -> ( ) ... Wait, "Please tell me." is imperative. 
                        # But the column header says "文を完成させなさい(過去形)" (Complete the sentence (Past Tense)).
                        # However, Q299 "Let's ( go )!" -> Let's go? Or Let's went? 
                        # Q300 "Did you ( go )?" -> Did you go?
                        # Let's look at the user request again.
                        # Q298: Please ( tell ) me. -> ( )
                        # Q299: Let's ( go )! -> ( )
                        # Q300: Did you ( go )? -> ( )
                        # These look like trick questions where the answer might be the ORIGINAL form because of context?
                        # "Did you go?" (go is correct). "Let's go" (go is correct).
                        # "Please tell me" (tell is correct).
                        
                        # Let's check the logic.
                        # If the sentence has "Did", "Let's", "Please", "to" (infinitive), etc., it might be original form.
                        # But the header says "Past Tense". 
                        # Wait, let's look at the user's provided list for 298-300.
                        # 298	Please ( tell ) me. → ( )
                        # 299	Let's ( go )! → ( )
                        # 300	Did you ( go )? → ( )
                        # Usually in these quizzes, if it says "Past Tense" it implies convert to past.
                        # BUT, "Did you went?" is wrong. "Did you go?" is correct.
                        # So for 300, answer is 'go'.
                        # For 299, "Let's went" is wrong. "Let's go" is correct.
                        # For 298, "Please told me" is wrong. "Please tell me" is correct.
                        
                        # So I should detect these cases.
                        
                        is_original_form_case = False
                        if "Did you" in q_text or "Let's" in q_text or "Please" in q_text or "to" in q_text.split('(')[0]: # "to" before parens? No, "I ( go ) to" is fine.
                             # Check specific questions
                             if "Did you" in q_text or "Let's" in q_text or "Please" in q_text:
                                 is_original_form_case = True
                        
                        if is_original_form_case:
                            correct = verb
                            hint_text = f"In this sentence pattern, we use the original form '{verb}'."
                        else:
                            # Normal past tense conversion
                            if verb == "is / am":
                                correct = "was"
                            elif verb == "are":
                                correct = "were"
                            else:
                                correct = verb_map.get(verb, verb + "ed")
                            hint_text = f"The past tense of '{verb}' is '{correct}'."

                        opts = generate_distractors_present_to_past(verb, correct)
                        # Ensure the WRONG form is in distractors for these trick questions
                        if is_original_form_case:
                            # If correct is 'go', make sure 'went' is a distractor
                            past_form = verb_map.get(verb, verb+"ed")
                            if past_form not in opts:
                                opts[0] = past_form # Replace one
                        
                        opts.append(correct)
                        # Deduplicate
                        opts = list(set(opts))
                        while len(opts) < 4:
                            opts.append("dummy") # Should not happen often
                        
                        random.shuffle(opts)
                        
                        questions.append({
                            "question": q_text.replace('( )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": hint_text
                        })

            except Exception as e:
                print(f"Error parsing col 3: {e}")

print(json.dumps(questions, indent=4))
