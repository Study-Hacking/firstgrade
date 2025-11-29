import re
import json
import random

questions = []

def get_look_looks(subject):
    subject = subject.lower()
    # Third person singular check
    if subject in ['i', 'you', 'we', 'they', 'these pens', 'those bikes', 'my friends', 'the cats', 'you and i', 'ken and tom', 'those apples', 'the rooms']:
        return 'look'
    else:
        return 'looks'

def parse_line(line):
    parts = re.split(r'\t+', line.strip())
    parts = [p for p in parts if p.strip()]
    
    if not parts: return

    try:
        q_num_col1 = int(parts[0].replace('.', ''))
    except:
        return

    # Calculate Q# for other columns based on offset
    q_num_col2 = q_num_col1 + 34
    q_num_col3 = q_num_col1 + 67

    # --- Block 1: 1-100 (look/looks) ---
    if q_num_col1 <= 34:
        # Col 1 (1-34)
        if len(parts) >= 2:
            q_text = parts[1]
            if '(          )' in q_text and 'look' not in q_text:
                subject = q_text.split('(')[0].strip()
                correct = get_look_looks(subject)
                opts = ['look', 'looks', 'looking', 'looked']
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": f"Subject '{subject}' -> {correct}"
                })
        
        # Col 2 (35-67)
        if len(parts) >= 4:
            q_text = parts[3]
            if '(          )' in q_text:
                subject = q_text.split('(')[0].strip()
                correct = get_look_looks(subject)
                opts = ['look', 'looks', 'looking', 'looked']
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": f"Subject '{subject}' -> {correct}"
                })
                
        # Col 3 (68-100)
        if len(parts) >= 6:
            q_text = parts[5]
            if '→' in q_text:
                eng_part = q_text.split('→')[1].strip()
                match = re.search(r'([a-zA-Z]+) \(', eng_part)
                if match:
                    subj = match.group(1)
                    verb = get_look_looks(subj)
                    
                    if "doesn't" in eng_part or "don't" in eng_part or "does" in eng_part or "do" in eng_part:
                        verb = "look"
                    
                    # Adjective mapping
                    adjs = {
                        68: 'busy', 69: 'free', 70: 'interesting', 71: 'sleepy', 72: 'sad',
                        73: 'big', 74: 'small', 75: 'good', 76: 'difficult', 77: 'tired',
                        78: 'strange', 79: 'kind', 80: 'strict', 81: 'sweet', 82: 'spicy',
                        83: 'young', 84: 'old', 85: 'happy', 86: 'strong', 87: 'weak',
                        88: 'fast', 89: 'expensive', 90: 'easy', 91: 'difficult', 92: 'nice',
                        93: 'interesting', 94: 'true'
                    }
                    
                    if q_num_col3 >= 98: # 98-100: "look"
                         correct = "look"
                         opts = ["look", "looks", "looking", "looked"]
                         questions.append({
                            "question": q_text.replace('(          )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": "After do/does, use base form 'look'."
                        })
                    elif q_num_col3 >= 95: # 95-97: "look [adj]"
                         adj_neg = {95: 'well', 96: 'happy', 97: 'good'}
                         adj = adj_neg.get(q_num_col3, 'good')
                         correct = f"look {adj}"
                         opts = [f"look {adj}", f"looks {adj}", f"looking {adj}", f"looked {adj}"]
                         random.shuffle(opts)
                         questions.append({
                            "question": q_text.replace('(          ) (          )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": f"After doesn't, use base form 'look'."
                        })
                    else: # 68-94: "looks [adj]"
                         adj = adjs.get(q_num_col3, 'happy')
                         correct = f"{verb} {adj}"
                         wrong_verb = 'look' if verb == 'looks' else 'looks'
                         opts = [f"{verb} {adj}", f"{wrong_verb} {adj}", f"is {adj}", f"are {adj}"]
                         random.shuffle(opts)
                         questions.append({
                            "question": q_text.replace('(          ) (          )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": f"Subject '{subj}' -> {verb}"
                        })

    # --- Block 2: 101-200 (Did you...?) ---
    elif 101 <= q_num_col1 <= 134:
        # Col 1: 101-134 "You played. → ( ) you play?" -> Did
        if len(parts) >= 2:
            q_text = parts[1]
            if '→' in q_text:
                correct = "Did"
                opts = ["Did", "Do", "Does", "Was"]
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": "Past tense question -> Did"
                })

        # Col 2: 135-167 "Did you ( played )? → ( )" -> play
        if len(parts) >= 4:
            q_text = parts[3]
            if '→' in q_text:
                match = re.search(r'\(( [a-z]+ )\)', q_text)
                if match:
                    wrong_verb = match.group(1).strip()
                    # Heuristic for base form
                    if wrong_verb.endswith('ied'): base = wrong_verb[:-3] + 'y'
                    elif wrong_verb.endswith('ed'): base = wrong_verb[:-2]
                    elif wrong_verb == 'went': base = 'go'
                    elif wrong_verb == 'came': base = 'come'
                    elif wrong_verb == 'had': base = 'have'
                    elif wrong_verb == 'ate': base = 'eat'
                    elif wrong_verb == 'saw': base = 'see'
                    elif wrong_verb == 'bought': base = 'buy'
                    elif wrong_verb == 'wrote': base = 'write'
                    elif wrong_verb == 'ran': base = 'run'
                    elif wrong_verb == 'spoke': base = 'speak'
                    elif wrong_verb == 'knew': base = 'know'
                    elif wrong_verb == 'made': base = 'make'
                    elif wrong_verb == 'took': base = 'take'
                    elif wrong_verb == 'got': base = 'get'
                    elif wrong_verb == 'left': base = 'leave'
                    elif wrong_verb == 'met': base = 'meet'
                    elif wrong_verb == 'sang': base = 'sing'
                    elif wrong_verb == 'began': base = 'begin'
                    elif wrong_verb == 'drank': base = 'drink'
                    elif wrong_verb == 'slept': base = 'sleep'
                    elif wrong_verb == 'swam': base = 'swim'
                    else: base = wrong_verb
                    
                    if base.endswith('pp'): base = base[:-1]
                    if base.endswith('tt'): base = base[:-1]
                    if base.endswith('gg'): base = base[:-1]
                    
                    correct = base
                    opts = [base, wrong_verb, base+'s', base+'ing']
                    random.shuffle(opts)
                    questions.append({
                        "question": q_text.replace('(          )', '( ? )'),
                        "options": opts,
                        "answer": opts.index(correct),
                        "hint": "After Did, use the base form."
                    })

        # Col 3: 168-200 "Did you play? (Yes) → Yes, I ( )." -> did
        if len(parts) >= 6:
            q_text = parts[5]
            if '→' in q_text:
                if '(Yes)' in q_text:
                    correct = 'did'
                else:
                    correct = "didn't"
                
                opts = ["did", "didn't", "do", "don't"]
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": "Short answer with Did -> did / didn't"
                })

    # --- Block 3: 201-300 (What/Where & Mix) ---
    elif 201 <= q_num_col1 <= 234:
        # Col 1: 201-234 "何をしましたか？→ What ( ) you do?" -> did
        if len(parts) >= 2:
            q_text = parts[1]
            if '→' in q_text:
                if '※be動詞' in q_text:
                    if 'you' in q_text: correct = 'were'
                    else: correct = 'was'
                    opts = ['was', 'were', 'did', 'are']
                else:
                    correct = 'did'
                    opts = ['did', 'do', 'does', 'was']
                
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": "Past tense question."
                })

        # Col 2: 235-267 "( did / what / eat / you )? → ( )" -> Reorder
        if len(parts) >= 4:
            q_text = parts[3]
            if '→' in q_text:
                match = re.search(r'\((.*?)\)', q_text.split('→')[0])
                if match:
                    words = [w.strip() for w in match.group(1).split('/')]
                    wh = next((w for w in words if w.lower() in ['what', 'where', 'when', 'who', 'how', 'which']), None)
                    did = 'did'
                    not_word = 'not'
                    subj = next((w for w in words if w.lower() in ['you', 'he', 'she', 'they', 'ken', 'emi', 'it', 'i']), 'you')
                    verb = next((w for w in words if w not in [wh, did, not_word, subj, 'what', 'where', 'when', 'who', 'how', 'which', 'did', 'not', 'you', 'he', 'she', 'they', 'ken', 'emi', 'it', 'i']), '')
                    
                    if not_word in words:
                        correct = f"{subj.capitalize()} did not {verb}."
                    elif wh:
                        correct = f"{wh.capitalize()} did {subj} {verb}?"
                    elif did in words:
                        correct = f"Did {subj} {verb}?"
                    else:
                        correct = "Unknown"

                    if q_num_col2 >= 261:
                        correct = "Did"
                        opts = ["Did", "Do", "Does", "Was"]
                        random.shuffle(opts)
                        questions.append({
                            "question": q_text.replace('(          )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": "Past tense question -> Did"
                        })
                    else:
                        d1 = f"{did.capitalize()} {subj} {verb} {wh}?" if wh else f"{subj.capitalize()} {verb} {did}?"
                        d2 = f"{wh.capitalize()} {subj} {did} {verb}?" if wh else f"{did.capitalize()} {verb} {subj}?"
                        d3 = f"{subj.capitalize()} {did} {verb} {wh}?" if wh else f"{verb.capitalize()} {did} {subj}?"
                        
                        opts = [correct, d1, d2, d3]
                        opts = [o for o in opts if o != "Unknown"]
                        while len(opts) < 4: opts.append("Error")
                        
                        questions.append({
                            "question": q_text.replace('(          )', '( ? )'),
                            "options": opts,
                            "answer": 0,
                            "hint": "Order: Wh + did + Subject + Verb"
                        })
                        c = questions[-1]
                        combined = list(zip(c['options'], [0,1,2,3]))
                        random.shuffle(combined)
                        c['options'] = [x[0] for x in combined]
                        c['answer'] = [x[1] for x in combined].index(0)

        # Col 3: 268-300 "( ) you busy yesterday?" -> Was/Were vs Did
        if len(parts) >= 6:
            q_text = parts[5]
            if '(          )' in q_text:
                correct = ""
                if q_num_col3 >= 299:
                    correct = "looks"
                    opts = ["looks", "look", "looking", "looked"]
                elif "look" in q_text:
                    correct = "Did"
                    opts = ["Did", "Was", "Were", "Does"]
                elif any(x in q_text for x in ["play", "go", "cry", "study", "rain", "run", "do", "eat", "meet"]):
                    correct = "Did" if "you" in q_text or "he" in q_text or "she" in q_text or "they" in q_text or "it" in q_text else "did"
                    opts = ["Did", "Was", "Were", "Do"]
                else:
                    if "you" in q_text or "they" in q_text: correct = "Were"
                    else: correct = "Was"
                    opts = ["Was", "Were", "Did", "Do"]
                
                if q_num_col3 < 299 and (q_text.startswith("What") or q_text.startswith("Where") or q_text.startswith("Who") or q_text.startswith("How")):
                    correct = correct.lower()
                    opts = [o.lower() for o in opts]
                if q_num_col3 >= 299:
                    hint_text = "Subject 'That' -> looks"
                elif "look" in q_text:
                    hint_text = "Action verb -> Did, State/Adjective -> Was/Were"
                else:
                    hint_text = "Action verb -> Did, State/Adjective -> Was/Were"
                
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": hint_text
                })

with open('general_verbs_questions_raw.txt', 'r') as f:
    lines = f.readlines()
    lines = lines[1:] # Skip header
    for line in lines:
        parse_line(line)

print(json.dumps(questions, indent=4))
