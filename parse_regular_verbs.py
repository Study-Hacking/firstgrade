import csv
import json
import random

def get_past_tense(verb):
    if verb.endswith('e'):
        return verb + 'd'
    elif verb.endswith('y') and verb[-2] not in 'aeiou':
        return verb[:-1] + 'ied'
    elif verb in ['stop', 'drop', 'shop', 'hop', 'jog', 'step', 'clap', 'plan']: # Simple rule for this dataset
        return verb + verb[-1] + 'ed'
    else:
        return verb + 'ed'

def generate_distractors(verb, correct_past):
    distractors = set()
    
    # Common mistakes
    distractors.add(verb + 'd') # playd
    distractors.add(verb + 'ed') # likeed (if ends in e)
    distractors.add(verb + 'ing') # playing
    distractors.add(verb + 's') # plays
    
    if verb.endswith('y'):
        distractors.add(verb + 'ed') # played (for study -> studyed)
        distractors.add(verb[:-1] + 'id') # studid
    
    if correct_past.endswith('pped') or correct_past.endswith('nned'):
        distractors.add(verb + 'ed') # stoped
    
    # Remove correct answer if generated
    if correct_past in distractors:
        distractors.remove(correct_past)
        
    # Remove invalid forms that might accidentally be correct in some universe or just too weird
    final_distractors = []
    for d in distractors:
        if d != correct_past:
            final_distractors.append(d)
            
    # Fill with generic ones if needed
    while len(final_distractors) < 3:
        if 'did ' + verb not in final_distractors:
            final_distractors.append('did ' + verb)
        elif 'was ' + verb not in final_distractors:
            final_distractors.append('was ' + verb)
        else:
            final_distractors.append(verb) # present tense
            
    return list(final_distractors)[:3]

questions = []

with open('regular_verbs_raw.csv', 'r') as f:
    reader = csv.reader(f)
    header = next(reader) # Skip header
    
    for row in reader:
        # Column 1: Basic
        if len(row) > 1 and row[1]:
            q_text = row[1]
            verb = q_text.split(' ')[0]
            correct = get_past_tense(verb)
            
            opts = generate_distractors(verb, correct)
            opts.append(correct)
            random.shuffle(opts)
            
            questions.append({
                "question": q_text.replace('( )', '( ? )'),
                "options": opts,
                "answer": opts.index(correct),
                "hint": f"The past tense of '{verb}' is '{correct}'."
            })
            
        # Column 2: -d / -ied / double
        if len(row) > 3 and row[3]:
            q_text = row[3]
            verb = q_text.split(' ')[0]
            correct = get_past_tense(verb)
            
            opts = generate_distractors(verb, correct)
            opts.append(correct)
            random.shuffle(opts)
            
            questions.append({
                "question": q_text.replace('( )', '( ? )'),
                "options": opts,
                "answer": opts.index(correct),
                "hint": f"The past tense of '{verb}' is '{correct}'."
            })

        # Column 3: Sentences
        if len(row) > 5 and row[5]:
            q_text = row[5]
            # Format: I ( play ) tennis. → ( played ) OR I ( play ) tennis. → ( )
            # We need to extract the verb from the first parenthesis
            parts = q_text.split('→')
            sentence_part = parts[0]
            
            # Extract verb from "I ( play ) tennis."
            try:
                start = sentence_part.find('(') + 1
                end = sentence_part.find(')')
                verb = sentence_part[start:end].strip()
                
                correct = get_past_tense(verb)
                
                # Clean up question text to hide the answer if it's there
                clean_q = sentence_part.strip() + " → ( ? )"
                
                opts = generate_distractors(verb, correct)
                opts.append(correct)
                random.shuffle(opts)
                
                questions.append({
                    "question": clean_q,
                    "options": opts,
                    "answer": opts.index(correct),
                    "hint": f"The past tense of '{verb}' is '{correct}'."
                })
            except:
                print(f"Skipping row due to parse error: {row}")

print(json.dumps(questions, indent=4))
