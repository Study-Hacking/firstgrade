import re
import json
import random

def get_ing_form(verb):
    if verb.endswith('ie'):
        return verb[:-2] + 'ying'
    elif verb.endswith('e') and verb not in ['be', 'see']:
        return verb[:-1] + 'ing'
    elif verb in ['run', 'swim', 'sit', 'stop', 'get', 'cut', 'put', 'plan', 'shop', 'hop', 'jog', 'step', 'clap', 'win', 'hit']:
        return verb + verb[-1] + 'ing'
    else:
        return verb + 'ing'

def get_be_verb(subject):
    subject = subject.lower()
    if subject in ['i', 'he', 'she', 'it', 'ken', 'emi', 'my father', 'the dog', 'the cat', 'the bird', 'the car', 'someone', 'who', 'what', 'the student', 'mr. tanaka', 'ms. sato', 'the boy', 'the girl', 'this man', 'that woman']:
        return 'was'
    else:
        return 'were'

questions = []

with open('past_progressive_raw.txt', 'r') as f:
    lines = f.readlines()
    lines = lines[1:] # Skip header

    for i, line in enumerate(lines):
        parts = re.split(r'\t+', line.strip())
        parts = [p for p in parts if p.strip()]
        
        # Column 1: 1-50 (Verb -> ing), 51-100 (Subject -> was/were)
        if len(parts) >= 2:
            try:
                q_text = parts[1]
                
                # Case 1: Verb -> ing (1-50)
                if '→' in q_text and '( )' in q_text:
                    verb = q_text.split('→')[0].strip()
                    correct = get_ing_form(verb)
                    
                    distractors = [
                        verb + 'ing', # e.g. makeing
                        verb + 's',
                        verb + 'ed'
                    ]
                    if verb.endswith('e'):
                        distractors.append(verb + 'ing') # makeing
                    else:
                        distractors.append(verb + 'e' + 'ing') # playing -> playeing?
                        
                    # Clean distractors
                    opts = [correct]
                    for d in distractors:
                        if d != correct and d not in opts:
                            opts.append(d)
                    
                    # Fill
                    while len(opts) < 4:
                        opts.append("dummy")
                    
                    opts = opts[:4]
                    random.shuffle(opts)
                    
                    questions.append({
                        "question": q_text.replace('( )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": f"The -ing form of '{verb}' is '{correct}'."
                    })
                    
                # Case 2: Subject -> was/were (51-100)
                elif '( )' in q_text and 'playing' in q_text: # e.g. "I ( ) playing."
                    # Extract subject
                    subject = q_text.split('(')[0].strip()
                    correct = get_be_verb(subject)
                    
                    opts = ['was', 'were', 'is', 'are']
                    random.shuffle(opts)
                    
                    questions.append({
                        "question": q_text.replace('( )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": f"The past be verb for '{subject}' is '{correct}'."
                    })
                # Case 3: Just Subject (84-100) "I ( )"
                elif '( )' in q_text:
                     subject = q_text.split('(')[0].strip()
                     correct = get_be_verb(subject)
                     opts = ['was', 'were', 'is', 'are']
                     random.shuffle(opts)
                     questions.append({
                        "question": q_text.replace('( )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": f"The past be verb for '{subject}' is '{correct}'."
                    })

            except Exception as e:
                print(f"Error parsing col 1: {e}")

        # Column 2: Sentence Completion (101-200)
        if len(parts) >= 4:
            try:
                q_text = parts[3]
                if '→' in q_text:
                    # "I ( play ) tennis. → ( )"
                    # Extract verb and subject
                    left_part = q_text.split('→')[0]
                    match = re.search(r'([a-zA-Z\s]+)\(\s*([a-zA-Z]+)\s*\)', left_part)
                    if match:
                        subject = match.group(1).strip()
                        verb = match.group(2).strip()
                        
                        be = get_be_verb(subject)
                        ing = get_ing_form(verb)
                        correct = f"{be} {ing}"
                        
                        # Distractors
                        wrong_be = 'were' if be == 'was' else 'was'
                        distractors = [
                            f"{wrong_be} {ing}",
                            f"{be} {verb}",
                            f"{be} {verb}ed"
                        ]
                        
                        opts = [correct] + distractors
                        random.shuffle(opts)
                        
                        questions.append({
                            "question": q_text.replace('( )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": f"Past Progressive: {be} + {ing}"
                        })
            except Exception as e:
                print(f"Error parsing col 2: {e}")

        # Column 3: Mixed (201-300)
        if len(parts) >= 6:
            try:
                q_text = parts[5]
                # Logic varies heavily here.
                # 201: I was sleeping. (否定) → I ( )
                # 210: I ( ) reading. (短縮)
                # 216: You were sleeping. (疑問) → ( )
                # 226: Were you studying? - Yes, I ( ).
                # 232: 私はテニスをしていました。→ I ( ) ( ) tennis.
                # 283: I was ( tired / tiring ). → ( )
                
                # Simple Heuristic:
                # If "否定" in q_text: Answer is "wasn't" or "weren't" or "wasn't sleeping"
                # If "短縮" in q_text: Answer is "wasn't" or "weren't" (if negative context) OR maybe it's asking for "I'm"? No, context is past.
                # Let's look at 210: "I ( ) reading. (短縮)". "I wasn't"? 
                # If "疑問" in q_text: Answer is "Was..." or "Were..."
                # If Japanese text: Answer is "was playing" etc.
                
                # Let's try to deduce correct answer from context or hardcode patterns
                
                correct = ""
                opts = []
                
                # Pattern 1: Negative
                if "(否定)" in q_text:
                    if "was" in q_text:
                        correct = "wasn't" # Or "was not"? Usually short form in blanks? Or "wasn't sleeping"?
                        # Q201: I was sleeping. (否定) -> I ( )
                        # If blank is small, "wasn't sleeping".
                        # Let's assume "wasn't [verb]ing"
                        verb_ing = q_text.split('was')[1].split('.')[0].strip()
                        correct = f"wasn't {verb_ing}"
                    elif "were" in q_text:
                        verb_ing = q_text.split('were')[1].split('.')[0].strip()
                        correct = f"weren't {verb_ing}"
                        
                    opts = [correct, correct.replace("n't", " not"), correct.replace("wasn't", "weren't").replace("weren't", "wasn't"), "didn't " + verb_ing]

                # Pattern 2: Short form (210-215)
                elif "(短縮)" in q_text:
                    # 210 I ( ) reading. -> wasn't?
                    # 211 You ( ) listening. -> weren't?
                    # It seems to imply negative short form because positive "I was" doesn't shorten.
                    if "I" in q_text or "He" in q_text or "She" in q_text or "It" in q_text:
                        correct = "wasn't"
                        opts = ["wasn't", "weren't", "isn't", "aren't"]
                    else:
                        correct = "weren't"
                        opts = ["weren't", "wasn't", "aren't", "don't"]

                # Pattern 3: Question (216-225)
                elif "(疑問)" in q_text:
                    # 216 You were sleeping. -> Were you sleeping?
                    if "You were" in q_text: correct = "Were you sleeping?"
                    elif "He was" in q_text: correct = "Was he studying?" # verb varies
                    # Extract verb
                    match = re.search(r'([a-zA-Z]+) (was|were) ([a-zA-Z]+ing)', q_text)
                    if match:
                        subj = match.group(1)
                        be = match.group(2)
                        ving = match.group(3)
                        correct = f"{be.capitalize()} {subj.lower()} {ving}?"
                        
                        opts = [
                            correct,
                            f"{be.capitalize()} {subj.lower()} {ving}.",
                            f"Did {subj.lower()} {ving}?",
                            f"{be.capitalize()} {subj.lower()} {ving.replace('ing','')}?"
                        ]

                # Pattern 4: Short Answer (226-231)
                elif "Yes, I ( )" in q_text: correct = "was"
                elif "No, I ( )" in q_text: correct = "wasn't"
                elif "Yes, he ( )" in q_text: correct = "was"
                elif "No, he ( )" in q_text: correct = "wasn't"
                elif "Yes, they ( )" in q_text: correct = "were"
                elif "No, they ( )" in q_text: correct = "weren't"
                
                if not opts and correct:
                    opts = ["was", "wasn't", "were", "weren't"]

                # Pattern 5: Japanese Translation (232-250)
                # "I ( ) ( ) tennis." -> "was playing"
                # Need to map Japanese verbs? Or just guess from context?
                # 232: tennis -> playing
                # 233: book -> reading
                # 234: sleeping (寝ていました)
                # 235: running (走っていました)
                # 236: studying (勉強していました)
                # 237: singing (歌っていました)
                # 238: TV -> watching
                # 239: raining -> raining
                # 240: snow -> snowing
                # 241: eating (食べていました)
                # 242: bath -> taking
                # 243: ski -> skiing
                # 244: listening (聴いていましたか) -> Were ... listening
                # 245: What ... doing
                
                # This is hard to parse perfectly without a dictionary.
                # But I can map specific Q numbers since they are fixed.
                
                q_num = 200 + i + 1 # Approximate
                
                # Let's use a manual map for the hard ones if needed, or generic logic
                # Actually, I can just generate the answer based on the English hint in the question?
                # The question is "I ( ) ( ) tennis."
                # I can guess "was playing" because "tennis".
                
                # Let's skip complex parsing for now and just handle the ones I can easily deduce, 
                # OR just generate a placeholder for manual review? 
                # No, I need to be accurate.
                
                # Let's try to find the English words in the question line.
                # 232	私はテニスをしていました。→ I ( ) ( ) tennis.
                # "tennis" -> play
                # "book" -> read
                # "TV" -> watch
                # "bath" -> taking
                # "ski" -> skiing
                # "table tennis" -> playing
                # "soba" -> making (or eating? "作っていました" -> making)
                # "homework" -> doing
                
                # If I can't determine, I might skip or use a generic "was/were doing".
                
                # For the sake of this task, I will try to handle as many as possible.
                
                if not correct:
                    # Fallback for 232+
                    lower_q = q_text.lower()
                    if "tennis" in lower_q: correct = "was playing"
                    elif "book" in lower_q: correct = "were reading" if "you" in lower_q else "was reading"
                    elif "tv" in lower_q: correct = "was watching"
                    elif "rain" in lower_q: correct = "was raining"
                    elif "snow" in lower_q: correct = "was snowing"
                    elif "bath" in lower_q: correct = "was taking"
                    elif "homework" in lower_q: correct = "was doing"
                    elif "soba" in lower_q: correct = "was making"
                    
                    if correct:
                        opts = [correct, correct.replace("was", "is"), correct.replace("ing", "ed"), "played"]
                        random.shuffle(opts)

                if correct:
                    questions.append({
                        "question": q_text.replace('( )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": f"Answer: {correct}"
                    })

            except Exception as e:
                print(f"Error parsing col 3: {e}")

print(json.dumps(questions, indent=4))
