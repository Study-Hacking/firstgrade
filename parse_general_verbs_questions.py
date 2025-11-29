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

def parse_line(line, line_num):
    parts = re.split(r'\t+', line.strip())
    parts = [p for p in parts if p.strip()]
    
    if not parts: return

    try:
        q_num = int(parts[0].replace('.', ''))
    except:
        return

    # 1-100: look/looks (Rows 1-34)
    if q_num <= 100:
        # Col 1 (1-34)
        if len(parts) >= 2:
            q_text = parts[1]
            if '(          )' in q_text and 'look' not in q_text: # "You ( ) happy."
                # Infer subject
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
            # "彼は忙しそうです。→ He ( ) ( )."
            if '→' in q_text:
                eng_part = q_text.split('→')[1].strip()
                # He ( ) ( ).
                # Need to fill look/looks + adj
                # Extract adj from Japanese? Or hardcode?
                # Actually, the adj is usually in the Japanese part.
                # But simpler: The question asks for "look/looks" + "adj".
                # Wait, the blank is ( ) ( ).
                # 68: busy
                # 69: free (暇) -> busy? No, "暇" is free.
                # 70: interesting (面白そう)
                # 71: sleepy
                # 72: sad
                # 73: big
                # 74: small
                # 75: good
                # 76: difficult/hard
                # 77: tired
                # 78: strange (in Q98) -> Q78 "あなたは疲れて見えます" -> tired
                # 79: kind
                # 80: strict/scary
                # 81: sweet
                # 82: spicy/hot
                # 83: young
                # 84: old
                # 85: happy/fun -> "楽しそうです" -> happy / having fun? "looks happy" usually.
                # 86: strong
                # 87: weak
                # 88: fast
                # 89: expensive
                # 90: easy
                # 91: difficult
                # 92: good/nice/fine
                # 93: interesting
                # 94: true
                # 95: "元気じゃなさそうです" -> doesn't look well/fine/energetic?
                # 96: "幸せじゃなさそうです" -> doesn't look happy
                # 97: "良く見えません" -> doesn't look good
                # 98: "変に見えますか" -> look strange
                # 99: "どう見えますか" -> look
                # 100: "どう見えますか" -> look
                
                # This is tricky to parse automatically.
                # However, looking at the pattern:
                # 95: He doesn't ( ) ( ). -> look well?
                # 98: Do I ( ) strange? -> look
                # 99: How does he ( )? -> look
                
                # Let's use a heuristic or just fill "look/looks" for the first blank if 2 blanks?
                # Or maybe the user wants the full phrase?
                # "He ( ) ( )." -> "looks busy"
                
                # I'll try to map based on Japanese keywords if possible, or just provide generic options if it's too hard.
                # Actually, for 68-94, it's "looks [adj]".
                # For 95-97, it's "look [adj]".
                # For 98-100, it's "look".
                
                # Let's try to extract the subject and decide look/looks.
                match = re.search(r'([a-zA-Z]+) \(', eng_part)
                if match:
                    subj = match.group(1)
                    verb = get_look_looks(subj)
                    
                    # Special cases
                    if "doesn't" in eng_part or "don't" in eng_part or "does" in eng_part or "do" in eng_part:
                        verb = "look" # Base form after do/does
                    
                    # If 2 blanks, we need an adjective.
                    # I will skip parsing the exact adjective and just provide options like "looks busy", "look busy", "looks happy", "look happy"
                    # and rely on the user to pick the right grammar (look vs looks).
                    # But the adjective matters.
                    
                    # Let's map row number to adjective for 68-94.
                    adjs = {
                        68: 'busy', 69: 'free', 70: 'interesting', 71: 'sleepy', 72: 'sad',
                        73: 'big', 74: 'small', 75: 'good', 76: 'difficult', 77: 'tired',
                        78: 'strange', 79: 'kind', 80: 'strict', 81: 'sweet', 82: 'spicy',
                        83: 'young', 84: 'old', 85: 'happy', 86: 'strong', 87: 'weak',
                        88: 'fast', 89: 'expensive', 90: 'easy', 91: 'difficult', 92: 'nice',
                        93: 'interesting', 94: 'true'
                    }
                    
                    adj = adjs.get(line_num, 'happy') # Default
                    
                    if line_num >= 98: # Single blank "look"
                         correct = "look"
                         opts = ["look", "looks", "looking", "looked"]
                         questions.append({
                            "question": q_text.replace('(          )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": "After do/does, use base form 'look'."
                        })
                    elif line_num >= 95: # Negative "doesn't ( ) ( )" -> "look [adj]"
                         # 95: well, 96: happy, 97: good
                         adj_neg = {95: 'well', 96: 'happy', 97: 'good'}
                         adj = adj_neg.get(line_num, 'good')
                         correct = f"look {adj}"
                         opts = [f"look {adj}", f"looks {adj}", f"looking {adj}", f"looked {adj}"]
                         random.shuffle(opts)
                         questions.append({
                            "question": q_text.replace('(          ) (          )', '( ? )'),
                            "options": opts,
                            "answer": opts.index(correct),
                            "hint": f"After doesn't, use base form 'look'."
                        })
                    else: # 68-94 "looks [adj]"
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

    # 101-200: Did you...?
    elif 101 <= q_num <= 200:
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
                # Extract verb in parens
                match = re.search(r'\(( [a-z]+ )\)', q_text) # "( played )"
                if match:
                    wrong_verb = match.group(1).strip()
                    # Simple heuristic to get base form
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
                    else: base = wrong_verb # Fallback
                    
                    # Special corrections for double consonants (stopped -> stop)
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
                    if 'they' in q_text and 'Yes, they' in q_text: correct = 'did'
                    elif 'he' in q_text and 'Yes, he' in q_text: correct = 'did'
                    elif 'she' in q_text and 'Yes, she' in q_text: correct = 'did'
                    elif 'it' in q_text and 'Yes, it' in q_text: correct = 'did'
                    elif 'Yes, I' in q_text: correct = 'did'
                    else: correct = 'did' # Fallback
                else: # No
                    correct = "didn't"
                
                opts = ["did", "didn't", "do", "don't"]
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": "Short answer with Did -> did / didn't"
                })

    # 201-300: What/Where & Mix
    elif 201 <= q_num <= 300:
        # Col 1: 201-234 "何をしましたか？→ What ( ) you do?" -> did
        if len(parts) >= 2:
            q_text = parts[1]
            if '→' in q_text:
                # 233, 234 are be verbs (Where were you?, Who was he?)
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
                # Extract words
                match = re.search(r'\((.*?)\)', q_text.split('→')[0])
                if match:
                    words = [w.strip() for w in match.group(1).split('/')]
                    # Logic to reconstruct sentence?
                    # 235: did what eat you -> What did you eat?
                    # 236: go where you did -> Where did you go?
                    # 248: did not I go -> I did not go.
                    
                    # Hard to reconstruct perfectly generically, but let's try based on Wh- word or Did/Subject
                    # Actually, I can just generate the correct answer string.
                    
                    # Manual mapping for tricky ones or generic logic
                    # Wh + did + subj + verb?
                    # Subj + did + not + verb?
                    
                    # Let's try to find the Wh word
                    wh = next((w for w in words if w.lower() in ['what', 'where', 'when', 'who', 'how', 'which']), None)
                    did = 'did'
                    not_word = 'not'
                    subj = next((w for w in words if w.lower() in ['you', 'he', 'she', 'they', 'ken', 'emi', 'it', 'i']), 'you')
                    verb = next((w for w in words if w not in [wh, did, not_word, subj, 'what', 'where', 'when', 'who', 'how', 'which', 'did', 'not', 'you', 'he', 'she', 'they', 'ken', 'emi', 'it', 'i']), '')
                    
                    if not_word in words: # Negative
                        correct = f"{subj.capitalize()} did not {verb}."
                    elif wh: # Wh question
                        correct = f"{wh.capitalize()} did {subj} {verb}?"
                    elif did in words: # Yes/No question
                        correct = f"Did {subj} {verb}?"
                    else:
                        correct = "Unknown"

                    # 261-267 are corrections: "( Do ) you go yesterday? -> ( )"
                    # 261: Did
                    # 262: Did
                    # 263: Did
                    # 264: Did
                    # 265: Did
                    # 266: Did (Were you play -> Did you play)
                    # 267: Did (Was he eat -> Did he eat)
                    
                    if line_num >= 261:
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
                        # Reordering questions
                        # Generate distractors by shuffling words differently
                        d1 = f"{did.capitalize()} {subj} {verb} {wh}?" if wh else f"{subj.capitalize()} {verb} {did}?"
                        d2 = f"{wh.capitalize()} {subj} {did} {verb}?" if wh else f"{did.capitalize()} {verb} {subj}?"
                        d3 = f"{subj.capitalize()} {did} {verb} {wh}?" if wh else f"{verb.capitalize()} {did} {subj}?"
                        
                        opts = [correct, d1, d2, d3]
                        # Clean up
                        opts = [o for o in opts if o != "Unknown"]
                        while len(opts) < 4: opts.append("Error")
                        
                        questions.append({
                            "question": q_text.replace('(          )', '( ? )'),
                            "options": opts,
                            "answer": 0, # Always first, then shuffle
                            "hint": "Order: Wh + did + Subject + Verb"
                        })
                        # Shuffle options
                        c = questions[-1]
                        combined = list(zip(c['options'], [0,1,2,3]))
                        random.shuffle(combined)
                        c['options'] = [x[0] for x in combined]
                        c['answer'] = [x[1] for x in combined].index(0)

        # Col 3: 268-300 "( ) you busy yesterday?" -> Was/Were vs Did
        if len(parts) >= 6:
            q_text = parts[5]
            if '(          )' in q_text:
                # Check for verb or adjective
                # 268: busy (adj) -> Were
                # 269: play (verb) -> Did
                # 270: happy (adj) -> Were
                # 271: watch (verb) -> Did
                # 272: a teacher (noun) -> Was
                # 273: go (verb) -> Did
                # 274: sad (adj) -> Was
                # 275: cry (verb) -> Did
                # 276: students (noun) -> Were
                # 277: study (verb) -> Did
                # 278: cold (adj) -> Was
                # 279: rain (verb) -> Did (or Was raining? usually Did it rain?)
                # 280: tired (adj) -> Were
                # 281: run (verb) -> Did
                
                # 282-290: Wh questions
                # 282: What ( ) you do? -> did
                # 283: Where ( ) you? -> were
                # 284: Where ( ) you go? -> did
                # 285: What ( ) that? -> was
                # 286: What ( ) you eat? -> did
                # 287: Who ( ) he? -> was
                # 288: Who ( ) you meet? -> did
                # 289: How ( ) the weather? -> was
                # 290: How ( ) you go? -> did
                
                # 291-300: Look vs Be?
                # 291: ( ) he happy? -> Was
                # 292: ( ) he look happy? -> Did
                # 293: ( ) she busy? -> Was
                # 294: ( ) she look busy? -> Did
                # 295: ( ) they kind? -> Were
                # 296: ( ) they look kind? -> Did
                # 297: ( ) it nice? -> Was
                # 298: ( ) it look nice? -> Did
                # 299: That ( ) interesting. -> looks (or looked?)
                # 300: That ( ) interesting. -> looks
                
                correct = ""
                if line_num >= 299:
                    correct = "looks"
                    opts = ["looks", "look", "looking", "looked"]
                elif "look" in q_text: # Did ... look ...?
                    correct = "Did"
                    opts = ["Did", "Was", "Were", "Does"]
                elif any(x in q_text for x in ["play", "go", "cry", "study", "rain", "run", "do", "eat", "meet"]):
                    correct = "Did" if "you" in q_text or "he" in q_text or "she" in q_text or "they" in q_text or "it" in q_text else "did"
                    opts = ["Did", "Was", "Were", "Do"]
                else: # Adjective/Noun -> Be verb
                    if "you" in q_text or "they" in q_text: correct = "Were"
                    else: correct = "Was"
                    opts = ["Was", "Were", "Did", "Do"]
                
                # Lowercase check for mid-sentence
                if q_text.startswith("What") or q_text.startswith("Where") or q_text.startswith("Who") or q_text.startswith("How"):
                    correct = correct.lower()
                    opts = [o.lower() for o in opts]
                
                random.shuffle(opts)
                questions.append({
                    "question": q_text.replace('(          )', '( ? )'),
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": "Action verb -> Did, State/Adjective -> Was/Were"
                })

with open('general_verbs_questions_raw.txt', 'r') as f:
    lines = f.readlines()
    lines = lines[1:] # Skip header
    for i, line in enumerate(lines):
        parse_line(line, i + 1)

print(json.dumps(questions, indent=4))
