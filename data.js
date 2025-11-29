const quizData = {
    english: {
        title: "English Challenge",
        questions: [
            {
                question: "I ( ) happy yesterday.",
                options: ["is", "was", "were", "are"],
                answer: 1,
                hint: "「昨日(yesterday)」のことなので過去形を使います。主語は「I」です。"
            },
            {
                question: "She ( ) tennis every Sunday.",
                options: ["play", "plays", "playing", "played"],
                answer: 1,
                hint: "「毎週日曜日」の習慣なので現在形。主語は「She(三人称単数)」です。"
            },
            {
                question: "They ( ) watching TV now.",
                options: ["is", "am", "are", "be"],
                answer: 2,
                hint: "「今〜している(now)」なので現在進行形(be動詞 + ing)。主語は「They」です。"
            },
            {
                question: "He went to the park ( ) play soccer.",
                options: ["for", "to", "at", "on"],
                answer: 1,
                hint: "「〜するために」という不定詞(to + 動詞の原形)を使います。"
            },
            {
                question: "This is the book ( ) I bought yesterday.",
                options: ["who", "whose", "which", "where"],
                answer: 2,
                hint: "先行詞が「本(物)」なので、関係代名詞は which または that を使います。"
            }
        ]
    },
    math: {
        title: "Math Challenge",
        questions: [
            {
                question: "(-3) × (-4) = ?",
                options: ["-12", "7", "12", "-7"],
                answer: 2,
                hint: "マイナス × マイナス ＝ プラス です。"
            },
            {
                question: "2x + 5 = 13. x = ?",
                options: ["3", "4", "8", "9"],
                answer: 1,
                hint: "まず両辺から5を引いて、2x = 8 にします。"
            },
            {
                question: "三角形の面積を求める公式は？",
                options: ["底辺 × 高さ", "底辺 × 高さ ÷ 2", "(上底 + 下底) × 高さ ÷ 2", "半径 × 半径 × 3.14"],
                answer: 1,
                hint: "四角形の面積の半分と考えましょう。"
            }
        ]
    },
    science: {
        title: "Science Challenge",
        questions: [
            {
                question: "植物が光を受けて養分を作る働きを何という？",
                options: ["呼吸", "蒸散", "光合成", "消化"],
                answer: 2,
                hint: "「光」を「合」成する働きです。"
            }
        ]
    },
    social: {
        title: "Social Studies Challenge",
        questions: [
            {
                question: "1603年に江戸幕府を開いたのは誰？",
                options: ["織田信長", "豊臣秀吉", "徳川家康", "聖徳太子"],
                answer: 2,
                hint: "「鳴かぬなら鳴くまで待とう...」"
            }
        ]
    },
    japanese: {
        title: "Japanese Challenge",
        questions: [
            {
                question: "「走る」の活用形は？",
                options: ["五段活用", "上一段活用", "下一段活用", "カ行変格活用"],
                answer: 0,
                hint: "「走らない(a)」「走ります(i)」「走る(u)」「走れば(e)」「走ろう(o)」"
            }
        ]
    },
    english_be_past: {
        title: "be動詞の過去形 (was/were)",
        questions: [
            {
                "question": "I ( ) happy.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) you busy?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "I am happy. → I ( ) happy.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "You ( ) sad.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) I wrong?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "You are sad. → You ( ) sad.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "He ( ) busy.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) he right?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "He is busy. → He ( ) busy.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "She ( ) free.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) she pretty?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "She is free. → She ( ) free.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "It ( ) hot.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) it tasty?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "It is hot. → It ( ) hot.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "We ( ) tired.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) we late?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "We are tired. → We ( ) tired.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "They ( ) fine.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) they early?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "They are fine. → They ( ) fine.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Ken ( ) kind.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) Ken tall?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Ken is kind. → Ken ( ) kind.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Emi ( ) cute.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) Emi short?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Emi is cute. → Emi ( ) cute.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "The dog ( ) big.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "( ) the dog white?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "The dog is big. → The dog ( ) big.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "You ( ) a student.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Where ( ) your bag?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "You are a student. → You ( ) a student.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "I ( ) a teacher.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Where ( ) your bags?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "I am a teacher. → I ( ) a teacher.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "He ( ) a doctor.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Who ( ) that man?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "He is a doctor. → He ( ) a doctor.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "She ( ) a nurse.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Who ( ) those men?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "She is a nurse. → She ( ) a nurse.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "It ( ) a cat.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "What ( ) his name?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "It is a cat. → It ( ) a cat.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "We ( ) friends.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "What ( ) those things?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "We are friends. → We ( ) friends.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "They ( ) players.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "How ( ) the test?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "They are players. → They ( ) players.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Mike ( ) strong.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "How ( ) the apples?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Mike is strong. → Mike ( ) strong.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Tom ( ) fast.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "When ( ) his birthday?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Tom is fast. → Tom ( ) fast.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "The cat ( ) small.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "When ( ) the games?",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "The cat is small. → The cat ( ) small.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "I ( ) in Tokyo.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "That ( ) not mine.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "I am in Tokyo. → I ( ) in Tokyo.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "You ( ) in Osaka.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "These ( ) not yours.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "You are in Osaka. → You ( ) in Osaka.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "He ( ) at home.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "This ( ) my desk.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "He is at home. → He ( ) at home.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "She ( ) at school.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "Those ( ) your shoes.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 2,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "She is at school. → She ( ) at school.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            },
            {
                "question": "It ( ) in the box.",
                "options": [
                    "is",
                    "was",
                    "were",
                    "are"
                ],
                "answer": 1,
                "hint": "過去形: 単数→was, 複数/You→were"
            }
        ]
    }
};
