import re
import json

def parse_questions():
    with open('raw_questions.txt', 'r', encoding='utf-8') as f:
        content = f.read()

    # The content is a continuous string with numbers embedded.
    # Regex to find "Number" followed by "Question Text"
    # Patterns: 
    # 1. "1I ( ) happy." -> No: 1, Q: "I ( ) happy."
    # 2. "101( ) you busy?" -> No: 101, Q: "( ) you busy?"
    # 3. "201I am happy. → I ( ) happy." -> No: 201, Q: "I am happy. → I ( ) happy."
    
    # We can split by the number pattern.
    # Look for a number followed by a non-digit character.
    
    # Normalize spaces
    # content = content.replace('\n', ' ')
    
    # Regex: (\d+)(.*?)  -- but this is tricky because the next number starts immediately.
    # Better: split by (\d+) but we need to keep the delimiter or lookahead.
    
    # Let's try to find all matches of "Number" + "Content" until the next "Number".
    # Since the numbers seem to be 1-100, 101-200, 201-300.
    
    # Actually, looking at the text: "1I ( ) happy.101( ) you busy?"
    # It seems the period or question mark ends the sentence, immediately followed by the next number.
    
    # Strategy:
    # 1. Find all occurrences of "Number" at the start or after a sentence ending.
    # But "1I" has no space.
    
    # Let's use a regex that looks for a number at the start of a logical segment.
    # Since we know the numbers go from 1 to 300 (roughly), maybe we can just look for them?
    # But 1, 2, 3... 10, 11...
    
    # Let's try to split by `(\d+)` and see what we get, then reconstruct.
    # But "12 years old" has a number in it.
    
    # Wait, the structure is:
    # 1...
    # 2...
    # ...
    # 100...
    # 101...
    # ...
    # 200...
    # 201...
    # ...
    # 300...
    
    # Let's assume the numbers are sequential in the chunks.
    # Chunk 1: 1-100
    # Chunk 2: 101-200
    # Chunk 3: 201-300
    
    # Let's try to regex find `(\d+)([^\d].*?)` and iterate?
    # No, because "12 years old" matches `12` and ` years old`.
    
    # Let's look at the specific format "Number" followed by "Text".
    # The text usually starts with a capital letter or `(`.
    # `1I`, `101(`, `201I`.
    # `2You`, `102(`, `202You`.
    
    # Regex: `(\d+)\s*([A-Z\(].*?)(?=\d+[A-Z\(]|$)`
    # This looks ahead for the next Number + Capital/Paren.
    
    pattern = r'(\d+)\s*([A-Z\(].*?)(?=\d+[A-Z\(]|$)'
    matches = re.findall(pattern, content, re.DOTALL)
    
    questions = []
    
    for num, text in matches:
        text = text.strip()
        # Determine answer based on subject
        # He/She/It/I/Name -> was (mostly)
        # We/You/They/Plural -> were
        
        # This is tricky to auto-detect perfectly without NLP, but let's try heuristics.
        # "I ( )" -> was
        # "You ( )" -> were
        # "He ( )" -> was
        # "She ( )" -> was
        # "It ( )" -> was
        # "We ( )" -> were
        # "They ( )" -> were
        # "The dog ( )" -> was
        # "The dogs ( )" -> were
        
        # Also handle "I am happy -> I ( ) happy"
        
        # Simple heuristic:
        # If subject is I, He, She, It, singular noun -> was
        # If subject is You, We, They, plural noun -> were
        
        # Let's look for keywords before the ( ).
        # Or just look at the text.
        
        options = ["was", "were"]
        answer = 0 # Default to 'was'
        
        lower_text = text.lower()
        
        # Check for 'were' triggers
        if any(x in lower_text for x in ['you (', 'we (', 'they (', 'these (', 'those (', 'plural', ' and ']):
            answer = 1 # were
        elif 'you' in lower_text and '?' in lower_text: # "( ) you busy?"
            answer = 1
        elif 'they' in lower_text and '?' in lower_text:
            answer = 1
        elif 'we' in lower_text and '?' in lower_text:
            answer = 1
        elif 'these' in lower_text or 'those' in lower_text:
            answer = 1
        elif 's (' in lower_text: # Plural noun ending in s? "The birds ( )"
            # Be careful with "This ( )"
            if 'this (' not in lower_text:
                 answer = 1
        elif 'men (' in lower_text or 'women (' in lower_text or 'children (' in lower_text or 'people (' in lower_text:
            answer = 1
        
        # Specific overrides/fixes
        if "tom and jerry" in lower_text: answer = 1
        if "ken and i" in lower_text: answer = 1
        if "you and i" in lower_text: answer = 1
        if "both of them" in lower_text: answer = 1
        if "all of us" in lower_text: answer = 1
        if "my parents" in lower_text: answer = 1
        if "my friends" in lower_text: answer = 1
        
        # Singular overrides (just to be safe)
        if "one of the" in lower_text: answer = 0 # One of the boys ( )
        if "each" in lower_text: answer = 0
        if "every" in lower_text: answer = 0
        
        # Questions starting with ( )
        # "( ) you" -> were
        # "( ) he" -> was
        # "( ) she" -> was
        # "( ) it" -> was
        # "( ) they" -> were
        # "( ) we" -> were
        
        if text.startswith('( )'):
            if 'you' in lower_text or 'they' in lower_text or 'we' in lower_text or 'these' in lower_text or 'those' in lower_text:
                answer = 1
            elif 'men' in lower_text or 'women' in lower_text: # "( ) the men...?"
                 answer = 1
            else:
                answer = 0
        
        # 4 choices: was, were, is, are
        # answer is index of correct one.
        
        # We want to randomize the order of options so the answer isn't always the same index?
        # The user said "same as before", previous example had fixed order ["is", "was", "were", "are"] with answer index.
        # But for 300 questions, maybe better to just have fixed set ["is", "was", "were", "are"]?
        # "is", "was", "were", "are" covers most cases.
        # If answer is 'was', index is 1.
        # If answer is 'were', index is 2.
        
        options = ["is", "was", "were", "are"]
        
        # Re-calculate answer index based on the fixed options list
        # If logic said 'was' (0 in previous logic), now it is index 1.
        # If logic said 'were' (1 in previous logic), now it is index 2.
        
        final_answer_index = 1 if answer == 0 else 2
        
        q_obj = {
            "question": text,
            "options": options,
            "answer": final_answer_index,
            "hint": "過去形: 単数→was, 複数/You→were"
        }
        questions.append(q_obj)
        
    print(json.dumps(questions, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    parse_questions()
