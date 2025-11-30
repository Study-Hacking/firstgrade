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

quizData.english_regular_past = {
    title: "規則動詞の過去形 (-ed)",
    questions: [
        {
            "question": "play \u2192 ( ? )",
            "options": [
                "plays",
                "played",
                "playing",
                "playd"
            ],
            "answer": 1,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "like \u2192 ( ? )",
            "options": [
                "likeed",
                "likeing",
                "likes",
                "liked"
            ],
            "answer": 3,
            "hint": "The past tense of 'like' is 'liked'."
        },
        {
            "question": "I ( play ) tennis. \u2192 ( ? )",
            "options": [
                "played",
                "playing",
                "playd",
                "plays"
            ],
            "answer": 0,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "watch \u2192 ( ? )",
            "options": [
                "watchs",
                "watched",
                "watching",
                "watchd"
            ],
            "answer": 1,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "live \u2192 ( ? )",
            "options": [
                "liveing",
                "lived",
                "lives",
                "liveed"
            ],
            "answer": 1,
            "hint": "The past tense of 'live' is 'lived'."
        },
        {
            "question": "You ( play ) guitar. \u2192 ( ? )",
            "options": [
                "plays",
                "played",
                "playd",
                "playing"
            ],
            "answer": 1,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "cook \u2192 ( ? )",
            "options": [
                "cooked",
                "cooking",
                "cooks",
                "cookd"
            ],
            "answer": 0,
            "hint": "The past tense of 'cook' is 'cooked'."
        },
        {
            "question": "use \u2192 ( ? )",
            "options": [
                "uses",
                "useing",
                "useed",
                "used"
            ],
            "answer": 3,
            "hint": "The past tense of 'use' is 'used'."
        },
        {
            "question": "He ( play ) baseball. \u2192 ( ? )",
            "options": [
                "plays",
                "playing",
                "played",
                "playd"
            ],
            "answer": 2,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "walk \u2192 ( ? )",
            "options": [
                "walked",
                "walkd",
                "walking",
                "walks"
            ],
            "answer": 0,
            "hint": "The past tense of 'walk' is 'walked'."
        },
        {
            "question": "hope \u2192 ( ? )",
            "options": [
                "hopeed",
                "hopeing",
                "hoped",
                "hopes"
            ],
            "answer": 2,
            "hint": "The past tense of 'hope' is 'hoped'."
        },
        {
            "question": "She ( play ) games. \u2192 ( ? )",
            "options": [
                "plays",
                "played",
                "playing",
                "playd"
            ],
            "answer": 1,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "listen \u2192 ( ? )",
            "options": [
                "listening",
                "listened",
                "listens",
                "listend"
            ],
            "answer": 1,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "love \u2192 ( ? )",
            "options": [
                "loved",
                "loveed",
                "loveing",
                "loves"
            ],
            "answer": 0,
            "hint": "The past tense of 'love' is 'loved'."
        },
        {
            "question": "We ( play ) soccer. \u2192 ( ? )",
            "options": [
                "plays",
                "playd",
                "playing",
                "played"
            ],
            "answer": 3,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "look \u2192 ( ? )",
            "options": [
                "looked",
                "looking",
                "lookd",
                "looks"
            ],
            "answer": 0,
            "hint": "The past tense of 'look' is 'looked'."
        },
        {
            "question": "dance \u2192 ( ? )",
            "options": [
                "danceing",
                "dances",
                "danced",
                "danceed"
            ],
            "answer": 2,
            "hint": "The past tense of 'dance' is 'danced'."
        },
        {
            "question": "They ( play ) cards. \u2192 ( ? )",
            "options": [
                "played",
                "playing",
                "plays",
                "playd"
            ],
            "answer": 0,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "want \u2192 ( ? )",
            "options": [
                "wanted",
                "wanting",
                "wantd",
                "wants"
            ],
            "answer": 0,
            "hint": "The past tense of 'want' is 'wanted'."
        },
        {
            "question": "smile \u2192 ( ? )",
            "options": [
                "smileing",
                "smileed",
                "smiled",
                "smiles"
            ],
            "answer": 2,
            "hint": "The past tense of 'smile' is 'smiled'."
        },
        {
            "question": "I ( watch ) TV. \u2192 ( ? )",
            "options": [
                "watching",
                "watchs",
                "watched",
                "watchd"
            ],
            "answer": 2,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "talk \u2192 ( ? )",
            "options": [
                "talkd",
                "talked",
                "talks",
                "talking"
            ],
            "answer": 1,
            "hint": "The past tense of 'talk' is 'talked'."
        },
        {
            "question": "move \u2192 ( ? )",
            "options": [
                "moveed",
                "moved",
                "moveing",
                "moves"
            ],
            "answer": 1,
            "hint": "The past tense of 'move' is 'moved'."
        },
        {
            "question": "You ( watch ) a movie. \u2192 ( ? )",
            "options": [
                "watchd",
                "watching",
                "watched",
                "watchs"
            ],
            "answer": 2,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "help \u2192 ( ? )",
            "options": [
                "helps",
                "helped",
                "helping",
                "helpd"
            ],
            "answer": 1,
            "hint": "The past tense of 'help' is 'helped'."
        },
        {
            "question": "arrive \u2192 ( ? )",
            "options": [
                "arriveed",
                "arrived",
                "arriveing",
                "arrives"
            ],
            "answer": 1,
            "hint": "The past tense of 'arrive' is 'arrived'."
        },
        {
            "question": "He ( watch ) the game. \u2192 ( ? )",
            "options": [
                "watchs",
                "watched",
                "watchd",
                "watching"
            ],
            "answer": 1,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "visit \u2192 ( ? )",
            "options": [
                "visitd",
                "visiting",
                "visits",
                "visited"
            ],
            "answer": 3,
            "hint": "The past tense of 'visit' is 'visited'."
        },
        {
            "question": "close \u2192 ( ? )",
            "options": [
                "closeing",
                "closed",
                "closeed",
                "closes"
            ],
            "answer": 1,
            "hint": "The past tense of 'close' is 'closed'."
        },
        {
            "question": "She ( watch ) YouTube. \u2192 ( ? )",
            "options": [
                "watchs",
                "watching",
                "watched",
                "watchd"
            ],
            "answer": 2,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "clean \u2192 ( ? )",
            "options": [
                "cleans",
                "cleaning",
                "cleaned",
                "cleand"
            ],
            "answer": 2,
            "hint": "The past tense of 'clean' is 'cleaned'."
        },
        {
            "question": "invite \u2192 ( ? )",
            "options": [
                "inviteing",
                "invited",
                "invites",
                "inviteed"
            ],
            "answer": 1,
            "hint": "The past tense of 'invite' is 'invited'."
        },
        {
            "question": "We ( cook ) dinner. \u2192 ( ? )",
            "options": [
                "cooked",
                "cooks",
                "cookd",
                "cooking"
            ],
            "answer": 0,
            "hint": "The past tense of 'cook' is 'cooked'."
        },
        {
            "question": "wash \u2192 ( ? )",
            "options": [
                "washing",
                "washed",
                "washs",
                "washd"
            ],
            "answer": 1,
            "hint": "The past tense of 'wash' is 'washed'."
        },
        {
            "question": "bake \u2192 ( ? )",
            "options": [
                "bakeing",
                "bakeed",
                "bakes",
                "baked"
            ],
            "answer": 3,
            "hint": "The past tense of 'bake' is 'baked'."
        },
        {
            "question": "They ( cook ) lunch. \u2192 ( ? )",
            "options": [
                "cooks",
                "cookd",
                "cooked",
                "cooking"
            ],
            "answer": 2,
            "hint": "The past tense of 'cook' is 'cooked'."
        },
        {
            "question": "open \u2192 ( ? )",
            "options": [
                "opening",
                "opens",
                "opened",
                "opend"
            ],
            "answer": 2,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "practice \u2192 ( ? )",
            "options": [
                "practiceing",
                "practices",
                "practiced",
                "practiceed"
            ],
            "answer": 2,
            "hint": "The past tense of 'practice' is 'practiced'."
        },
        {
            "question": "I ( walk ) to school. \u2192 ( ? )",
            "options": [
                "walking",
                "walkd",
                "walked",
                "walks"
            ],
            "answer": 2,
            "hint": "The past tense of 'walk' is 'walked'."
        },
        {
            "question": "start \u2192 ( ? )",
            "options": [
                "starts",
                "startd",
                "starting",
                "started"
            ],
            "answer": 3,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "change \u2192 ( ? )",
            "options": [
                "changeing",
                "changes",
                "changed",
                "changeed"
            ],
            "answer": 2,
            "hint": "The past tense of 'change' is 'changed'."
        },
        {
            "question": "You ( walk ) in the park. \u2192 ( ? )",
            "options": [
                "walks",
                "walked",
                "walkd",
                "walking"
            ],
            "answer": 1,
            "hint": "The past tense of 'walk' is 'walked'."
        },
        {
            "question": "finish \u2192 ( ? )",
            "options": [
                "finishs",
                "finishing",
                "finished",
                "finishd"
            ],
            "answer": 2,
            "hint": "The past tense of 'finish' is 'finished'."
        },
        {
            "question": "save \u2192 ( ? )",
            "options": [
                "saved",
                "saveed",
                "saveing",
                "saves"
            ],
            "answer": 0,
            "hint": "The past tense of 'save' is 'saved'."
        },
        {
            "question": "He ( listen ) to music. \u2192 ( ? )",
            "options": [
                "listened",
                "listening",
                "listens",
                "listend"
            ],
            "answer": 0,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "enjoy \u2192 ( ? )",
            "options": [
                "enjoys",
                "enjoying",
                "enjoyed",
                "enjoid"
            ],
            "answer": 2,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "believe \u2192 ( ? )",
            "options": [
                "believeed",
                "believeing",
                "believes",
                "believed"
            ],
            "answer": 3,
            "hint": "The past tense of 'believe' is 'believed'."
        },
        {
            "question": "She ( listen ) to the radio. \u2192 ( ? )",
            "options": [
                "listend",
                "listened",
                "listens",
                "listening"
            ],
            "answer": 1,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "stay \u2192 ( ? )",
            "options": [
                "stays",
                "stayed",
                "stayd",
                "staying"
            ],
            "answer": 1,
            "hint": "The past tense of 'stay' is 'stayed'."
        },
        {
            "question": "receive \u2192 ( ? )",
            "options": [
                "receiveed",
                "receiveing",
                "receives",
                "received"
            ],
            "answer": 3,
            "hint": "The past tense of 'receive' is 'received'."
        },
        {
            "question": "We ( look ) at the picture. \u2192 ( ? )",
            "options": [
                "looking",
                "looked",
                "looks",
                "lookd"
            ],
            "answer": 1,
            "hint": "The past tense of 'look' is 'looked'."
        },
        {
            "question": "call \u2192 ( ? )",
            "options": [
                "calls",
                "calling",
                "calld",
                "called"
            ],
            "answer": 3,
            "hint": "The past tense of 'call' is 'called'."
        },
        {
            "question": "decide \u2192 ( ? )",
            "options": [
                "decides",
                "decideing",
                "decideed",
                "decided"
            ],
            "answer": 3,
            "hint": "The past tense of 'decide' is 'decided'."
        },
        {
            "question": "They ( look ) at the stars. \u2192 ( ? )",
            "options": [
                "looks",
                "looked",
                "lookd",
                "looking"
            ],
            "answer": 1,
            "hint": "The past tense of 'look' is 'looked'."
        },
        {
            "question": "wait \u2192 ( ? )",
            "options": [
                "waiting",
                "waitd",
                "waits",
                "waited"
            ],
            "answer": 3,
            "hint": "The past tense of 'wait' is 'waited'."
        },
        {
            "question": "die \u2192 ( ? )",
            "options": [
                "died",
                "dieed",
                "dies",
                "dieing"
            ],
            "answer": 0,
            "hint": "The past tense of 'die' is 'died'."
        },
        {
            "question": "I ( want ) a new bike. \u2192 ( ? )",
            "options": [
                "wantd",
                "wants",
                "wanting",
                "wanted"
            ],
            "answer": 3,
            "hint": "The past tense of 'want' is 'wanted'."
        },
        {
            "question": "rain \u2192 ( ? )",
            "options": [
                "rains",
                "raining",
                "raind",
                "rained"
            ],
            "answer": 3,
            "hint": "The past tense of 'rain' is 'rained'."
        },
        {
            "question": "like \u2192 ( ? )",
            "options": [
                "likes",
                "likeed",
                "likeing",
                "liked"
            ],
            "answer": 3,
            "hint": "The past tense of 'like' is 'liked'."
        },
        {
            "question": "You ( want ) some water. \u2192 ( ? )",
            "options": [
                "wanting",
                "wants",
                "wanted",
                "wantd"
            ],
            "answer": 2,
            "hint": "The past tense of 'want' is 'wanted'."
        },
        {
            "question": "show \u2192 ( ? )",
            "options": [
                "showd",
                "showed",
                "showing",
                "shows"
            ],
            "answer": 1,
            "hint": "The past tense of 'show' is 'showed'."
        },
        {
            "question": "study \u2192 ( ? )",
            "options": [
                "studied",
                "studid",
                "studys",
                "studying"
            ],
            "answer": 0,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "He ( talk ) with his friend. \u2192 ( ? )",
            "options": [
                "talked",
                "talks",
                "talkd",
                "talking"
            ],
            "answer": 0,
            "hint": "The past tense of 'talk' is 'talked'."
        },
        {
            "question": "answer \u2192 ( ? )",
            "options": [
                "answerd",
                "answering",
                "answered",
                "answers"
            ],
            "answer": 2,
            "hint": "The past tense of 'answer' is 'answered'."
        },
        {
            "question": "try \u2192 ( ? )",
            "options": [
                "tryd",
                "tryed",
                "trys",
                "tried"
            ],
            "answer": 3,
            "hint": "The past tense of 'try' is 'tried'."
        },
        {
            "question": "She ( talk ) to the teacher. \u2192 ( ? )",
            "options": [
                "talkd",
                "talking",
                "talks",
                "talked"
            ],
            "answer": 3,
            "hint": "The past tense of 'talk' is 'talked'."
        },
        {
            "question": "play \u2192 ( ? )",
            "options": [
                "playing",
                "played",
                "playd",
                "plays"
            ],
            "answer": 1,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "cry \u2192 ( ? )",
            "options": [
                "crying",
                "crys",
                "cried",
                "crid"
            ],
            "answer": 2,
            "hint": "The past tense of 'cry' is 'cried'."
        },
        {
            "question": "We ( help ) our mother. \u2192 ( ? )",
            "options": [
                "helpd",
                "helped",
                "helps",
                "helping"
            ],
            "answer": 1,
            "hint": "The past tense of 'help' is 'helped'."
        },
        {
            "question": "watch \u2192 ( ? )",
            "options": [
                "watchs",
                "watching",
                "watched",
                "watchd"
            ],
            "answer": 2,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "carry \u2192 ( ? )",
            "options": [
                "carryd",
                "carrys",
                "carrying",
                "carried"
            ],
            "answer": 3,
            "hint": "The past tense of 'carry' is 'carried'."
        },
        {
            "question": "They ( help ) each other. \u2192 ( ? )",
            "options": [
                "helping",
                "helpd",
                "helps",
                "helped"
            ],
            "answer": 3,
            "hint": "The past tense of 'help' is 'helped'."
        },
        {
            "question": "cook \u2192 ( ? )",
            "options": [
                "cooking",
                "cookd",
                "cooks",
                "cooked"
            ],
            "answer": 3,
            "hint": "The past tense of 'cook' is 'cooked'."
        },
        {
            "question": "dry \u2192 ( ? )",
            "options": [
                "dryed",
                "drying",
                "drid",
                "dried"
            ],
            "answer": 3,
            "hint": "The past tense of 'dry' is 'dried'."
        },
        {
            "question": "I ( visit ) Kyoto. \u2192 ( ? )",
            "options": [
                "visits",
                "visiting",
                "visited",
                "visitd"
            ],
            "answer": 2,
            "hint": "The past tense of 'visit' is 'visited'."
        },
        {
            "question": "walk \u2192 ( ? )",
            "options": [
                "walkd",
                "walks",
                "walking",
                "walked"
            ],
            "answer": 3,
            "hint": "The past tense of 'walk' is 'walked'."
        },
        {
            "question": "fry \u2192 ( ? )",
            "options": [
                "fried",
                "frid",
                "fryd",
                "frys"
            ],
            "answer": 0,
            "hint": "The past tense of 'fry' is 'fried'."
        },
        {
            "question": "You ( visit ) your uncle. \u2192 ( ? )",
            "options": [
                "visits",
                "visited",
                "visiting",
                "visitd"
            ],
            "answer": 1,
            "hint": "The past tense of 'visit' is 'visited'."
        },
        {
            "question": "listen \u2192 ( ? )",
            "options": [
                "listened",
                "listening",
                "listend",
                "listens"
            ],
            "answer": 0,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "worry \u2192 ( ? )",
            "options": [
                "worried",
                "worrid",
                "worryd",
                "worrys"
            ],
            "answer": 0,
            "hint": "The past tense of 'worry' is 'worried'."
        },
        {
            "question": "He ( clean ) his room. \u2192 ( ? )",
            "options": [
                "cleand",
                "cleaning",
                "cleans",
                "cleaned"
            ],
            "answer": 3,
            "hint": "The past tense of 'clean' is 'cleaned'."
        },
        {
            "question": "look \u2192 ( ? )",
            "options": [
                "lookd",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 3,
            "hint": "The past tense of 'look' is 'looked'."
        },
        {
            "question": "hurry \u2192 ( ? )",
            "options": [
                "hurried",
                "hurrying",
                "hurrid",
                "hurryd"
            ],
            "answer": 0,
            "hint": "The past tense of 'hurry' is 'hurried'."
        },
        {
            "question": "She ( clean ) the house. \u2192 ( ? )",
            "options": [
                "cleaning",
                "cleand",
                "cleans",
                "cleaned"
            ],
            "answer": 3,
            "hint": "The past tense of 'clean' is 'cleaned'."
        },
        {
            "question": "want \u2192 ( ? )",
            "options": [
                "wantd",
                "wanted",
                "wanting",
                "wants"
            ],
            "answer": 1,
            "hint": "The past tense of 'want' is 'wanted'."
        },
        {
            "question": "marry \u2192 ( ? )",
            "options": [
                "married",
                "marrying",
                "marryd",
                "marrys"
            ],
            "answer": 0,
            "hint": "The past tense of 'marry' is 'married'."
        },
        {
            "question": "We ( wash ) the dishes. \u2192 ( ? )",
            "options": [
                "washing",
                "washd",
                "washed",
                "washs"
            ],
            "answer": 2,
            "hint": "The past tense of 'wash' is 'washed'."
        },
        {
            "question": "talk \u2192 ( ? )",
            "options": [
                "talked",
                "talking",
                "talks",
                "talkd"
            ],
            "answer": 0,
            "hint": "The past tense of 'talk' is 'talked'."
        },
        {
            "question": "study \u2192 ( ? )",
            "options": [
                "studying",
                "studys",
                "studied",
                "studid"
            ],
            "answer": 2,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "They ( wash ) the car. \u2192 ( ? )",
            "options": [
                "washing",
                "washed",
                "washs",
                "washd"
            ],
            "answer": 1,
            "hint": "The past tense of 'wash' is 'washed'."
        },
        {
            "question": "help \u2192 ( ? )",
            "options": [
                "helps",
                "helping",
                "helped",
                "helpd"
            ],
            "answer": 2,
            "hint": "The past tense of 'help' is 'helped'."
        },
        {
            "question": "stop \u2192 ( ? )",
            "options": [
                "stoping",
                "stopped",
                "stops",
                "stopd"
            ],
            "answer": 1,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "I ( open ) the door. \u2192 ( ? )",
            "options": [
                "opened",
                "opens",
                "opend",
                "opening"
            ],
            "answer": 0,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "visit \u2192 ( ? )",
            "options": [
                "visiting",
                "visited",
                "visits",
                "visitd"
            ],
            "answer": 1,
            "hint": "The past tense of 'visit' is 'visited'."
        },
        {
            "question": "drop \u2192 ( ? )",
            "options": [
                "dropd",
                "dropped",
                "droping",
                "drops"
            ],
            "answer": 1,
            "hint": "The past tense of 'drop' is 'dropped'."
        },
        {
            "question": "You ( open ) the window. \u2192 ( ? )",
            "options": [
                "opening",
                "opend",
                "opens",
                "opened"
            ],
            "answer": 3,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "clean \u2192 ( ? )",
            "options": [
                "cleand",
                "cleaned",
                "cleans",
                "cleaning"
            ],
            "answer": 1,
            "hint": "The past tense of 'clean' is 'cleaned'."
        },
        {
            "question": "plan \u2192 ( ? )",
            "options": [
                "plans",
                "planing",
                "planed",
                "planned"
            ],
            "answer": 3,
            "hint": "The past tense of 'plan' is 'planned'."
        },
        {
            "question": "He ( start ) the work. \u2192 ( ? )",
            "options": [
                "starts",
                "startd",
                "started",
                "starting"
            ],
            "answer": 2,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "wash \u2192 ( ? )",
            "options": [
                "washd",
                "washs",
                "washing",
                "washed"
            ],
            "answer": 3,
            "hint": "The past tense of 'wash' is 'washed'."
        },
        {
            "question": "shop \u2192 ( ? )",
            "options": [
                "shops",
                "shoped",
                "shopped",
                "shoping"
            ],
            "answer": 2,
            "hint": "The past tense of 'shop' is 'shopped'."
        },
        {
            "question": "She ( start ) the meeting. \u2192 ( ? )",
            "options": [
                "starts",
                "startd",
                "started",
                "starting"
            ],
            "answer": 2,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "open \u2192 ( ? )",
            "options": [
                "opens",
                "opening",
                "opend",
                "opened"
            ],
            "answer": 3,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "hop \u2192 ( ? )",
            "options": [
                "hoping",
                "hopped",
                "hopd",
                "hoped"
            ],
            "answer": 1,
            "hint": "The past tense of 'hop' is 'hopped'."
        },
        {
            "question": "We ( finish ) homework. \u2192 ( ? )",
            "options": [
                "finished",
                "finishs",
                "finishing",
                "finishd"
            ],
            "answer": 0,
            "hint": "The past tense of 'finish' is 'finished'."
        },
        {
            "question": "start \u2192 ( ? )",
            "options": [
                "starting",
                "starts",
                "started",
                "startd"
            ],
            "answer": 2,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "jog \u2192 ( ? )",
            "options": [
                "jogged",
                "joging",
                "joged",
                "jogd"
            ],
            "answer": 0,
            "hint": "The past tense of 'jog' is 'jogged'."
        },
        {
            "question": "They ( finish ) lunch. \u2192 ( ? )",
            "options": [
                "finishs",
                "finishd",
                "finished",
                "finishing"
            ],
            "answer": 2,
            "hint": "The past tense of 'finish' is 'finished'."
        },
        {
            "question": "finish \u2192 ( ? )",
            "options": [
                "finishing",
                "finishd",
                "finished",
                "finishs"
            ],
            "answer": 2,
            "hint": "The past tense of 'finish' is 'finished'."
        },
        {
            "question": "step \u2192 ( ? )",
            "options": [
                "steps",
                "steping",
                "stepped",
                "stepd"
            ],
            "answer": 2,
            "hint": "The past tense of 'step' is 'stepped'."
        },
        {
            "question": "I ( enjoy ) the party. \u2192 ( ? )",
            "options": [
                "enjoid",
                "enjoyed",
                "enjoys",
                "enjoying"
            ],
            "answer": 1,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "enjoy \u2192 ( ? )",
            "options": [
                "enjoid",
                "enjoys",
                "enjoying",
                "enjoyed"
            ],
            "answer": 3,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "clap \u2192 ( ? )",
            "options": [
                "clapped",
                "claps",
                "claping",
                "claped"
            ],
            "answer": 0,
            "hint": "The past tense of 'clap' is 'clapped'."
        },
        {
            "question": "You ( enjoy ) the trip. \u2192 ( ? )",
            "options": [
                "enjoyed",
                "enjoys",
                "enjoid",
                "enjoying"
            ],
            "answer": 0,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "stay \u2192 ( ? )",
            "options": [
                "stayed",
                "staying",
                "stays",
                "stayd"
            ],
            "answer": 0,
            "hint": "The past tense of 'stay' is 'stayed'."
        },
        {
            "question": "stop \u2192 ( ? )",
            "options": [
                "stoping",
                "stopd",
                "stops",
                "stopped"
            ],
            "answer": 3,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "He ( stay ) at a hotel. \u2192 ( ? )",
            "options": [
                "stayd",
                "staying",
                "stays",
                "stayed"
            ],
            "answer": 3,
            "hint": "The past tense of 'stay' is 'stayed'."
        },
        {
            "question": "call \u2192 ( ? )",
            "options": [
                "calls",
                "called",
                "calld",
                "calling"
            ],
            "answer": 1,
            "hint": "The past tense of 'call' is 'called'."
        },
        {
            "question": "drop \u2192 ( ? )",
            "options": [
                "dropped",
                "droping",
                "drops",
                "dropd"
            ],
            "answer": 0,
            "hint": "The past tense of 'drop' is 'dropped'."
        },
        {
            "question": "She ( stay ) home. \u2192 ( ? )",
            "options": [
                "stayed",
                "stayd",
                "stays",
                "staying"
            ],
            "answer": 0,
            "hint": "The past tense of 'stay' is 'stayed'."
        },
        {
            "question": "wait \u2192 ( ? )",
            "options": [
                "waitd",
                "waited",
                "waiting",
                "waits"
            ],
            "answer": 1,
            "hint": "The past tense of 'wait' is 'waited'."
        },
        {
            "question": "live \u2192 ( ? )",
            "options": [
                "lives",
                "lived",
                "liveed",
                "liveing"
            ],
            "answer": 1,
            "hint": "The past tense of 'live' is 'lived'."
        },
        {
            "question": "I ( use ) a computer. \u2192 ( ? )",
            "options": [
                "uses",
                "useed",
                "useing",
                "used"
            ],
            "answer": 3,
            "hint": "The past tense of 'use' is 'used'."
        },
        {
            "question": "rain \u2192 ( ? )",
            "options": [
                "rains",
                "raind",
                "raining",
                "rained"
            ],
            "answer": 3,
            "hint": "The past tense of 'rain' is 'rained'."
        },
        {
            "question": "use \u2192 ( ? )",
            "options": [
                "useed",
                "uses",
                "useing",
                "used"
            ],
            "answer": 3,
            "hint": "The past tense of 'use' is 'used'."
        },
        {
            "question": "You ( use ) a pen. \u2192 ( ? )",
            "options": [
                "uses",
                "used",
                "useed",
                "useing"
            ],
            "answer": 1,
            "hint": "The past tense of 'use' is 'used'."
        },
        {
            "question": "show \u2192 ( ? )",
            "options": [
                "shows",
                "showing",
                "showed",
                "showd"
            ],
            "answer": 2,
            "hint": "The past tense of 'show' is 'showed'."
        },
        {
            "question": "study \u2192 ( ? )",
            "options": [
                "studid",
                "studys",
                "studied",
                "studying"
            ],
            "answer": 2,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "He ( like ) English. \u2192 ( ? )",
            "options": [
                "likeing",
                "likes",
                "likeed",
                "liked"
            ],
            "answer": 3,
            "hint": "The past tense of 'like' is 'liked'."
        },
        {
            "question": "answer \u2192 ( ? )",
            "options": [
                "answerd",
                "answering",
                "answered",
                "answers"
            ],
            "answer": 2,
            "hint": "The past tense of 'answer' is 'answered'."
        },
        {
            "question": "try \u2192 ( ? )",
            "options": [
                "tryd",
                "tryed",
                "trys",
                "tried"
            ],
            "answer": 3,
            "hint": "The past tense of 'try' is 'tried'."
        },
        {
            "question": "She ( like ) cats. \u2192 ( ? )",
            "options": [
                "likes",
                "likeing",
                "likeed",
                "liked"
            ],
            "answer": 3,
            "hint": "The past tense of 'like' is 'liked'."
        },
        {
            "question": "need \u2192 ( ? )",
            "options": [
                "needd",
                "needs",
                "needing",
                "needed"
            ],
            "answer": 3,
            "hint": "The past tense of 'need' is 'needed'."
        },
        {
            "question": "stop \u2192 ( ? )",
            "options": [
                "stoping",
                "stopd",
                "stops",
                "stopped"
            ],
            "answer": 3,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "We ( live ) in Osaka. \u2192 ( ? )",
            "options": [
                "liveing",
                "lived",
                "liveed",
                "lives"
            ],
            "answer": 1,
            "hint": "The past tense of 'live' is 'lived'."
        },
        {
            "question": "thank \u2192 ( ? )",
            "options": [
                "thanking",
                "thanks",
                "thanked",
                "thankd"
            ],
            "answer": 2,
            "hint": "The past tense of 'thank' is 'thanked'."
        },
        {
            "question": "plan \u2192 ( ? )",
            "options": [
                "planed",
                "planned",
                "planing",
                "plans"
            ],
            "answer": 1,
            "hint": "The past tense of 'plan' is 'planned'."
        },
        {
            "question": "They ( live ) near here. \u2192 ( ? )",
            "options": [
                "lived",
                "liveing",
                "liveed",
                "lives"
            ],
            "answer": 0,
            "hint": "The past tense of 'live' is 'lived'."
        },
        {
            "question": "ask \u2192 ( ? )",
            "options": [
                "asks",
                "asking",
                "asked",
                "askd"
            ],
            "answer": 2,
            "hint": "The past tense of 'ask' is 'asked'."
        },
        {
            "question": "play \u2192 ( ? )",
            "options": [
                "playd",
                "plays",
                "playing",
                "played"
            ],
            "answer": 3,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "I ( hope ) so. \u2192 ( ? )",
            "options": [
                "hoped",
                "hopeed",
                "hopes",
                "hopeing"
            ],
            "answer": 0,
            "hint": "The past tense of 'hope' is 'hoped'."
        },
        {
            "question": "work \u2192 ( ? )",
            "options": [
                "workd",
                "worked",
                "working",
                "works"
            ],
            "answer": 1,
            "hint": "The past tense of 'work' is 'worked'."
        },
        {
            "question": "stay \u2192 ( ? )",
            "options": [
                "staying",
                "stayed",
                "stays",
                "stayd"
            ],
            "answer": 1,
            "hint": "The past tense of 'stay' is 'stayed'."
        },
        {
            "question": "You ( hope ) for peace. \u2192 ( ? )",
            "options": [
                "hoped",
                "hopeed",
                "hopes",
                "hopeing"
            ],
            "answer": 0,
            "hint": "The past tense of 'hope' is 'hoped'."
        },
        {
            "question": "learn \u2192 ( ? )",
            "options": [
                "learned",
                "learning",
                "learns",
                "learnd"
            ],
            "answer": 0,
            "hint": "The past tense of 'learn' is 'learned'."
        },
        {
            "question": "enjoy \u2192 ( ? )",
            "options": [
                "enjoying",
                "enjoys",
                "enjoyed",
                "enjoid"
            ],
            "answer": 2,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "He ( love ) music. \u2192 ( ? )",
            "options": [
                "loved",
                "loveed",
                "loveing",
                "loves"
            ],
            "answer": 0,
            "hint": "The past tense of 'love' is 'loved'."
        },
        {
            "question": "touch \u2192 ( ? )",
            "options": [
                "touchd",
                "touchs",
                "touched",
                "touching"
            ],
            "answer": 2,
            "hint": "The past tense of 'touch' is 'touched'."
        },
        {
            "question": "pray \u2192 ( ? )",
            "options": [
                "prays",
                "praying",
                "prayed",
                "prayd"
            ],
            "answer": 2,
            "hint": "The past tense of 'pray' is 'prayed'."
        },
        {
            "question": "She ( love ) flowers. \u2192 ( ? )",
            "options": [
                "loved",
                "loveed",
                "loveing",
                "loves"
            ],
            "answer": 0,
            "hint": "The past tense of 'love' is 'loved'."
        },
        {
            "question": "jump \u2192 ( ? )",
            "options": [
                "jumps",
                "jumpd",
                "jumping",
                "jumped"
            ],
            "answer": 3,
            "hint": "The past tense of 'jump' is 'jumped'."
        },
        {
            "question": "visit \u2192 ( ? )",
            "options": [
                "visited",
                "visiting",
                "visitd",
                "visits"
            ],
            "answer": 0,
            "hint": "The past tense of 'visit' is 'visited'."
        },
        {
            "question": "We ( arrive ) at the station. \u2192 ( ? )",
            "options": [
                "arrived",
                "arrives",
                "arriveed",
                "arriveing"
            ],
            "answer": 0,
            "hint": "The past tense of 'arrive' is 'arrived'."
        },
        {
            "question": "kick \u2192 ( ? )",
            "options": [
                "kicked",
                "kicking",
                "kicks",
                "kickd"
            ],
            "answer": 0,
            "hint": "The past tense of 'kick' is 'kicked'."
        },
        {
            "question": "listen \u2192 ( ? )",
            "options": [
                "listening",
                "listens",
                "listened",
                "listend"
            ],
            "answer": 2,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "They ( arrive ) at school. \u2192 ( ? )",
            "options": [
                "arrived",
                "arrives",
                "arriveing",
                "arriveed"
            ],
            "answer": 0,
            "hint": "The past tense of 'arrive' is 'arrived'."
        },
        {
            "question": "paint \u2192 ( ? )",
            "options": [
                "painting",
                "painted",
                "paintd",
                "paints"
            ],
            "answer": 1,
            "hint": "The past tense of 'paint' is 'painted'."
        },
        {
            "question": "open \u2192 ( ? )",
            "options": [
                "opening",
                "opend",
                "opens",
                "opened"
            ],
            "answer": 3,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "I ( smile ) at him. \u2192 ( ? )",
            "options": [
                "smiles",
                "smiled",
                "smileed",
                "smileing"
            ],
            "answer": 1,
            "hint": "The past tense of 'smile' is 'smiled'."
        },
        {
            "question": "brush \u2192 ( ? )",
            "options": [
                "brushing",
                "brushs",
                "brushd",
                "brushed"
            ],
            "answer": 3,
            "hint": "The past tense of 'brush' is 'brushed'."
        },
        {
            "question": "look \u2192 ( ? )",
            "options": [
                "looks",
                "looked",
                "looking",
                "lookd"
            ],
            "answer": 1,
            "hint": "The past tense of 'look' is 'looked'."
        },
        {
            "question": "You ( smile ) nicely. \u2192 ( ? )",
            "options": [
                "smiled",
                "smiles",
                "smileed",
                "smileing"
            ],
            "answer": 0,
            "hint": "The past tense of 'smile' is 'smiled'."
        },
        {
            "question": "climb \u2192 ( ? )",
            "options": [
                "climbing",
                "climbed",
                "climbd",
                "climbs"
            ],
            "answer": 1,
            "hint": "The past tense of 'climb' is 'climbed'."
        },
        {
            "question": "like \u2192 ( ? )",
            "options": [
                "liked",
                "likeed",
                "likeing",
                "likes"
            ],
            "answer": 0,
            "hint": "The past tense of 'like' is 'liked'."
        },
        {
            "question": "He ( study ) math. \u2192 ( ? )",
            "options": [
                "studid",
                "studying",
                "studys",
                "studied"
            ],
            "answer": 3,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "camp \u2192 ( ? )",
            "options": [
                "campd",
                "camped",
                "camps",
                "camping"
            ],
            "answer": 1,
            "hint": "The past tense of 'camp' is 'camped'."
        },
        {
            "question": "live \u2192 ( ? )",
            "options": [
                "liveed",
                "lived",
                "liveing",
                "lives"
            ],
            "answer": 1,
            "hint": "The past tense of 'live' is 'lived'."
        },
        {
            "question": "She ( study ) hard. \u2192 ( ? )",
            "options": [
                "studid",
                "studying",
                "studys",
                "studied"
            ],
            "answer": 3,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "play \u2192 ( ? )",
            "options": [
                "playing",
                "played",
                "plays",
                "playd"
            ],
            "answer": 1,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "study \u2192 ( ? )",
            "options": [
                "studid",
                "studys",
                "studying",
                "studied"
            ],
            "answer": 3,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "We ( study ) history. \u2192 ( ? )",
            "options": [
                "studid",
                "studys",
                "studying",
                "studied"
            ],
            "answer": 3,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "watch \u2192 ( ? )",
            "options": [
                "watched",
                "watching",
                "watchd",
                "watchs"
            ],
            "answer": 0,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "stop \u2192 ( ? )",
            "options": [
                "stops",
                "stopped",
                "stopd",
                "stoping"
            ],
            "answer": 1,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "They ( study ) Japanese. \u2192 ( ? )",
            "options": [
                "studied",
                "studid",
                "studying",
                "studys"
            ],
            "answer": 0,
            "hint": "The past tense of 'study' is 'studied'."
        },
        {
            "question": "cook \u2192 ( ? )",
            "options": [
                "cooking",
                "cooks",
                "cooked",
                "cookd"
            ],
            "answer": 2,
            "hint": "The past tense of 'cook' is 'cooked'."
        },
        {
            "question": "cry \u2192 ( ? )",
            "options": [
                "crid",
                "cried",
                "crying",
                "crys"
            ],
            "answer": 1,
            "hint": "The past tense of 'cry' is 'cried'."
        },
        {
            "question": "I ( try ) natto. \u2192 ( ? )",
            "options": [
                "trys",
                "tryed",
                "tried",
                "tryd"
            ],
            "answer": 2,
            "hint": "The past tense of 'try' is 'tried'."
        },
        {
            "question": "walk \u2192 ( ? )",
            "options": [
                "walked",
                "walks",
                "walking",
                "walkd"
            ],
            "answer": 0,
            "hint": "The past tense of 'walk' is 'walked'."
        },
        {
            "question": "smile \u2192 ( ? )",
            "options": [
                "smiles",
                "smiled",
                "smileing",
                "smileed"
            ],
            "answer": 1,
            "hint": "The past tense of 'smile' is 'smiled'."
        },
        {
            "question": "You ( try ) hard. \u2192 ( ? )",
            "options": [
                "tried",
                "tryed",
                "tryd",
                "trys"
            ],
            "answer": 0,
            "hint": "The past tense of 'try' is 'tried'."
        },
        {
            "question": "listen \u2192 ( ? )",
            "options": [
                "listening",
                "listened",
                "listens",
                "listend"
            ],
            "answer": 1,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "watch \u2192 ( ? )",
            "options": [
                "watching",
                "watchs",
                "watchd",
                "watched"
            ],
            "answer": 3,
            "hint": "The past tense of 'watch' is 'watched'."
        },
        {
            "question": "He ( cry ) yesterday. \u2192 ( ? )",
            "options": [
                "crid",
                "crys",
                "crying",
                "cried"
            ],
            "answer": 3,
            "hint": "The past tense of 'cry' is 'cried'."
        },
        {
            "question": "look \u2192 ( ? )",
            "options": [
                "looked",
                "lookd",
                "looks",
                "looking"
            ],
            "answer": 0,
            "hint": "The past tense of 'look' is 'looked'."
        },
        {
            "question": "wash \u2192 ( ? )",
            "options": [
                "washed",
                "washing",
                "washs",
                "washd"
            ],
            "answer": 0,
            "hint": "The past tense of 'wash' is 'washed'."
        },
        {
            "question": "She ( cry ) a lot. \u2192 ( ? )",
            "options": [
                "crid",
                "crys",
                "cried",
                "crying"
            ],
            "answer": 2,
            "hint": "The past tense of 'cry' is 'cried'."
        },
        {
            "question": "want \u2192 ( ? )",
            "options": [
                "wants",
                "wantd",
                "wanted",
                "wanting"
            ],
            "answer": 2,
            "hint": "The past tense of 'want' is 'wanted'."
        },
        {
            "question": "use \u2192 ( ? )",
            "options": [
                "uses",
                "useing",
                "used",
                "useed"
            ],
            "answer": 2,
            "hint": "The past tense of 'use' is 'used'."
        },
        {
            "question": "We ( carry ) the box. \u2192 ( ? )",
            "options": [
                "carrys",
                "carrying",
                "carried",
                "carryd"
            ],
            "answer": 2,
            "hint": "The past tense of 'carry' is 'carried'."
        },
        {
            "question": "talk \u2192 ( ? )",
            "options": [
                "talks",
                "talkd",
                "talking",
                "talked"
            ],
            "answer": 3,
            "hint": "The past tense of 'talk' is 'talked'."
        },
        {
            "question": "try \u2192 ( ? )",
            "options": [
                "trys",
                "tryd",
                "tryed",
                "tried"
            ],
            "answer": 3,
            "hint": "The past tense of 'try' is 'tried'."
        },
        {
            "question": "They ( carry ) the bags. \u2192 ( ? )",
            "options": [
                "carryd",
                "carrying",
                "carrys",
                "carried"
            ],
            "answer": 3,
            "hint": "The past tense of 'carry' is 'carried'."
        },
        {
            "question": "help \u2192 ( ? )",
            "options": [
                "helps",
                "helpd",
                "helped",
                "helping"
            ],
            "answer": 2,
            "hint": "The past tense of 'help' is 'helped'."
        },
        {
            "question": "plan \u2192 ( ? )",
            "options": [
                "planing",
                "planned",
                "plans",
                "planed"
            ],
            "answer": 1,
            "hint": "The past tense of 'plan' is 'planned'."
        },
        {
            "question": "I ( stop ) the car. \u2192 ( ? )",
            "options": [
                "stopped",
                "stoping",
                "stops",
                "stopd"
            ],
            "answer": 0,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "visit \u2192 ( ? )",
            "options": [
                "visited",
                "visits",
                "visitd",
                "visiting"
            ],
            "answer": 0,
            "hint": "The past tense of 'visit' is 'visited'."
        },
        {
            "question": "cook \u2192 ( ? )",
            "options": [
                "cookd",
                "cooking",
                "cooked",
                "cooks"
            ],
            "answer": 2,
            "hint": "The past tense of 'cook' is 'cooked'."
        },
        {
            "question": "You ( stop ) talking. \u2192 ( ? )",
            "options": [
                "stopped",
                "stopd",
                "stops",
                "stoping"
            ],
            "answer": 0,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "clean \u2192 ( ? )",
            "options": [
                "cleand",
                "cleaning",
                "cleans",
                "cleaned"
            ],
            "answer": 3,
            "hint": "The past tense of 'clean' is 'cleaned'."
        },
        {
            "question": "close \u2192 ( ? )",
            "options": [
                "closeing",
                "closes",
                "closeed",
                "closed"
            ],
            "answer": 3,
            "hint": "The past tense of 'close' is 'closed'."
        },
        {
            "question": "He ( drop ) the ball. \u2192 ( ? )",
            "options": [
                "drops",
                "dropd",
                "droping",
                "dropped"
            ],
            "answer": 3,
            "hint": "The past tense of 'drop' is 'dropped'."
        },
        {
            "question": "wash \u2192 ( ? )",
            "options": [
                "washing",
                "washed",
                "washd",
                "washs"
            ],
            "answer": 1,
            "hint": "The past tense of 'wash' is 'washed'."
        },
        {
            "question": "carry \u2192 ( ? )",
            "options": [
                "carrys",
                "carryd",
                "carried",
                "carrying"
            ],
            "answer": 2,
            "hint": "The past tense of 'carry' is 'carried'."
        },
        {
            "question": "She ( drop ) the cup. \u2192 ( ? )",
            "options": [
                "dropd",
                "dropped",
                "droping",
                "drops"
            ],
            "answer": 1,
            "hint": "The past tense of 'drop' is 'dropped'."
        },
        {
            "question": "open \u2192 ( ? )",
            "options": [
                "opens",
                "opend",
                "opening",
                "opened"
            ],
            "answer": 3,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "drop \u2192 ( ? )",
            "options": [
                "dropped",
                "dropd",
                "drops",
                "droping"
            ],
            "answer": 0,
            "hint": "The past tense of 'drop' is 'dropped'."
        },
        {
            "question": "We ( plan ) a trip. \u2192 ( ? )",
            "options": [
                "plans",
                "planned",
                "planed",
                "planing"
            ],
            "answer": 1,
            "hint": "The past tense of 'plan' is 'planned'."
        },
        {
            "question": "start \u2192 ( ? )",
            "options": [
                "startd",
                "starting",
                "started",
                "starts"
            ],
            "answer": 2,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "help \u2192 ( ? )",
            "options": [
                "helps",
                "helpd",
                "helped",
                "helping"
            ],
            "answer": 2,
            "hint": "The past tense of 'help' is 'helped'."
        },
        {
            "question": "They ( plan ) a party. \u2192 ( ? )",
            "options": [
                "planing",
                "planed",
                "plans",
                "planned"
            ],
            "answer": 3,
            "hint": "The past tense of 'plan' is 'planned'."
        },
        {
            "question": "finish \u2192 ( ? )",
            "options": [
                "finishing",
                "finished",
                "finishs",
                "finishd"
            ],
            "answer": 1,
            "hint": "The past tense of 'finish' is 'finished'."
        },
        {
            "question": "hope \u2192 ( ? )",
            "options": [
                "hopes",
                "hopeed",
                "hoped",
                "hopeing"
            ],
            "answer": 2,
            "hint": "The past tense of 'hope' is 'hoped'."
        },
        {
            "question": "It ( rain ) hard. \u2192 ( ? )",
            "options": [
                "raind",
                "rains",
                "raining",
                "rained"
            ],
            "answer": 3,
            "hint": "The past tense of 'rain' is 'rained'."
        },
        {
            "question": "enjoy \u2192 ( ? )",
            "options": [
                "enjoid",
                "enjoying",
                "enjoyed",
                "enjoys"
            ],
            "answer": 2,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "worry \u2192 ( ? )",
            "options": [
                "worried",
                "worrys",
                "worryd",
                "worrid"
            ],
            "answer": 0,
            "hint": "The past tense of 'worry' is 'worried'."
        },
        {
            "question": "It ( snow ) last night. \u2192 ( ? )",
            "options": [
                "snows",
                "snowd",
                "snowed",
                "snowing"
            ],
            "answer": 2,
            "hint": "The past tense of 'snow' is 'snowed'."
        },
        {
            "question": "stay \u2192 ( ? )",
            "options": [
                "stays",
                "staying",
                "stayd",
                "stayed"
            ],
            "answer": 3,
            "hint": "The past tense of 'stay' is 'stayed'."
        },
        {
            "question": "walk \u2192 ( ? )",
            "options": [
                "walking",
                "walkd",
                "walks",
                "walked"
            ],
            "answer": 3,
            "hint": "The past tense of 'walk' is 'walked'."
        },
        {
            "question": "It ( stop ) raining. \u2192 ( ? )",
            "options": [
                "stopd",
                "stops",
                "stopped",
                "stoping"
            ],
            "answer": 2,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "call \u2192 ( ? )",
            "options": [
                "calld",
                "called",
                "calling",
                "calls"
            ],
            "answer": 1,
            "hint": "The past tense of 'call' is 'called'."
        },
        {
            "question": "wait \u2192 ( ? )",
            "options": [
                "waited",
                "waitd",
                "waiting",
                "waits"
            ],
            "answer": 0,
            "hint": "The past tense of 'wait' is 'waited'."
        },
        {
            "question": "I ( call ) Ken. \u2192 ( ? )",
            "options": [
                "calls",
                "calling",
                "calld",
                "called"
            ],
            "answer": 3,
            "hint": "The past tense of 'call' is 'called'."
        },
        {
            "question": "wait \u2192 ( ? )",
            "options": [
                "waited",
                "waits",
                "waiting",
                "waitd"
            ],
            "answer": 0,
            "hint": "The past tense of 'wait' is 'waited'."
        },
        {
            "question": "arrive \u2192 ( ? )",
            "options": [
                "arrives",
                "arrived",
                "arriveed",
                "arriveing"
            ],
            "answer": 1,
            "hint": "The past tense of 'arrive' is 'arrived'."
        },
        {
            "question": "You ( call ) me. \u2192 ( ? )",
            "options": [
                "calls",
                "calld",
                "called",
                "calling"
            ],
            "answer": 2,
            "hint": "The past tense of 'call' is 'called'."
        },
        {
            "question": "rain \u2192 ( ? )",
            "options": [
                "rained",
                "raind",
                "raining",
                "rains"
            ],
            "answer": 0,
            "hint": "The past tense of 'rain' is 'rained'."
        },
        {
            "question": "answer \u2192 ( ? )",
            "options": [
                "answered",
                "answering",
                "answerd",
                "answers"
            ],
            "answer": 0,
            "hint": "The past tense of 'answer' is 'answered'."
        },
        {
            "question": "He ( wait ) for the bus. \u2192 ( ? )",
            "options": [
                "waited",
                "waitd",
                "waits",
                "waiting"
            ],
            "answer": 0,
            "hint": "The past tense of 'wait' is 'waited'."
        },
        {
            "question": "touch \u2192 ( ? )",
            "options": [
                "touching",
                "touched",
                "touchs",
                "touchd"
            ],
            "answer": 1,
            "hint": "The past tense of 'touch' is 'touched'."
        },
        {
            "question": "clean \u2192 ( ? )",
            "options": [
                "cleans",
                "cleaned",
                "cleaning",
                "cleand"
            ],
            "answer": 1,
            "hint": "The past tense of 'clean' is 'cleaned'."
        },
        {
            "question": "She ( wait ) for me. \u2192 ( ? )",
            "options": [
                "waitd",
                "waited",
                "waits",
                "waiting"
            ],
            "answer": 1,
            "hint": "The past tense of 'wait' is 'waited'."
        },
        {
            "question": "need \u2192 ( ? )",
            "options": [
                "needd",
                "needed",
                "needing",
                "needs"
            ],
            "answer": 1,
            "hint": "The past tense of 'need' is 'needed'."
        },
        {
            "question": "change \u2192 ( ? )",
            "options": [
                "changes",
                "changeed",
                "changed",
                "changeing"
            ],
            "answer": 2,
            "hint": "The past tense of 'change' is 'changed'."
        },
        {
            "question": "We ( practice ) soccer. \u2192 ( ? )",
            "options": [
                "practiced",
                "practices",
                "practiceing",
                "practiceed"
            ],
            "answer": 0,
            "hint": "The past tense of 'practice' is 'practiced'."
        },
        {
            "question": "work \u2192 ( ? )",
            "options": [
                "worked",
                "working",
                "workd",
                "works"
            ],
            "answer": 0,
            "hint": "The past tense of 'work' is 'worked'."
        },
        {
            "question": "start \u2192 ( ? )",
            "options": [
                "starting",
                "starts",
                "started",
                "startd"
            ],
            "answer": 2,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "They ( practice ) dancing. \u2192 ( ? )",
            "options": [
                "practiced",
                "practices",
                "practiceing",
                "practiceed"
            ],
            "answer": 0,
            "hint": "The past tense of 'practice' is 'practiced'."
        },
        {
            "question": "ask \u2192 ( ? )",
            "options": [
                "asking",
                "asked",
                "asks",
                "askd"
            ],
            "answer": 1,
            "hint": "The past tense of 'ask' is 'asked'."
        },
        {
            "question": "save \u2192 ( ? )",
            "options": [
                "saveing",
                "saved",
                "saveed",
                "saves"
            ],
            "answer": 1,
            "hint": "The past tense of 'save' is 'saved'."
        },
        {
            "question": "I ( remember ) the story. \u2192 ( ? )",
            "options": [
                "remembered",
                "remembers",
                "rememberd",
                "remembering"
            ],
            "answer": 0,
            "hint": "The past tense of 'remember' is 'remembered'."
        },
        {
            "question": "happen \u2192 ( ? )",
            "options": [
                "happend",
                "happens",
                "happening",
                "happened"
            ],
            "answer": 3,
            "hint": "The past tense of 'happen' is 'happened'."
        },
        {
            "question": "finish \u2192 ( ? )",
            "options": [
                "finished",
                "finishd",
                "finishing",
                "finishs"
            ],
            "answer": 0,
            "hint": "The past tense of 'finish' is 'finished'."
        },
        {
            "question": "You ( remember ) the song. \u2192 ( ? )",
            "options": [
                "remembered",
                "rememberd",
                "remembering",
                "remembers"
            ],
            "answer": 0,
            "hint": "The past tense of 'remember' is 'remembered'."
        },
        {
            "question": "remember \u2192 ( ? )",
            "options": [
                "remembered",
                "rememberd",
                "remembering",
                "remembers"
            ],
            "answer": 0,
            "hint": "The past tense of 'remember' is 'remembered'."
        },
        {
            "question": "fry \u2192 ( ? )",
            "options": [
                "fried",
                "frid",
                "fryd",
                "frys"
            ],
            "answer": 0,
            "hint": "The past tense of 'fry' is 'fried'."
        },
        {
            "question": "He ( invite ) me. \u2192 ( ? )",
            "options": [
                "invites",
                "invited",
                "inviteing",
                "inviteed"
            ],
            "answer": 1,
            "hint": "The past tense of 'invite' is 'invited'."
        },
        {
            "question": "turn \u2192 ( ? )",
            "options": [
                "turns",
                "turned",
                "turning",
                "turnd"
            ],
            "answer": 1,
            "hint": "The past tense of 'turn' is 'turned'."
        },
        {
            "question": "practice \u2192 ( ? )",
            "options": [
                "practices",
                "practiceing",
                "practiced",
                "practiceed"
            ],
            "answer": 2,
            "hint": "The past tense of 'practice' is 'practiced'."
        },
        {
            "question": "She ( invite ) us. \u2192 ( ? )",
            "options": [
                "inviteed",
                "invites",
                "invited",
                "inviteing"
            ],
            "answer": 2,
            "hint": "The past tense of 'invite' is 'invited'."
        },
        {
            "question": "sound \u2192 ( ? )",
            "options": [
                "sounds",
                "sounded",
                "soundd",
                "sounding"
            ],
            "answer": 1,
            "hint": "The past tense of 'sound' is 'sounded'."
        },
        {
            "question": "paint \u2192 ( ? )",
            "options": [
                "paintd",
                "painted",
                "painting",
                "paints"
            ],
            "answer": 1,
            "hint": "The past tense of 'paint' is 'painted'."
        },
        {
            "question": "We ( touch ) the dog. \u2192 ( ? )",
            "options": [
                "touchs",
                "touchd",
                "touched",
                "touching"
            ],
            "answer": 2,
            "hint": "The past tense of 'touch' is 'touched'."
        },
        {
            "question": "miss \u2192 ( ? )",
            "options": [
                "missd",
                "missing",
                "misss",
                "missed"
            ],
            "answer": 3,
            "hint": "The past tense of 'miss' is 'missed'."
        },
        {
            "question": "dance \u2192 ( ? )",
            "options": [
                "danceing",
                "dances",
                "danceed",
                "danced"
            ],
            "answer": 3,
            "hint": "The past tense of 'dance' is 'danced'."
        },
        {
            "question": "They ( touch ) the screen. \u2192 ( ? )",
            "options": [
                "touchd",
                "touching",
                "touchs",
                "touched"
            ],
            "answer": 3,
            "hint": "The past tense of 'touch' is 'touched'."
        },
        {
            "question": "pass \u2192 ( ? )",
            "options": [
                "passs",
                "passing",
                "passed",
                "passd"
            ],
            "answer": 2,
            "hint": "The past tense of 'pass' is 'passed'."
        },
        {
            "question": "decide \u2192 ( ? )",
            "options": [
                "decideing",
                "decideed",
                "decided",
                "decides"
            ],
            "answer": 2,
            "hint": "The past tense of 'decide' is 'decided'."
        },
        {
            "question": "I ( need ) help. \u2192 ( ? )",
            "options": [
                "needd",
                "needing",
                "needs",
                "needed"
            ],
            "answer": 3,
            "hint": "The past tense of 'need' is 'needed'."
        },
        {
            "question": "mix \u2192 ( ? )",
            "options": [
                "mixs",
                "mixing",
                "mixd",
                "mixed"
            ],
            "answer": 3,
            "hint": "The past tense of 'mix' is 'mixed'."
        },
        {
            "question": "hurry \u2192 ( ? )",
            "options": [
                "hurryd",
                "hurried",
                "hurrid",
                "hurrying"
            ],
            "answer": 1,
            "hint": "The past tense of 'hurry' is 'hurried'."
        },
        {
            "question": "You ( need ) time. \u2192 ( ? )",
            "options": [
                "needs",
                "needing",
                "needed",
                "needd"
            ],
            "answer": 2,
            "hint": "The past tense of 'need' is 'needed'."
        },
        {
            "question": "fix \u2192 ( ? )",
            "options": [
                "fixs",
                "fixd",
                "fixed",
                "fixing"
            ],
            "answer": 2,
            "hint": "The past tense of 'fix' is 'fixed'."
        },
        {
            "question": "happen \u2192 ( ? )",
            "options": [
                "happens",
                "happend",
                "happened",
                "happening"
            ],
            "answer": 2,
            "hint": "The past tense of 'happen' is 'happened'."
        },
        {
            "question": "He ( ask ) a question. \u2192 ( ? )",
            "options": [
                "asking",
                "askd",
                "asked",
                "asks"
            ],
            "answer": 2,
            "hint": "The past tense of 'ask' is 'asked'."
        },
        {
            "question": "snow \u2192 ( ? )",
            "options": [
                "snowing",
                "snowed",
                "snowd",
                "snows"
            ],
            "answer": 1,
            "hint": "The past tense of 'snow' is 'snowed'."
        },
        {
            "question": "remember \u2192 ( ? )",
            "options": [
                "remembering",
                "remembered",
                "rememberd",
                "remembers"
            ],
            "answer": 1,
            "hint": "The past tense of 'remember' is 'remembered'."
        },
        {
            "question": "She ( ask ) for help. \u2192 ( ? )",
            "options": [
                "askd",
                "asks",
                "asking",
                "asked"
            ],
            "answer": 3,
            "hint": "The past tense of 'ask' is 'asked'."
        },
        {
            "question": "pull \u2192 ( ? )",
            "options": [
                "pulled",
                "pulld",
                "pulling",
                "pulls"
            ],
            "answer": 0,
            "hint": "The past tense of 'pull' is 'pulled'."
        },
        {
            "question": "return \u2192 ( ? )",
            "options": [
                "returnd",
                "returns",
                "returning",
                "returned"
            ],
            "answer": 3,
            "hint": "The past tense of 'return' is 'returned'."
        },
        {
            "question": "We ( work ) hard. \u2192 ( ? )",
            "options": [
                "workd",
                "worked",
                "works",
                "working"
            ],
            "answer": 1,
            "hint": "The past tense of 'work' is 'worked'."
        },
        {
            "question": "push \u2192 ( ? )",
            "options": [
                "pushing",
                "pushs",
                "pushd",
                "pushed"
            ],
            "answer": 3,
            "hint": "The past tense of 'push' is 'pushed'."
        },
        {
            "question": "move \u2192 ( ? )",
            "options": [
                "moved",
                "moves",
                "moveed",
                "moveing"
            ],
            "answer": 0,
            "hint": "The past tense of 'move' is 'moved'."
        },
        {
            "question": "They ( work ) together. \u2192 ( ? )",
            "options": [
                "worked",
                "workd",
                "works",
                "working"
            ],
            "answer": 0,
            "hint": "The past tense of 'work' is 'worked'."
        },
        {
            "question": "check \u2192 ( ? )",
            "options": [
                "checking",
                "checkd",
                "checks",
                "checked"
            ],
            "answer": 3,
            "hint": "The past tense of 'check' is 'checked'."
        },
        {
            "question": "miss \u2192 ( ? )",
            "options": [
                "misss",
                "missd",
                "missing",
                "missed"
            ],
            "answer": 3,
            "hint": "The past tense of 'miss' is 'missed'."
        },
        {
            "question": "I ( thank ) him. \u2192 ( ? )",
            "options": [
                "thanks",
                "thanked",
                "thankd",
                "thanking"
            ],
            "answer": 1,
            "hint": "The past tense of 'thank' is 'thanked'."
        },
        {
            "question": "pick \u2192 ( ? )",
            "options": [
                "picking",
                "picks",
                "picked",
                "pickd"
            ],
            "answer": 2,
            "hint": "The past tense of 'pick' is 'picked'."
        },
        {
            "question": "mix \u2192 ( ? )",
            "options": [
                "mixd",
                "mixed",
                "mixs",
                "mixing"
            ],
            "answer": 1,
            "hint": "The past tense of 'mix' is 'mixed'."
        },
        {
            "question": "You ( thank ) her. \u2192 ( ? )",
            "options": [
                "thanks",
                "thanked",
                "thankd",
                "thanking"
            ],
            "answer": 1,
            "hint": "The past tense of 'thank' is 'thanked'."
        },
        {
            "question": "plant \u2192 ( ? )",
            "options": [
                "plants",
                "planting",
                "planted",
                "plantd"
            ],
            "answer": 2,
            "hint": "The past tense of 'plant' is 'planted'."
        },
        {
            "question": "touch \u2192 ( ? )",
            "options": [
                "touching",
                "touchs",
                "touchd",
                "touched"
            ],
            "answer": 3,
            "hint": "The past tense of 'touch' is 'touched'."
        },
        {
            "question": "He ( learn ) English. \u2192 ( ? )",
            "options": [
                "learns",
                "learning",
                "learnd",
                "learned"
            ],
            "answer": 3,
            "hint": "The past tense of 'learn' is 'learned'."
        },
        {
            "question": "return \u2192 ( ? )",
            "options": [
                "returns",
                "returned",
                "returnd",
                "returning"
            ],
            "answer": 1,
            "hint": "The past tense of 'return' is 'returned'."
        },
        {
            "question": "turn \u2192 ( ? )",
            "options": [
                "turning",
                "turns",
                "turned",
                "turnd"
            ],
            "answer": 2,
            "hint": "The past tense of 'turn' is 'turned'."
        },
        {
            "question": "She ( learn ) about it. \u2192 ( ? )",
            "options": [
                "learnd",
                "learns",
                "learned",
                "learning"
            ],
            "answer": 2,
            "hint": "The past tense of 'learn' is 'learned'."
        },
        {
            "question": "join \u2192 ( ? )",
            "options": [
                "joind",
                "joining",
                "joined",
                "joins"
            ],
            "answer": 2,
            "hint": "The past tense of 'join' is 'joined'."
        },
        {
            "question": "talk \u2192 ( ? )",
            "options": [
                "talked",
                "talking",
                "talks",
                "talkd"
            ],
            "answer": 0,
            "hint": "The past tense of 'talk' is 'talked'."
        },
        {
            "question": "The bus ( stop ) here. \u2192 ( ? )",
            "options": [
                "stopped",
                "stops",
                "stoping",
                "stopd"
            ],
            "answer": 0,
            "hint": "The past tense of 'stop' is 'stopped'."
        },
        {
            "question": "discover \u2192 ( ? )",
            "options": [
                "discovered",
                "discovers",
                "discoverd",
                "discovering"
            ],
            "answer": 0,
            "hint": "The past tense of 'discover' is 'discovered'."
        },
        {
            "question": "thank \u2192 ( ? )",
            "options": [
                "thanked",
                "thanks",
                "thanking",
                "thankd"
            ],
            "answer": 0,
            "hint": "The past tense of 'thank' is 'thanked'."
        },
        {
            "question": "The movie ( start ) at 5. \u2192 ( ? )",
            "options": [
                "startd",
                "starting",
                "starts",
                "started"
            ],
            "answer": 3,
            "hint": "The past tense of 'start' is 'started'."
        },
        {
            "question": "pray \u2192 ( ? )",
            "options": [
                "praying",
                "prayed",
                "prayd",
                "prays"
            ],
            "answer": 1,
            "hint": "The past tense of 'pray' is 'prayed'."
        },
        {
            "question": "love \u2192 ( ? )",
            "options": [
                "loveing",
                "loved",
                "loves",
                "loveed"
            ],
            "answer": 1,
            "hint": "The past tense of 'love' is 'loved'."
        },
        {
            "question": "The store ( open ) at 10. \u2192 ( ? )",
            "options": [
                "opens",
                "opend",
                "opening",
                "opened"
            ],
            "answer": 3,
            "hint": "The past tense of 'open' is 'opened'."
        },
        {
            "question": "play \u2192 ( ? )",
            "options": [
                "playd",
                "plays",
                "played",
                "playing"
            ],
            "answer": 2,
            "hint": "The past tense of 'play' is 'played'."
        },
        {
            "question": "learn \u2192 ( ? )",
            "options": [
                "learnd",
                "learns",
                "learning",
                "learned"
            ],
            "answer": 3,
            "hint": "The past tense of 'learn' is 'learned'."
        },
        {
            "question": "The store ( close ) at 8. \u2192 ( ? )",
            "options": [
                "closeed",
                "closeing",
                "closed",
                "closes"
            ],
            "answer": 2,
            "hint": "The past tense of 'close' is 'closed'."
        },
        {
            "question": "enjoy \u2192 ( ? )",
            "options": [
                "enjoys",
                "enjoyed",
                "enjoying",
                "enjoid"
            ],
            "answer": 1,
            "hint": "The past tense of 'enjoy' is 'enjoyed'."
        },
        {
            "question": "listen \u2192 ( ? )",
            "options": [
                "listens",
                "listened",
                "listening",
                "listend"
            ],
            "answer": 1,
            "hint": "The past tense of 'listen' is 'listened'."
        },
        {
            "question": "The rain ( stop ). \u2192 ( ? )",
            "options": [
                "stopped",
                "stopd",
                "stops",
                "stoping"
            ],
            "answer": 0,
            "hint": "The past tense of 'stop' is 'stopped'."
        }
    ]
};

quizData.english_irregular_past = {
    title: "不規則動詞 (暗記必須)",
    questions: [
        {
            "question": "go \u2192 ( ? )",
            "options": [
                "go",
                "went",
                "gos",
                "goed"
            ],
            "answer": 1,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "went \u2192 ( ? )",
            "options": [
                "go",
                "wents",
                "wenting",
                "went"
            ],
            "answer": 0,
            "hint": "The original form of 'went' is 'go'."
        },
        {
            "question": "I ( go ) to the park. \u2192 ( ? )",
            "options": [
                "goed",
                "gos",
                "go",
                "went"
            ],
            "answer": 3,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "come \u2192 ( ? )",
            "options": [
                "comed",
                "come",
                "came",
                "comes"
            ],
            "answer": 2,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "came \u2192 ( ? )",
            "options": [
                "cameing",
                "come",
                "came",
                "cames"
            ],
            "answer": 1,
            "hint": "The original form of 'came' is 'come'."
        },
        {
            "question": "You ( go ) to school. \u2192 ( ? )",
            "options": [
                "go",
                "goed",
                "went",
                "gos"
            ],
            "answer": 2,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "see \u2192 ( ? )",
            "options": [
                "see",
                "sees",
                "seing",
                "saw"
            ],
            "answer": 3,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "saw \u2192 ( ? )",
            "options": [
                "see",
                "sawing",
                "saws",
                "saw"
            ],
            "answer": 0,
            "hint": "The original form of 'saw' is 'see'."
        },
        {
            "question": "He ( go ) to Tokyo. \u2192 ( ? )",
            "options": [
                "goed",
                "went",
                "go",
                "gos"
            ],
            "answer": 1,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "have \u2192 ( ? )",
            "options": [
                "have",
                "haves",
                "having",
                "had"
            ],
            "answer": 3,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "had \u2192 ( ? )",
            "options": [
                "have",
                "hads",
                "had",
                "hading"
            ],
            "answer": 0,
            "hint": "The original form of 'had' is 'have'."
        },
        {
            "question": "She ( go ) library. \u2192 ( ? )",
            "options": [
                "went",
                "gos",
                "go",
                "goed"
            ],
            "answer": 0,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "eat \u2192 ( ? )",
            "options": [
                "ate",
                "eating",
                "eated",
                "eat"
            ],
            "answer": 0,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "ate \u2192 ( ? )",
            "options": [
                "ate",
                "ates",
                "eat",
                "ateing"
            ],
            "answer": 2,
            "hint": "The original form of 'ate' is 'eat'."
        },
        {
            "question": "We ( go ) shopping. \u2192 ( ? )",
            "options": [
                "go",
                "goed",
                "went",
                "gos"
            ],
            "answer": 2,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "get \u2192 ( ? )",
            "options": [
                "gets",
                "geting",
                "geted",
                "got"
            ],
            "answer": 3,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "got \u2192 ( ? )",
            "options": [
                "got",
                "get",
                "goting",
                "gots"
            ],
            "answer": 1,
            "hint": "The original form of 'got' is 'get'."
        },
        {
            "question": "They ( go ) home. \u2192 ( ? )",
            "options": [
                "went",
                "gos",
                "goed",
                "go"
            ],
            "answer": 0,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "take \u2192 ( ? )",
            "options": [
                "takes",
                "taked",
                "took",
                "taking"
            ],
            "answer": 2,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "took \u2192 ( ? )",
            "options": [
                "took",
                "tooks",
                "tooking",
                "take"
            ],
            "answer": 3,
            "hint": "The original form of 'took' is 'take'."
        },
        {
            "question": "I ( come ) here. \u2192 ( ? )",
            "options": [
                "came",
                "comes",
                "comed",
                "come"
            ],
            "answer": 0,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "make \u2192 ( ? )",
            "options": [
                "making",
                "make",
                "makes",
                "made"
            ],
            "answer": 3,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "made \u2192 ( ? )",
            "options": [
                "madeing",
                "made",
                "mades",
                "make"
            ],
            "answer": 3,
            "hint": "The original form of 'made' is 'make'."
        },
        {
            "question": "You ( come ) house. \u2192 ( ? )",
            "options": [
                "comed",
                "comes",
                "come",
                "came"
            ],
            "answer": 3,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "say \u2192 ( ? )",
            "options": [
                "sayed",
                "said",
                "saying",
                "say"
            ],
            "answer": 1,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "said \u2192 ( ? )",
            "options": [
                "saiding",
                "said",
                "say",
                "saids"
            ],
            "answer": 2,
            "hint": "The original form of 'said' is 'say'."
        },
        {
            "question": "He ( come ) to party. \u2192 ( ? )",
            "options": [
                "came",
                "come",
                "comes",
                "comed"
            ],
            "answer": 0,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "do \u2192 ( ? )",
            "options": [
                "doed",
                "did",
                "do",
                "doing"
            ],
            "answer": 1,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "did \u2192 ( ? )",
            "options": [
                "did",
                "dids",
                "do",
                "diding"
            ],
            "answer": 2,
            "hint": "The original form of 'did' is 'do'."
        },
        {
            "question": "She ( come ) late. \u2192 ( ? )",
            "options": [
                "comes",
                "came",
                "come",
                "comed"
            ],
            "answer": 1,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "buy \u2192 ( ? )",
            "options": [
                "buys",
                "buyed",
                "buy",
                "bought"
            ],
            "answer": 3,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "bought \u2192 ( ? )",
            "options": [
                "buy",
                "bought",
                "boughting",
                "boughts"
            ],
            "answer": 0,
            "hint": "The original form of 'bought' is 'buy'."
        },
        {
            "question": "We ( come ) by bus. \u2192 ( ? )",
            "options": [
                "comed",
                "come",
                "came",
                "comes"
            ],
            "answer": 2,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "readed",
                "reads",
                "reading",
                "read"
            ],
            "answer": 3,
            "hint": "The past tense of 'read' is 'read'."
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "read",
                "reading",
                "reads",
                "readed"
            ],
            "answer": 0,
            "hint": "The original form of 'read' is 'read'."
        },
        {
            "question": "They ( come ) by train. \u2192 ( ? )",
            "options": [
                "came",
                "come",
                "comes",
                "comed"
            ],
            "answer": 0,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "run \u2192 ( ? )",
            "options": [
                "runing",
                "run",
                "ran",
                "runs"
            ],
            "answer": 2,
            "hint": "The past tense of 'run' is 'ran'."
        },
        {
            "question": "ran \u2192 ( ? )",
            "options": [
                "ran",
                "run",
                "rans",
                "raning"
            ],
            "answer": 1,
            "hint": "The original form of 'ran' is 'run'."
        },
        {
            "question": "I ( see ) a bird. \u2192 ( ? )",
            "options": [
                "see",
                "sees",
                "saw",
                "seing"
            ],
            "answer": 2,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "write \u2192 ( ? )",
            "options": [
                "write",
                "writing",
                "writes",
                "wrote"
            ],
            "answer": 3,
            "hint": "The past tense of 'write' is 'wrote'."
        },
        {
            "question": "wrote \u2192 ( ? )",
            "options": [
                "wrote",
                "wrotes",
                "wroteing",
                "write"
            ],
            "answer": 3,
            "hint": "The original form of 'wrote' is 'write'."
        },
        {
            "question": "You ( see ) the movie. \u2192 ( ? )",
            "options": [
                "see",
                "seing",
                "saw",
                "sees"
            ],
            "answer": 2,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "speak \u2192 ( ? )",
            "options": [
                "spoke",
                "speaks",
                "speaking",
                "speak"
            ],
            "answer": 0,
            "hint": "The past tense of 'speak' is 'spoke'."
        },
        {
            "question": "spoke \u2192 ( ? )",
            "options": [
                "spoke",
                "spokes",
                "spokeing",
                "speak"
            ],
            "answer": 3,
            "hint": "The original form of 'spoke' is 'speak'."
        },
        {
            "question": "He ( see ) his friend. \u2192 ( ? )",
            "options": [
                "see",
                "sees",
                "seing",
                "saw"
            ],
            "answer": 3,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "know \u2192 ( ? )",
            "options": [
                "knowed",
                "knew",
                "know",
                "knowing"
            ],
            "answer": 1,
            "hint": "The past tense of 'know' is 'knew'."
        },
        {
            "question": "knew \u2192 ( ? )",
            "options": [
                "knews",
                "know",
                "knewing",
                "knew"
            ],
            "answer": 1,
            "hint": "The original form of 'knew' is 'know'."
        },
        {
            "question": "She ( see ) the picture. \u2192 ( ? )",
            "options": [
                "seing",
                "saw",
                "sees",
                "see"
            ],
            "answer": 1,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "give \u2192 ( ? )",
            "options": [
                "giving",
                "gave",
                "give",
                "gived"
            ],
            "answer": 1,
            "hint": "The past tense of 'give' is 'gave'."
        },
        {
            "question": "gave \u2192 ( ? )",
            "options": [
                "give",
                "gave",
                "gaveing",
                "gaves"
            ],
            "answer": 0,
            "hint": "The original form of 'gave' is 'give'."
        },
        {
            "question": "We ( see ) Mt. Fuji. \u2192 ( ? )",
            "options": [
                "sees",
                "see",
                "seing",
                "saw"
            ],
            "answer": 3,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "swim \u2192 ( ? )",
            "options": [
                "swimed",
                "swiming",
                "swim",
                "swam"
            ],
            "answer": 3,
            "hint": "The past tense of 'swim' is 'swam'."
        },
        {
            "question": "swam \u2192 ( ? )",
            "options": [
                "swams",
                "swam",
                "swaming",
                "swim"
            ],
            "answer": 3,
            "hint": "The original form of 'swam' is 'swim'."
        },
        {
            "question": "They ( see ) a rainbow. \u2192 ( ? )",
            "options": [
                "seing",
                "saw",
                "sees",
                "see"
            ],
            "answer": 1,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "meet \u2192 ( ? )",
            "options": [
                "meeted",
                "met",
                "meets",
                "meet"
            ],
            "answer": 1,
            "hint": "The past tense of 'meet' is 'met'."
        },
        {
            "question": "met \u2192 ( ? )",
            "options": [
                "meting",
                "met",
                "meet",
                "mets"
            ],
            "answer": 2,
            "hint": "The original form of 'met' is 'meet'."
        },
        {
            "question": "I ( have ) breakfast. \u2192 ( ? )",
            "options": [
                "have",
                "having",
                "haves",
                "had"
            ],
            "answer": 3,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "sing \u2192 ( ? )",
            "options": [
                "singing",
                "sing",
                "singed",
                "sang"
            ],
            "answer": 3,
            "hint": "The past tense of 'sing' is 'sang'."
        },
        {
            "question": "sang \u2192 ( ? )",
            "options": [
                "sing",
                "sanging",
                "sang",
                "sangs"
            ],
            "answer": 0,
            "hint": "The original form of 'sang' is 'sing'."
        },
        {
            "question": "You ( have ) lunch. \u2192 ( ? )",
            "options": [
                "having",
                "haves",
                "have",
                "had"
            ],
            "answer": 3,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "stand \u2192 ( ? )",
            "options": [
                "stood",
                "standing",
                "stand",
                "stands"
            ],
            "answer": 0,
            "hint": "The past tense of 'stand' is 'stood'."
        },
        {
            "question": "stood \u2192 ( ? )",
            "options": [
                "stoods",
                "stooding",
                "stand",
                "stood"
            ],
            "answer": 2,
            "hint": "The original form of 'stood' is 'stand'."
        },
        {
            "question": "He ( have ) dinner. \u2192 ( ? )",
            "options": [
                "haves",
                "had",
                "having",
                "have"
            ],
            "answer": 1,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "sit \u2192 ( ? )",
            "options": [
                "sited",
                "sat",
                "sits",
                "siting"
            ],
            "answer": 1,
            "hint": "The past tense of 'sit' is 'sat'."
        },
        {
            "question": "sat \u2192 ( ? )",
            "options": [
                "sat",
                "sats",
                "sating",
                "sit"
            ],
            "answer": 3,
            "hint": "The original form of 'sat' is 'sit'."
        },
        {
            "question": "She ( have ) a good time. \u2192 ( ? )",
            "options": [
                "having",
                "had",
                "have",
                "haves"
            ],
            "answer": 1,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "sleep \u2192 ( ? )",
            "options": [
                "slept",
                "sleeps",
                "sleeping",
                "sleeped"
            ],
            "answer": 0,
            "hint": "The past tense of 'sleep' is 'slept'."
        },
        {
            "question": "slept \u2192 ( ? )",
            "options": [
                "slepting",
                "slept",
                "slepts",
                "sleep"
            ],
            "answer": 3,
            "hint": "The original form of 'slept' is 'sleep'."
        },
        {
            "question": "We ( have ) a test. \u2192 ( ? )",
            "options": [
                "having",
                "have",
                "had",
                "haves"
            ],
            "answer": 2,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "drink \u2192 ( ? )",
            "options": [
                "drank",
                "drink",
                "drinks",
                "drinked"
            ],
            "answer": 0,
            "hint": "The past tense of 'drink' is 'drank'."
        },
        {
            "question": "drank \u2192 ( ? )",
            "options": [
                "dranks",
                "drank",
                "dranking",
                "drink"
            ],
            "answer": 3,
            "hint": "The original form of 'drank' is 'drink'."
        },
        {
            "question": "They ( have ) a dog. \u2192 ( ? )",
            "options": [
                "haves",
                "have",
                "had",
                "having"
            ],
            "answer": 2,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "find \u2192 ( ? )",
            "options": [
                "finded",
                "found",
                "finding",
                "find"
            ],
            "answer": 1,
            "hint": "The past tense of 'find' is 'found'."
        },
        {
            "question": "found \u2192 ( ? )",
            "options": [
                "founds",
                "find",
                "found",
                "founding"
            ],
            "answer": 1,
            "hint": "The original form of 'found' is 'find'."
        },
        {
            "question": "I ( eat ) an apple. \u2192 ( ? )",
            "options": [
                "ate",
                "eated",
                "eat",
                "eating"
            ],
            "answer": 0,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "win \u2192 ( ? )",
            "options": [
                "wining",
                "won",
                "wins",
                "wined"
            ],
            "answer": 1,
            "hint": "The past tense of 'win' is 'won'."
        },
        {
            "question": "won \u2192 ( ? )",
            "options": [
                "woning",
                "win",
                "wons",
                "won"
            ],
            "answer": 1,
            "hint": "The original form of 'won' is 'win'."
        },
        {
            "question": "You ( eat ) sushi. \u2192 ( ? )",
            "options": [
                "eat",
                "eating",
                "ate",
                "eated"
            ],
            "answer": 2,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "lose \u2192 ( ? )",
            "options": [
                "lose",
                "lost",
                "losing",
                "loses"
            ],
            "answer": 1,
            "hint": "The past tense of 'lose' is 'lost'."
        },
        {
            "question": "lost \u2192 ( ? )",
            "options": [
                "lost",
                "lose",
                "losting",
                "losts"
            ],
            "answer": 1,
            "hint": "The original form of 'lost' is 'lose'."
        },
        {
            "question": "He ( eat ) pizza. \u2192 ( ? )",
            "options": [
                "eating",
                "eated",
                "ate",
                "eat"
            ],
            "answer": 2,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "catch \u2192 ( ? )",
            "options": [
                "caught",
                "catching",
                "catched",
                "catchs"
            ],
            "answer": 0,
            "hint": "The past tense of 'catch' is 'caught'."
        },
        {
            "question": "caught \u2192 ( ? )",
            "options": [
                "caughts",
                "caught",
                "caughting",
                "catch"
            ],
            "answer": 3,
            "hint": "The original form of 'caught' is 'catch'."
        },
        {
            "question": "She ( eat ) cake. \u2192 ( ? )",
            "options": [
                "eat",
                "eating",
                "ate",
                "eated"
            ],
            "answer": 2,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "teach \u2192 ( ? )",
            "options": [
                "taught",
                "teaching",
                "teachs",
                "teach"
            ],
            "answer": 0,
            "hint": "The past tense of 'teach' is 'taught'."
        },
        {
            "question": "taught \u2192 ( ? )",
            "options": [
                "teach",
                "taughts",
                "taught",
                "taughting"
            ],
            "answer": 0,
            "hint": "The original form of 'taught' is 'teach'."
        },
        {
            "question": "We ( eat ) ramen. \u2192 ( ? )",
            "options": [
                "eat",
                "ate",
                "eated",
                "eating"
            ],
            "answer": 1,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "leave \u2192 ( ? )",
            "options": [
                "leaved",
                "leaving",
                "leaves",
                "left"
            ],
            "answer": 3,
            "hint": "The past tense of 'leave' is 'left'."
        },
        {
            "question": "left \u2192 ( ? )",
            "options": [
                "lefts",
                "leave",
                "left",
                "lefting"
            ],
            "answer": 1,
            "hint": "The original form of 'left' is 'leave'."
        },
        {
            "question": "They ( eat ) curry. \u2192 ( ? )",
            "options": [
                "eated",
                "eating",
                "eat",
                "ate"
            ],
            "answer": 3,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "think \u2192 ( ? )",
            "options": [
                "thinks",
                "thought",
                "thinked",
                "think"
            ],
            "answer": 1,
            "hint": "The past tense of 'think' is 'thought'."
        },
        {
            "question": "thought \u2192 ( ? )",
            "options": [
                "thoughts",
                "thought",
                "think",
                "thoughting"
            ],
            "answer": 2,
            "hint": "The original form of 'thought' is 'think'."
        },
        {
            "question": "I ( get ) up early. \u2192 ( ? )",
            "options": [
                "geted",
                "got",
                "geting",
                "gets"
            ],
            "answer": 1,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "tell \u2192 ( ? )",
            "options": [
                "told",
                "telling",
                "tell",
                "telled"
            ],
            "answer": 0,
            "hint": "The past tense of 'tell' is 'told'."
        },
        {
            "question": "told \u2192 ( ? )",
            "options": [
                "told",
                "tolds",
                "tell",
                "tolding"
            ],
            "answer": 2,
            "hint": "The original form of 'told' is 'tell'."
        },
        {
            "question": "You ( get ) a present. \u2192 ( ? )",
            "options": [
                "got",
                "gets",
                "geting",
                "geted"
            ],
            "answer": 0,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "hear \u2192 ( ? )",
            "options": [
                "heard",
                "hear",
                "heared",
                "hears"
            ],
            "answer": 0,
            "hint": "The past tense of 'hear' is 'heard'."
        },
        {
            "question": "heard \u2192 ( ? )",
            "options": [
                "heard",
                "heards",
                "hear",
                "hearding"
            ],
            "answer": 2,
            "hint": "The original form of 'heard' is 'hear'."
        },
        {
            "question": "He ( get ) to the station. \u2192 ( ? )",
            "options": [
                "geted",
                "gets",
                "got",
                "geting"
            ],
            "answer": 2,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "feel \u2192 ( ? )",
            "options": [
                "felt",
                "feel",
                "feeling",
                "feels"
            ],
            "answer": 0,
            "hint": "The past tense of 'feel' is 'felt'."
        },
        {
            "question": "felt \u2192 ( ? )",
            "options": [
                "felting",
                "felt",
                "felts",
                "feel"
            ],
            "answer": 3,
            "hint": "The original form of 'felt' is 'feel'."
        },
        {
            "question": "She ( get ) angry. \u2192 ( ? )",
            "options": [
                "geted",
                "got",
                "geting",
                "gets"
            ],
            "answer": 1,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "keep \u2192 ( ? )",
            "options": [
                "keep",
                "kept",
                "keeped",
                "keeping"
            ],
            "answer": 1,
            "hint": "The past tense of 'keep' is 'kept'."
        },
        {
            "question": "kept \u2192 ( ? )",
            "options": [
                "kept",
                "kepts",
                "keep",
                "kepting"
            ],
            "answer": 2,
            "hint": "The original form of 'kept' is 'keep'."
        },
        {
            "question": "We ( get ) tired. \u2192 ( ? )",
            "options": [
                "gets",
                "geting",
                "geted",
                "got"
            ],
            "answer": 3,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "begin \u2192 ( ? )",
            "options": [
                "begining",
                "began",
                "begin",
                "begins"
            ],
            "answer": 1,
            "hint": "The past tense of 'begin' is 'began'."
        },
        {
            "question": "began \u2192 ( ? )",
            "options": [
                "begin",
                "beganing",
                "begans",
                "began"
            ],
            "answer": 0,
            "hint": "The original form of 'began' is 'begin'."
        },
        {
            "question": "They ( get ) new books. \u2192 ( ? )",
            "options": [
                "gets",
                "got",
                "geted",
                "geting"
            ],
            "answer": 1,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "break \u2192 ( ? )",
            "options": [
                "breaking",
                "breaked",
                "broke",
                "breaks"
            ],
            "answer": 2,
            "hint": "The past tense of 'break' is 'broke'."
        },
        {
            "question": "broke \u2192 ( ? )",
            "options": [
                "break",
                "brokes",
                "broke",
                "brokeing"
            ],
            "answer": 0,
            "hint": "The original form of 'broke' is 'break'."
        },
        {
            "question": "I ( take ) a picture. \u2192 ( ? )",
            "options": [
                "takes",
                "taked",
                "taking",
                "took"
            ],
            "answer": 3,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "bring \u2192 ( ? )",
            "options": [
                "brought",
                "bringed",
                "bringing",
                "brings"
            ],
            "answer": 0,
            "hint": "The past tense of 'bring' is 'brought'."
        },
        {
            "question": "brought \u2192 ( ? )",
            "options": [
                "broughting",
                "bring",
                "brought",
                "broughts"
            ],
            "answer": 1,
            "hint": "The original form of 'brought' is 'bring'."
        },
        {
            "question": "You ( take ) a bus. \u2192 ( ? )",
            "options": [
                "taking",
                "taked",
                "took",
                "takes"
            ],
            "answer": 2,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "build \u2192 ( ? )",
            "options": [
                "builded",
                "builds",
                "built",
                "building"
            ],
            "answer": 2,
            "hint": "The past tense of 'build' is 'built'."
        },
        {
            "question": "built \u2192 ( ? )",
            "options": [
                "builts",
                "build",
                "builting",
                "built"
            ],
            "answer": 1,
            "hint": "The original form of 'built' is 'build'."
        },
        {
            "question": "He ( take ) a bath. \u2192 ( ? )",
            "options": [
                "taking",
                "takes",
                "taked",
                "took"
            ],
            "answer": 3,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "become \u2192 ( ? )",
            "options": [
                "became",
                "becomed",
                "become",
                "becoming"
            ],
            "answer": 0,
            "hint": "The past tense of 'become' is 'became'."
        },
        {
            "question": "became \u2192 ( ? )",
            "options": [
                "become",
                "becames",
                "became",
                "becameing"
            ],
            "answer": 0,
            "hint": "The original form of 'became' is 'become'."
        },
        {
            "question": "She ( take ) a walk. \u2192 ( ? )",
            "options": [
                "took",
                "taked",
                "taking",
                "takes"
            ],
            "answer": 0,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "put \u2192 ( ? )",
            "options": [
                "puted",
                "put",
                "puting",
                "puts"
            ],
            "answer": 1,
            "hint": "The past tense of 'put' is 'put'."
        },
        {
            "question": "put \u2192 ( ? )",
            "options": [
                "put",
                "puts",
                "puted",
                "puting"
            ],
            "answer": 0,
            "hint": "The original form of 'put' is 'put'."
        },
        {
            "question": "We ( take ) him there. \u2192 ( ? )",
            "options": [
                "took",
                "taking",
                "takes",
                "taked"
            ],
            "answer": 0,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "cut \u2192 ( ? )",
            "options": [
                "cuts",
                "cuted",
                "cut",
                "cuting"
            ],
            "answer": 2,
            "hint": "The past tense of 'cut' is 'cut'."
        },
        {
            "question": "cut \u2192 ( ? )",
            "options": [
                "cut",
                "cuted",
                "cuting",
                "cuts"
            ],
            "answer": 0,
            "hint": "The original form of 'cut' is 'cut'."
        },
        {
            "question": "They ( take ) the train. \u2192 ( ? )",
            "options": [
                "taking",
                "takes",
                "took",
                "taked"
            ],
            "answer": 2,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "hit \u2192 ( ? )",
            "options": [
                "hiting",
                "hit",
                "hited",
                "hits"
            ],
            "answer": 1,
            "hint": "The past tense of 'hit' is 'hit'."
        },
        {
            "question": "hit \u2192 ( ? )",
            "options": [
                "hiting",
                "hited",
                "hit",
                "hits"
            ],
            "answer": 2,
            "hint": "The original form of 'hit' is 'hit'."
        },
        {
            "question": "I ( make ) lunch. \u2192 ( ? )",
            "options": [
                "made",
                "make",
                "makes",
                "making"
            ],
            "answer": 0,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "go \u2192 ( ? )",
            "options": [
                "gos",
                "go",
                "went",
                "goed"
            ],
            "answer": 2,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "went \u2192 ( ? )",
            "options": [
                "go",
                "wents",
                "went",
                "wenting"
            ],
            "answer": 0,
            "hint": "The original form of 'went' is 'go'."
        },
        {
            "question": "You ( make ) a card. \u2192 ( ? )",
            "options": [
                "make",
                "making",
                "makes",
                "made"
            ],
            "answer": 3,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "come \u2192 ( ? )",
            "options": [
                "came",
                "comes",
                "comed",
                "come"
            ],
            "answer": 0,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "came \u2192 ( ? )",
            "options": [
                "came",
                "come",
                "cameing",
                "cames"
            ],
            "answer": 1,
            "hint": "The original form of 'came' is 'come'."
        },
        {
            "question": "He ( make ) a robot. \u2192 ( ? )",
            "options": [
                "making",
                "made",
                "make",
                "makes"
            ],
            "answer": 1,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "see \u2192 ( ? )",
            "options": [
                "sees",
                "see",
                "seing",
                "saw"
            ],
            "answer": 3,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "saw \u2192 ( ? )",
            "options": [
                "see",
                "saws",
                "sawing",
                "saw"
            ],
            "answer": 0,
            "hint": "The original form of 'saw' is 'see'."
        },
        {
            "question": "She ( make ) cookies. \u2192 ( ? )",
            "options": [
                "makes",
                "made",
                "make",
                "making"
            ],
            "answer": 1,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "have \u2192 ( ? )",
            "options": [
                "have",
                "had",
                "having",
                "haves"
            ],
            "answer": 1,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "had \u2192 ( ? )",
            "options": [
                "have",
                "hading",
                "hads",
                "had"
            ],
            "answer": 0,
            "hint": "The original form of 'had' is 'have'."
        },
        {
            "question": "We ( make ) a plan. \u2192 ( ? )",
            "options": [
                "makes",
                "making",
                "make",
                "made"
            ],
            "answer": 3,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "eat \u2192 ( ? )",
            "options": [
                "eat",
                "eating",
                "eated",
                "ate"
            ],
            "answer": 3,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "ate \u2192 ( ? )",
            "options": [
                "eat",
                "ateing",
                "ates",
                "ate"
            ],
            "answer": 0,
            "hint": "The original form of 'ate' is 'eat'."
        },
        {
            "question": "They ( make ) a noise. \u2192 ( ? )",
            "options": [
                "making",
                "makes",
                "made",
                "make"
            ],
            "answer": 2,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "get \u2192 ( ? )",
            "options": [
                "geted",
                "gets",
                "got",
                "geting"
            ],
            "answer": 2,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "got \u2192 ( ? )",
            "options": [
                "get",
                "gots",
                "got",
                "goting"
            ],
            "answer": 0,
            "hint": "The original form of 'got' is 'get'."
        },
        {
            "question": "I ( say ) hello. \u2192 ( ? )",
            "options": [
                "saying",
                "said",
                "sayed",
                "say"
            ],
            "answer": 1,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "take \u2192 ( ? )",
            "options": [
                "took",
                "taking",
                "taked",
                "takes"
            ],
            "answer": 0,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "took \u2192 ( ? )",
            "options": [
                "took",
                "take",
                "tooking",
                "tooks"
            ],
            "answer": 1,
            "hint": "The original form of 'took' is 'take'."
        },
        {
            "question": "You ( say ) goodbye. \u2192 ( ? )",
            "options": [
                "sayed",
                "say",
                "saying",
                "said"
            ],
            "answer": 3,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "make \u2192 ( ? )",
            "options": [
                "make",
                "made",
                "makes",
                "making"
            ],
            "answer": 1,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "made \u2192 ( ? )",
            "options": [
                "madeing",
                "make",
                "made",
                "mades"
            ],
            "answer": 1,
            "hint": "The original form of 'made' is 'make'."
        },
        {
            "question": "He ( say ) yes. \u2192 ( ? )",
            "options": [
                "said",
                "say",
                "sayed",
                "saying"
            ],
            "answer": 0,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "say \u2192 ( ? )",
            "options": [
                "said",
                "saying",
                "say",
                "sayed"
            ],
            "answer": 0,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "said \u2192 ( ? )",
            "options": [
                "said",
                "saiding",
                "saids",
                "say"
            ],
            "answer": 3,
            "hint": "The original form of 'said' is 'say'."
        },
        {
            "question": "She ( say ) no. \u2192 ( ? )",
            "options": [
                "saying",
                "say",
                "said",
                "sayed"
            ],
            "answer": 2,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "do \u2192 ( ? )",
            "options": [
                "doing",
                "do",
                "doed",
                "did"
            ],
            "answer": 3,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "did \u2192 ( ? )",
            "options": [
                "diding",
                "did",
                "dids",
                "do"
            ],
            "answer": 3,
            "hint": "The original form of 'did' is 'do'."
        },
        {
            "question": "I ( do ) my homework. \u2192 ( ? )",
            "options": [
                "doed",
                "did",
                "do",
                "doing"
            ],
            "answer": 1,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "buy \u2192 ( ? )",
            "options": [
                "buy",
                "bought",
                "buyed",
                "buys"
            ],
            "answer": 1,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "bought \u2192 ( ? )",
            "options": [
                "buy",
                "boughting",
                "boughts",
                "bought"
            ],
            "answer": 0,
            "hint": "The original form of 'bought' is 'buy'."
        },
        {
            "question": "You ( do ) a good job. \u2192 ( ? )",
            "options": [
                "did",
                "doed",
                "doing",
                "do"
            ],
            "answer": 0,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "read",
                "readed",
                "reading",
                "reads"
            ],
            "answer": 0,
            "hint": "The past tense of 'read' is 'read'."
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "reads",
                "readed",
                "reading",
                "read"
            ],
            "answer": 3,
            "hint": "The original form of 'read' is 'read'."
        },
        {
            "question": "He ( do ) judo. \u2192 ( ? )",
            "options": [
                "do",
                "doed",
                "doing",
                "did"
            ],
            "answer": 3,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "run \u2192 ( ? )",
            "options": [
                "ran",
                "runing",
                "runs",
                "run"
            ],
            "answer": 0,
            "hint": "The past tense of 'run' is 'ran'."
        },
        {
            "question": "ran \u2192 ( ? )",
            "options": [
                "run",
                "rans",
                "raning",
                "ran"
            ],
            "answer": 0,
            "hint": "The original form of 'ran' is 'run'."
        },
        {
            "question": "She ( do ) the dishes. \u2192 ( ? )",
            "options": [
                "did",
                "doed",
                "doing",
                "do"
            ],
            "answer": 0,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "write \u2192 ( ? )",
            "options": [
                "wrote",
                "writing",
                "writes",
                "write"
            ],
            "answer": 0,
            "hint": "The past tense of 'write' is 'wrote'."
        },
        {
            "question": "wrote \u2192 ( ? )",
            "options": [
                "wrote",
                "wrotes",
                "wroteing",
                "write"
            ],
            "answer": 3,
            "hint": "The original form of 'wrote' is 'write'."
        },
        {
            "question": "I ( buy ) a pen. \u2192 ( ? )",
            "options": [
                "buy",
                "buys",
                "bought",
                "buyed"
            ],
            "answer": 2,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "speak \u2192 ( ? )",
            "options": [
                "speaks",
                "speaking",
                "spoke",
                "speak"
            ],
            "answer": 2,
            "hint": "The past tense of 'speak' is 'spoke'."
        },
        {
            "question": "spoke \u2192 ( ? )",
            "options": [
                "speak",
                "spokes",
                "spoke",
                "spokeing"
            ],
            "answer": 0,
            "hint": "The original form of 'spoke' is 'speak'."
        },
        {
            "question": "You ( buy ) a bag. \u2192 ( ? )",
            "options": [
                "bought",
                "buyed",
                "buy",
                "buys"
            ],
            "answer": 0,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "know \u2192 ( ? )",
            "options": [
                "knowing",
                "know",
                "knowed",
                "knew"
            ],
            "answer": 3,
            "hint": "The past tense of 'know' is 'knew'."
        },
        {
            "question": "knew \u2192 ( ? )",
            "options": [
                "knews",
                "knewing",
                "knew",
                "know"
            ],
            "answer": 3,
            "hint": "The original form of 'knew' is 'know'."
        },
        {
            "question": "He ( buy ) a car. \u2192 ( ? )",
            "options": [
                "bought",
                "buy",
                "buys",
                "buyed"
            ],
            "answer": 0,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "give \u2192 ( ? )",
            "options": [
                "gived",
                "gave",
                "giving",
                "give"
            ],
            "answer": 1,
            "hint": "The past tense of 'give' is 'gave'."
        },
        {
            "question": "gave \u2192 ( ? )",
            "options": [
                "gaveing",
                "gave",
                "give",
                "gaves"
            ],
            "answer": 2,
            "hint": "The original form of 'gave' is 'give'."
        },
        {
            "question": "She ( buy ) flowers. \u2192 ( ? )",
            "options": [
                "buy",
                "buyed",
                "buys",
                "bought"
            ],
            "answer": 3,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "swim \u2192 ( ? )",
            "options": [
                "swiming",
                "swam",
                "swim",
                "swimed"
            ],
            "answer": 1,
            "hint": "The past tense of 'swim' is 'swam'."
        },
        {
            "question": "swam \u2192 ( ? )",
            "options": [
                "swams",
                "swam",
                "swaming",
                "swim"
            ],
            "answer": 3,
            "hint": "The original form of 'swam' is 'swim'."
        },
        {
            "question": "I ( read ) the book. \u2192 ( ? )",
            "options": [
                "reading",
                "readed",
                "reads",
                "read"
            ],
            "answer": 3,
            "hint": "The past tense of 'read' is 'read'."
        },
        {
            "question": "meet \u2192 ( ? )",
            "options": [
                "met",
                "meeted",
                "meets",
                "meet"
            ],
            "answer": 0,
            "hint": "The past tense of 'meet' is 'met'."
        },
        {
            "question": "met \u2192 ( ? )",
            "options": [
                "meet",
                "met",
                "meting",
                "mets"
            ],
            "answer": 0,
            "hint": "The original form of 'met' is 'meet'."
        },
        {
            "question": "You ( read ) newspaper. \u2192 ( ? )",
            "options": [
                "reading",
                "reads",
                "read",
                "readed"
            ],
            "answer": 2,
            "hint": "The past tense of 'read' is 'read'."
        },
        {
            "question": "sing \u2192 ( ? )",
            "options": [
                "sing",
                "singed",
                "sang",
                "singing"
            ],
            "answer": 2,
            "hint": "The past tense of 'sing' is 'sang'."
        },
        {
            "question": "sang \u2192 ( ? )",
            "options": [
                "sing",
                "sangs",
                "sanging",
                "sang"
            ],
            "answer": 0,
            "hint": "The original form of 'sang' is 'sing'."
        },
        {
            "question": "I ( write ) a letter. \u2192 ( ? )",
            "options": [
                "writes",
                "write",
                "wrote",
                "writing"
            ],
            "answer": 2,
            "hint": "The past tense of 'write' is 'wrote'."
        },
        {
            "question": "stand \u2192 ( ? )",
            "options": [
                "standing",
                "stood",
                "stands",
                "stand"
            ],
            "answer": 1,
            "hint": "The past tense of 'stand' is 'stood'."
        },
        {
            "question": "stood \u2192 ( ? )",
            "options": [
                "stooding",
                "stood",
                "stoods",
                "stand"
            ],
            "answer": 3,
            "hint": "The original form of 'stood' is 'stand'."
        },
        {
            "question": "He ( write ) an email. \u2192 ( ? )",
            "options": [
                "wrote",
                "write",
                "writing",
                "writes"
            ],
            "answer": 0,
            "hint": "The past tense of 'write' is 'wrote'."
        },
        {
            "question": "sit \u2192 ( ? )",
            "options": [
                "siting",
                "sited",
                "sat",
                "sits"
            ],
            "answer": 2,
            "hint": "The past tense of 'sit' is 'sat'."
        },
        {
            "question": "sat \u2192 ( ? )",
            "options": [
                "sats",
                "sat",
                "sit",
                "sating"
            ],
            "answer": 2,
            "hint": "The original form of 'sat' is 'sit'."
        },
        {
            "question": "I ( speak ) English. \u2192 ( ? )",
            "options": [
                "speak",
                "speaks",
                "speaking",
                "spoke"
            ],
            "answer": 3,
            "hint": "The past tense of 'speak' is 'spoke'."
        },
        {
            "question": "sleep \u2192 ( ? )",
            "options": [
                "sleeps",
                "slept",
                "sleeped",
                "sleeping"
            ],
            "answer": 1,
            "hint": "The past tense of 'sleep' is 'slept'."
        },
        {
            "question": "slept \u2192 ( ? )",
            "options": [
                "sleep",
                "slepting",
                "slepts",
                "slept"
            ],
            "answer": 0,
            "hint": "The original form of 'slept' is 'sleep'."
        },
        {
            "question": "She ( speak ) Japanese. \u2192 ( ? )",
            "options": [
                "spoke",
                "speaks",
                "speak",
                "speaking"
            ],
            "answer": 0,
            "hint": "The past tense of 'speak' is 'spoke'."
        },
        {
            "question": "drink \u2192 ( ? )",
            "options": [
                "drinks",
                "drink",
                "drank",
                "drinked"
            ],
            "answer": 2,
            "hint": "The past tense of 'drink' is 'drank'."
        },
        {
            "question": "drank \u2192 ( ? )",
            "options": [
                "drank",
                "dranking",
                "drink",
                "dranks"
            ],
            "answer": 2,
            "hint": "The original form of 'drank' is 'drink'."
        },
        {
            "question": "I ( know ) the answer. \u2192 ( ? )",
            "options": [
                "knowed",
                "knowing",
                "knew",
                "know"
            ],
            "answer": 2,
            "hint": "The past tense of 'know' is 'knew'."
        },
        {
            "question": "find \u2192 ( ? )",
            "options": [
                "finded",
                "find",
                "found",
                "finding"
            ],
            "answer": 2,
            "hint": "The past tense of 'find' is 'found'."
        },
        {
            "question": "found \u2192 ( ? )",
            "options": [
                "find",
                "found",
                "founds",
                "founding"
            ],
            "answer": 0,
            "hint": "The original form of 'found' is 'find'."
        },
        {
            "question": "He ( know ) her name. \u2192 ( ? )",
            "options": [
                "knowed",
                "knew",
                "knowing",
                "know"
            ],
            "answer": 1,
            "hint": "The past tense of 'know' is 'knew'."
        },
        {
            "question": "win \u2192 ( ? )",
            "options": [
                "wining",
                "wined",
                "won",
                "wins"
            ],
            "answer": 2,
            "hint": "The past tense of 'win' is 'won'."
        },
        {
            "question": "won \u2192 ( ? )",
            "options": [
                "wons",
                "won",
                "win",
                "woning"
            ],
            "answer": 2,
            "hint": "The original form of 'won' is 'win'."
        },
        {
            "question": "I ( give ) him a book. \u2192 ( ? )",
            "options": [
                "give",
                "giving",
                "gave",
                "gived"
            ],
            "answer": 2,
            "hint": "The past tense of 'give' is 'gave'."
        },
        {
            "question": "lose \u2192 ( ? )",
            "options": [
                "lost",
                "loses",
                "lose",
                "losing"
            ],
            "answer": 0,
            "hint": "The past tense of 'lose' is 'lost'."
        },
        {
            "question": "lost \u2192 ( ? )",
            "options": [
                "lost",
                "losts",
                "lose",
                "losting"
            ],
            "answer": 2,
            "hint": "The original form of 'lost' is 'lose'."
        },
        {
            "question": "She ( give ) me a gift. \u2192 ( ? )",
            "options": [
                "give",
                "gave",
                "giving",
                "gived"
            ],
            "answer": 1,
            "hint": "The past tense of 'give' is 'gave'."
        },
        {
            "question": "catch \u2192 ( ? )",
            "options": [
                "catchs",
                "catching",
                "caught",
                "catched"
            ],
            "answer": 2,
            "hint": "The past tense of 'catch' is 'caught'."
        },
        {
            "question": "caught \u2192 ( ? )",
            "options": [
                "catch",
                "caught",
                "caughting",
                "caughts"
            ],
            "answer": 0,
            "hint": "The original form of 'caught' is 'catch'."
        },
        {
            "question": "I ( swim ) in the sea. \u2192 ( ? )",
            "options": [
                "swim",
                "swiming",
                "swam",
                "swimed"
            ],
            "answer": 2,
            "hint": "The past tense of 'swim' is 'swam'."
        },
        {
            "question": "teach \u2192 ( ? )",
            "options": [
                "teach",
                "teaching",
                "taught",
                "teachs"
            ],
            "answer": 2,
            "hint": "The past tense of 'teach' is 'taught'."
        },
        {
            "question": "taught \u2192 ( ? )",
            "options": [
                "taught",
                "taughting",
                "taughts",
                "teach"
            ],
            "answer": 3,
            "hint": "The original form of 'taught' is 'teach'."
        },
        {
            "question": "They ( swim ) in pool. \u2192 ( ? )",
            "options": [
                "swim",
                "swam",
                "swimed",
                "swiming"
            ],
            "answer": 1,
            "hint": "The past tense of 'swim' is 'swam'."
        },
        {
            "question": "leave \u2192 ( ? )",
            "options": [
                "leaving",
                "leaves",
                "leaved",
                "left"
            ],
            "answer": 3,
            "hint": "The past tense of 'leave' is 'left'."
        },
        {
            "question": "left \u2192 ( ? )",
            "options": [
                "lefting",
                "lefts",
                "left",
                "leave"
            ],
            "answer": 3,
            "hint": "The original form of 'left' is 'leave'."
        },
        {
            "question": "I ( meet ) Ken. \u2192 ( ? )",
            "options": [
                "met",
                "meeted",
                "meet",
                "meets"
            ],
            "answer": 0,
            "hint": "The past tense of 'meet' is 'met'."
        },
        {
            "question": "think \u2192 ( ? )",
            "options": [
                "thinked",
                "thought",
                "think",
                "thinks"
            ],
            "answer": 1,
            "hint": "The past tense of 'think' is 'thought'."
        },
        {
            "question": "thought \u2192 ( ? )",
            "options": [
                "thought",
                "thoughts",
                "think",
                "thoughting"
            ],
            "answer": 2,
            "hint": "The original form of 'thought' is 'think'."
        },
        {
            "question": "We ( meet ) at the park. \u2192 ( ? )",
            "options": [
                "met",
                "meets",
                "meeted",
                "meet"
            ],
            "answer": 0,
            "hint": "The past tense of 'meet' is 'met'."
        },
        {
            "question": "tell \u2192 ( ? )",
            "options": [
                "telling",
                "told",
                "tell",
                "telled"
            ],
            "answer": 1,
            "hint": "The past tense of 'tell' is 'told'."
        },
        {
            "question": "told \u2192 ( ? )",
            "options": [
                "tell",
                "tolding",
                "tolds",
                "told"
            ],
            "answer": 0,
            "hint": "The original form of 'told' is 'tell'."
        },
        {
            "question": "I ( sing ) a song. \u2192 ( ? )",
            "options": [
                "singing",
                "sang",
                "singed",
                "sing"
            ],
            "answer": 1,
            "hint": "The past tense of 'sing' is 'sang'."
        },
        {
            "question": "hear \u2192 ( ? )",
            "options": [
                "hear",
                "heard",
                "hears",
                "heared"
            ],
            "answer": 1,
            "hint": "The past tense of 'hear' is 'heard'."
        },
        {
            "question": "heard \u2192 ( ? )",
            "options": [
                "heard",
                "hearding",
                "heards",
                "hear"
            ],
            "answer": 3,
            "hint": "The original form of 'heard' is 'hear'."
        },
        {
            "question": "She ( sing ) well. \u2192 ( ? )",
            "options": [
                "singing",
                "sing",
                "sang",
                "singed"
            ],
            "answer": 2,
            "hint": "The past tense of 'sing' is 'sang'."
        },
        {
            "question": "feel \u2192 ( ? )",
            "options": [
                "feeling",
                "felt",
                "feels",
                "feel"
            ],
            "answer": 1,
            "hint": "The past tense of 'feel' is 'felt'."
        },
        {
            "question": "felt \u2192 ( ? )",
            "options": [
                "felting",
                "felt",
                "felts",
                "feel"
            ],
            "answer": 3,
            "hint": "The original form of 'felt' is 'feel'."
        },
        {
            "question": "He ( stand ) up. \u2192 ( ? )",
            "options": [
                "stands",
                "standing",
                "stood",
                "stand"
            ],
            "answer": 2,
            "hint": "The past tense of 'stand' is 'stood'."
        },
        {
            "question": "keep \u2192 ( ? )",
            "options": [
                "keep",
                "kept",
                "keeped",
                "keeping"
            ],
            "answer": 1,
            "hint": "The past tense of 'keep' is 'kept'."
        },
        {
            "question": "kept \u2192 ( ? )",
            "options": [
                "keep",
                "kepting",
                "kept",
                "kepts"
            ],
            "answer": 0,
            "hint": "The original form of 'kept' is 'keep'."
        },
        {
            "question": "She ( sit ) down. \u2192 ( ? )",
            "options": [
                "sits",
                "sat",
                "siting",
                "sited"
            ],
            "answer": 1,
            "hint": "The past tense of 'sit' is 'sat'."
        },
        {
            "question": "begin \u2192 ( ? )",
            "options": [
                "begins",
                "begining",
                "began",
                "begin"
            ],
            "answer": 2,
            "hint": "The past tense of 'begin' is 'began'."
        },
        {
            "question": "began \u2192 ( ? )",
            "options": [
                "begans",
                "began",
                "beganing",
                "begin"
            ],
            "answer": 3,
            "hint": "The original form of 'began' is 'begin'."
        },
        {
            "question": "I ( sleep ) well. \u2192 ( ? )",
            "options": [
                "sleeps",
                "sleeped",
                "sleeping",
                "slept"
            ],
            "answer": 3,
            "hint": "The past tense of 'sleep' is 'slept'."
        },
        {
            "question": "break \u2192 ( ? )",
            "options": [
                "breaked",
                "breaking",
                "broke",
                "breaks"
            ],
            "answer": 2,
            "hint": "The past tense of 'break' is 'broke'."
        },
        {
            "question": "broke \u2192 ( ? )",
            "options": [
                "brokeing",
                "broke",
                "break",
                "brokes"
            ],
            "answer": 2,
            "hint": "The original form of 'broke' is 'break'."
        },
        {
            "question": "He ( sleep ) on sofa. \u2192 ( ? )",
            "options": [
                "slept",
                "sleeped",
                "sleeps",
                "sleeping"
            ],
            "answer": 0,
            "hint": "The past tense of 'sleep' is 'slept'."
        },
        {
            "question": "go \u2192 ( ? )",
            "options": [
                "gos",
                "goed",
                "go",
                "went"
            ],
            "answer": 3,
            "hint": "The past tense of 'go' is 'went'."
        },
        {
            "question": "went \u2192 ( ? )",
            "options": [
                "wents",
                "wenting",
                "go",
                "went"
            ],
            "answer": 2,
            "hint": "The original form of 'went' is 'go'."
        },
        {
            "question": "I ( drink ) water. \u2192 ( ? )",
            "options": [
                "drink",
                "drank",
                "drinks",
                "drinked"
            ],
            "answer": 1,
            "hint": "The past tense of 'drink' is 'drank'."
        },
        {
            "question": "come \u2192 ( ? )",
            "options": [
                "comed",
                "come",
                "comes",
                "came"
            ],
            "answer": 3,
            "hint": "The past tense of 'come' is 'came'."
        },
        {
            "question": "came \u2192 ( ? )",
            "options": [
                "cames",
                "came",
                "come",
                "cameing"
            ],
            "answer": 2,
            "hint": "The original form of 'came' is 'come'."
        },
        {
            "question": "You ( drink ) tea. \u2192 ( ? )",
            "options": [
                "drink",
                "drank",
                "drinked",
                "drinks"
            ],
            "answer": 1,
            "hint": "The past tense of 'drink' is 'drank'."
        },
        {
            "question": "see \u2192 ( ? )",
            "options": [
                "saw",
                "see",
                "seing",
                "sees"
            ],
            "answer": 0,
            "hint": "The past tense of 'see' is 'saw'."
        },
        {
            "question": "saw \u2192 ( ? )",
            "options": [
                "saw",
                "sawing",
                "saws",
                "see"
            ],
            "answer": 3,
            "hint": "The original form of 'saw' is 'see'."
        },
        {
            "question": "He ( drink ) milk. \u2192 ( ? )",
            "options": [
                "drinked",
                "drinks",
                "drink",
                "drank"
            ],
            "answer": 3,
            "hint": "The past tense of 'drink' is 'drank'."
        },
        {
            "question": "have \u2192 ( ? )",
            "options": [
                "had",
                "having",
                "haves",
                "have"
            ],
            "answer": 0,
            "hint": "The past tense of 'have' is 'had'."
        },
        {
            "question": "had \u2192 ( ? )",
            "options": [
                "hads",
                "have",
                "hading",
                "had"
            ],
            "answer": 1,
            "hint": "The original form of 'had' is 'have'."
        },
        {
            "question": "She ( drink ) juice. \u2192 ( ? )",
            "options": [
                "drank",
                "drink",
                "drinks",
                "drinked"
            ],
            "answer": 0,
            "hint": "The past tense of 'drink' is 'drank'."
        },
        {
            "question": "eat \u2192 ( ? )",
            "options": [
                "ate",
                "eated",
                "eat",
                "eating"
            ],
            "answer": 0,
            "hint": "The past tense of 'eat' is 'ate'."
        },
        {
            "question": "ate \u2192 ( ? )",
            "options": [
                "ates",
                "ate",
                "ateing",
                "eat"
            ],
            "answer": 3,
            "hint": "The original form of 'ate' is 'eat'."
        },
        {
            "question": "I ( find ) my key. \u2192 ( ? )",
            "options": [
                "found",
                "find",
                "finding",
                "finded"
            ],
            "answer": 0,
            "hint": "The past tense of 'find' is 'found'."
        },
        {
            "question": "get \u2192 ( ? )",
            "options": [
                "got",
                "geting",
                "geted",
                "gets"
            ],
            "answer": 0,
            "hint": "The past tense of 'get' is 'got'."
        },
        {
            "question": "got \u2192 ( ? )",
            "options": [
                "gots",
                "get",
                "got",
                "goting"
            ],
            "answer": 1,
            "hint": "The original form of 'got' is 'get'."
        },
        {
            "question": "You ( find ) the place. \u2192 ( ? )",
            "options": [
                "finded",
                "find",
                "finding",
                "found"
            ],
            "answer": 3,
            "hint": "The past tense of 'find' is 'found'."
        },
        {
            "question": "take \u2192 ( ? )",
            "options": [
                "taked",
                "takes",
                "taking",
                "took"
            ],
            "answer": 3,
            "hint": "The past tense of 'take' is 'took'."
        },
        {
            "question": "took \u2192 ( ? )",
            "options": [
                "tooks",
                "tooking",
                "took",
                "take"
            ],
            "answer": 3,
            "hint": "The original form of 'took' is 'take'."
        },
        {
            "question": "We ( win ) the game. \u2192 ( ? )",
            "options": [
                "wining",
                "wined",
                "wins",
                "won"
            ],
            "answer": 3,
            "hint": "The past tense of 'win' is 'won'."
        },
        {
            "question": "make \u2192 ( ? )",
            "options": [
                "makes",
                "made",
                "making",
                "make"
            ],
            "answer": 1,
            "hint": "The past tense of 'make' is 'made'."
        },
        {
            "question": "made \u2192 ( ? )",
            "options": [
                "mades",
                "make",
                "madeing",
                "made"
            ],
            "answer": 1,
            "hint": "The original form of 'made' is 'make'."
        },
        {
            "question": "They ( lose ) the game. \u2192 ( ? )",
            "options": [
                "losing",
                "loses",
                "lost",
                "lose"
            ],
            "answer": 2,
            "hint": "The past tense of 'lose' is 'lost'."
        },
        {
            "question": "say \u2192 ( ? )",
            "options": [
                "said",
                "sayed",
                "say",
                "saying"
            ],
            "answer": 0,
            "hint": "The past tense of 'say' is 'said'."
        },
        {
            "question": "said \u2192 ( ? )",
            "options": [
                "said",
                "saiding",
                "say",
                "saids"
            ],
            "answer": 2,
            "hint": "The original form of 'said' is 'say'."
        },
        {
            "question": "I ( catch ) the ball. \u2192 ( ? )",
            "options": [
                "catchs",
                "catching",
                "caught",
                "catched"
            ],
            "answer": 2,
            "hint": "The past tense of 'catch' is 'caught'."
        },
        {
            "question": "do \u2192 ( ? )",
            "options": [
                "doed",
                "do",
                "doing",
                "did"
            ],
            "answer": 3,
            "hint": "The past tense of 'do' is 'did'."
        },
        {
            "question": "did \u2192 ( ? )",
            "options": [
                "dids",
                "did",
                "do",
                "diding"
            ],
            "answer": 2,
            "hint": "The original form of 'did' is 'do'."
        },
        {
            "question": "He ( catch ) a cold. \u2192 ( ? )",
            "options": [
                "catchs",
                "catched",
                "catching",
                "caught"
            ],
            "answer": 3,
            "hint": "The past tense of 'catch' is 'caught'."
        },
        {
            "question": "buy \u2192 ( ? )",
            "options": [
                "bought",
                "buy",
                "buys",
                "buyed"
            ],
            "answer": 0,
            "hint": "The past tense of 'buy' is 'bought'."
        },
        {
            "question": "bought \u2192 ( ? )",
            "options": [
                "bought",
                "boughts",
                "buy",
                "boughting"
            ],
            "answer": 2,
            "hint": "The original form of 'bought' is 'buy'."
        },
        {
            "question": "I ( teach ) English. \u2192 ( ? )",
            "options": [
                "teach",
                "teaching",
                "taught",
                "teachs"
            ],
            "answer": 2,
            "hint": "The past tense of 'teach' is 'taught'."
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "readed",
                "reads",
                "read",
                "reading"
            ],
            "answer": 2,
            "hint": "The past tense of 'read' is 'read'."
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "readed",
                "reading",
                "reads",
                "read"
            ],
            "answer": 3,
            "hint": "The original form of 'read' is 'read'."
        },
        {
            "question": "He ( teach ) math. \u2192 ( ? )",
            "options": [
                "teach",
                "taught",
                "teaching",
                "teachs"
            ],
            "answer": 1,
            "hint": "The past tense of 'teach' is 'taught'."
        },
        {
            "question": "run \u2192 ( ? )",
            "options": [
                "ran",
                "run",
                "runs",
                "runing"
            ],
            "answer": 0,
            "hint": "The past tense of 'run' is 'ran'."
        },
        {
            "question": "ran \u2192 ( ? )",
            "options": [
                "run",
                "raning",
                "rans",
                "ran"
            ],
            "answer": 0,
            "hint": "The original form of 'ran' is 'run'."
        },
        {
            "question": "I ( leave ) home at 7. \u2192 ( ? )",
            "options": [
                "leaved",
                "left",
                "leaves",
                "leaving"
            ],
            "answer": 1,
            "hint": "The past tense of 'leave' is 'left'."
        },
        {
            "question": "write \u2192 ( ? )",
            "options": [
                "writes",
                "wrote",
                "writing",
                "write"
            ],
            "answer": 1,
            "hint": "The past tense of 'write' is 'wrote'."
        },
        {
            "question": "wrote \u2192 ( ? )",
            "options": [
                "wrotes",
                "write",
                "wroteing",
                "wrote"
            ],
            "answer": 1,
            "hint": "The original form of 'wrote' is 'write'."
        },
        {
            "question": "He ( leave ) his bag. \u2192 ( ? )",
            "options": [
                "leaved",
                "leaves",
                "leaving",
                "left"
            ],
            "answer": 3,
            "hint": "The past tense of 'leave' is 'left'."
        },
        {
            "question": "speak \u2192 ( ? )",
            "options": [
                "speaks",
                "spoke",
                "speaking",
                "speak"
            ],
            "answer": 1,
            "hint": "The past tense of 'speak' is 'spoke'."
        },
        {
            "question": "spoke \u2192 ( ? )",
            "options": [
                "spokeing",
                "spoke",
                "spokes",
                "speak"
            ],
            "answer": 3,
            "hint": "The original form of 'spoke' is 'speak'."
        },
        {
            "question": "I ( think ) so. \u2192 ( ? )",
            "options": [
                "think",
                "thought",
                "thinked",
                "thinks"
            ],
            "answer": 1,
            "hint": "The past tense of 'think' is 'thought'."
        },
        {
            "question": "know \u2192 ( ? )",
            "options": [
                "knowing",
                "knowed",
                "know",
                "knew"
            ],
            "answer": 3,
            "hint": "The past tense of 'know' is 'knew'."
        },
        {
            "question": "knew \u2192 ( ? )",
            "options": [
                "know",
                "knews",
                "knewing",
                "knew"
            ],
            "answer": 0,
            "hint": "The original form of 'knew' is 'know'."
        },
        {
            "question": "She ( think ) about it. \u2192 ( ? )",
            "options": [
                "think",
                "thinked",
                "thinks",
                "thought"
            ],
            "answer": 3,
            "hint": "The past tense of 'think' is 'thought'."
        },
        {
            "question": "give \u2192 ( ? )",
            "options": [
                "giving",
                "gave",
                "give",
                "gived"
            ],
            "answer": 1,
            "hint": "The past tense of 'give' is 'gave'."
        },
        {
            "question": "gave \u2192 ( ? )",
            "options": [
                "gaves",
                "gaveing",
                "give",
                "gave"
            ],
            "answer": 2,
            "hint": "The original form of 'gave' is 'give'."
        },
        {
            "question": "I ( tell ) him. \u2192 ( ? )",
            "options": [
                "told",
                "telling",
                "telled",
                "tell"
            ],
            "answer": 0,
            "hint": "The past tense of 'tell' is 'told'."
        },
        {
            "question": "is / am \u2192 ( ? )",
            "options": [
                "iss",
                "ised",
                "was",
                "is"
            ],
            "answer": 2,
            "hint": "The past tense of 'is / am' is 'was'."
        },
        {
            "question": "was \u2192 ( ? )",
            "options": [
                "was",
                "wasing",
                "wass",
                "is / am"
            ],
            "answer": 3,
            "hint": "The original form of 'was' is 'is / am'."
        },
        {
            "question": "Please ( tell ) me. \u2192 ( ? )",
            "options": [
                "tell",
                "told",
                "tells",
                "telled"
            ],
            "answer": 0,
            "hint": "In this sentence pattern, we use the original form 'tell'."
        },
        {
            "question": "are \u2192 ( ? )",
            "options": [
                "were",
                "ares",
                "ared",
                "aring"
            ],
            "answer": 0,
            "hint": "The past tense of 'are' is 'were'."
        },
        {
            "question": "were \u2192 ( ? )",
            "options": [
                "were",
                "wereing",
                "are",
                "weres"
            ],
            "answer": 2,
            "hint": "The original form of 'were' is 'are'."
        },
        {
            "question": "Let's ( go )! \u2192 ( ? )",
            "options": [
                "goed",
                "going",
                "went",
                "go"
            ],
            "answer": 3,
            "hint": "In this sentence pattern, we use the original form 'go'."
        },
        {
            "question": "cut \u2192 ( ? )",
            "options": [
                "cut",
                "cuts",
                "cuting",
                "cuted"
            ],
            "answer": 0,
            "hint": "The past tense of 'cut' is 'cut'."
        },
        {
            "question": "cut \u2192 ( ? )",
            "options": [
                "cuted",
                "cuting",
                "cuts",
                "cut"
            ],
            "answer": 3,
            "hint": "The original form of 'cut' is 'cut'."
        },
        {
            "question": "Did you ( go )? \u2192 ( ? )",
            "options": [
                "go",
                "goed",
                "went",
                "going"
            ],
            "answer": 0,
            "hint": "In this sentence pattern, we use the original form 'go'."
        }
    ]
};

quizData.english_past_progressive = {
    title: "過去進行形 (was / were + -ing)",
    questions: [
        {
            "question": "play \u2192 ( ? )",
            "options": [
                "playeing",
                "played",
                "playing",
                "plays"
            ],
            "answer": 2,
            "hint": "The -ing form of 'play' is 'playing'."
        },
        {
            "question": "I ( play ) tennis. \u2192 ( ? )",
            "options": [
                "were playing",
                "was play",
                "was played",
                "was playing"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + playing"
        },
        {
            "question": "I was sleeping. (\u5426\u5b9a) \u2192 I ( ? )",
            "options": [
                "wasn't sleeping",
                "was not sleeping",
                "wasn't sleeping",
                "didn't sleeping"
            ],
            "answer": 0,
            "hint": "Answer: wasn't sleeping"
        },
        {
            "question": "watch \u2192 ( ? )",
            "options": [
                "watched",
                "watching",
                "watchs",
                "watcheing"
            ],
            "answer": 1,
            "hint": "The -ing form of 'watch' is 'watching'."
        },
        {
            "question": "You ( play ) baseball. \u2192 ( ? )",
            "options": [
                "was playing",
                "were playing",
                "were play",
                "were played"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + playing"
        },
        {
            "question": "You were studying. (\u5426\u5b9a) \u2192 You ( ? )",
            "options": [
                "weren't studying",
                "were not studying",
                "wasn't studying",
                "didn't studying"
            ],
            "answer": 0,
            "hint": "Answer: weren't studying"
        },
        {
            "question": "cook \u2192 ( ? )",
            "options": [
                "cookeing",
                "cooked",
                "cooking",
                "cooks"
            ],
            "answer": 2,
            "hint": "The -ing form of 'cook' is 'cooking'."
        },
        {
            "question": "He ( play ) guitar. \u2192 ( ? )",
            "options": [
                "was playing",
                "was played",
                "was play",
                "were playing"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + playing"
        },
        {
            "question": "He was eating. (\u5426\u5b9a) \u2192 He ( ? )",
            "options": [
                "wasn't eating",
                "was not eating",
                "wasn't eating",
                "didn't eating"
            ],
            "answer": 0,
            "hint": "Answer: wasn't eating"
        },
        {
            "question": "read \u2192 ( ? )",
            "options": [
                "reads",
                "readed",
                "readeing",
                "reading"
            ],
            "answer": 3,
            "hint": "The -ing form of 'read' is 'reading'."
        },
        {
            "question": "She ( play ) piano. \u2192 ( ? )",
            "options": [
                "was played",
                "was playing",
                "were playing",
                "was play"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + playing"
        },
        {
            "question": "She was running. (\u5426\u5b9a) \u2192 She ( ? )",
            "options": [
                "wasn't running",
                "was not running",
                "wasn't running",
                "didn't running"
            ],
            "answer": 0,
            "hint": "Answer: wasn't running"
        },
        {
            "question": "study \u2192 ( ? )",
            "options": [
                "studyed",
                "studying",
                "studyeing",
                "studys"
            ],
            "answer": 1,
            "hint": "The -ing form of 'study' is 'studying'."
        },
        {
            "question": "We ( play ) games. \u2192 ( ? )",
            "options": [
                "were play",
                "were playing",
                "were played",
                "was playing"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + playing"
        },
        {
            "question": "We were watching. (\u5426\u5b9a) \u2192 We ( ? )",
            "options": [
                "weren't watching",
                "were not watching",
                "wasn't watching",
                "didn't watching"
            ],
            "answer": 0,
            "hint": "Answer: weren't watching"
        },
        {
            "question": "make \u2192 ( ? )",
            "options": [
                "making",
                "makeing",
                "makeed",
                "makes"
            ],
            "answer": 0,
            "hint": "The -ing form of 'make' is 'making'."
        },
        {
            "question": "They ( play ) cards. \u2192 ( ? )",
            "options": [
                "was playing",
                "were play",
                "were playing",
                "were played"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + playing"
        },
        {
            "question": "They were swimming. (\u5426\u5b9a) \u2192 They ( ? )",
            "options": [
                "weren't swimming",
                "were not swimming",
                "wasn't swimming",
                "didn't swimming"
            ],
            "answer": 0,
            "hint": "Answer: weren't swimming"
        },
        {
            "question": "take \u2192 ( ? )",
            "options": [
                "takeing",
                "takes",
                "taking",
                "takeed"
            ],
            "answer": 2,
            "hint": "The -ing form of 'take' is 'taking'."
        },
        {
            "question": "Ken ( play ) soccer. \u2192 ( ? )",
            "options": [
                "were playing",
                "was played",
                "was playing",
                "was play"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + playing"
        },
        {
            "question": "Ken was cooking. (\u5426\u5b9a) \u2192 Ken ( ? )",
            "options": [
                "wasn't cooking",
                "was not cooking",
                "wasn't cooking",
                "didn't cooking"
            ],
            "answer": 0,
            "hint": "Answer: wasn't cooking"
        },
        {
            "question": "write \u2192 ( ? )",
            "options": [
                "writeed",
                "writing",
                "writes",
                "writeing"
            ],
            "answer": 1,
            "hint": "The -ing form of 'write' is 'writing'."
        },
        {
            "question": "I ( watch ) TV. \u2192 ( ? )",
            "options": [
                "was watch",
                "was watching",
                "was watched",
                "were watching"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + watching"
        },
        {
            "question": "The dog was barking. (\u5426\u5b9a) \u2192 The dog ( ? )",
            "options": [
                "wasn't barking",
                "was not barking",
                "wasn't barking",
                "didn't barking"
            ],
            "answer": 0,
            "hint": "Answer: wasn't barking"
        },
        {
            "question": "use \u2192 ( ? )",
            "options": [
                "useing",
                "useed",
                "uses",
                "using"
            ],
            "answer": 3,
            "hint": "The -ing form of 'use' is 'using'."
        },
        {
            "question": "You ( watch ) movie. \u2192 ( ? )",
            "options": [
                "were watch",
                "were watched",
                "were watching",
                "was watching"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + watching"
        },
        {
            "question": "It was raining. (\u5426\u5b9a) \u2192 It ( ? )",
            "options": [
                "wasn't raining",
                "was not raining",
                "wasn't raining",
                "didn't raining"
            ],
            "answer": 0,
            "hint": "Answer: wasn't raining"
        },
        {
            "question": "come \u2192 ( ? )",
            "options": [
                "coming",
                "comes",
                "comeing",
                "comeed"
            ],
            "answer": 0,
            "hint": "The -ing form of 'come' is 'coming'."
        },
        {
            "question": "He ( watch ) YouTube. \u2192 ( ? )",
            "options": [
                "were watching",
                "was watching",
                "was watch",
                "was watched"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + watching"
        },
        {
            "question": "I ( ? ) reading. (\u77ed\u7e2e)",
            "options": [
                "wasn't",
                "weren't",
                "isn't",
                "aren't"
            ],
            "answer": 0,
            "hint": "Answer: wasn't"
        },
        {
            "question": "run \u2192 ( ? )",
            "options": [
                "runing",
                "runed",
                "runs",
                "running"
            ],
            "answer": 3,
            "hint": "The -ing form of 'run' is 'running'."
        },
        {
            "question": "She ( watch ) news. \u2192 ( ? )",
            "options": [
                "was watch",
                "was watched",
                "were watching",
                "was watching"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + watching"
        },
        {
            "question": "You ( ? ) listening. (\u77ed\u7e2e)",
            "options": [
                "weren't",
                "wasn't",
                "aren't",
                "don't"
            ],
            "answer": 0,
            "hint": "Answer: weren't"
        },
        {
            "question": "swim \u2192 ( ? )",
            "options": [
                "swimed",
                "swiming",
                "swimming",
                "swims"
            ],
            "answer": 2,
            "hint": "The -ing form of 'swim' is 'swimming'."
        },
        {
            "question": "We ( watch ) game. \u2192 ( ? )",
            "options": [
                "were watching",
                "were watch",
                "was watching",
                "were watched"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + watching"
        },
        {
            "question": "He ( ? ) working. (\u77ed\u7e2e)",
            "options": [
                "wasn't",
                "weren't",
                "isn't",
                "aren't"
            ],
            "answer": 0,
            "hint": "Answer: wasn't"
        },
        {
            "question": "sit \u2192 ( ? )",
            "options": [
                "sited",
                "sitting",
                "sits",
                "siting"
            ],
            "answer": 1,
            "hint": "The -ing form of 'sit' is 'sitting'."
        },
        {
            "question": "They ( watch ) stars. \u2192 ( ? )",
            "options": [
                "were watch",
                "were watching",
                "was watching",
                "were watched"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + watching"
        },
        {
            "question": "She ( ? ) crying. (\u77ed\u7e2e)",
            "options": [
                "wasn't",
                "weren't",
                "isn't",
                "aren't"
            ],
            "answer": 0,
            "hint": "Answer: wasn't"
        },
        {
            "question": "stop \u2192 ( ? )",
            "options": [
                "stops",
                "stopping",
                "stoped",
                "stoping"
            ],
            "answer": 1,
            "hint": "The -ing form of 'stop' is 'stopping'."
        },
        {
            "question": "Father ( watch ) TV. \u2192 ( ? )",
            "options": [
                "was watching",
                "were watching",
                "were watched",
                "were watch"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + watching"
        },
        {
            "question": "We ( ? ) talking. (\u77ed\u7e2e)",
            "options": [
                "weren't",
                "wasn't",
                "aren't",
                "don't"
            ],
            "answer": 0,
            "hint": "Answer: weren't"
        },
        {
            "question": "get \u2192 ( ? )",
            "options": [
                "getting",
                "geted",
                "gets",
                "geting"
            ],
            "answer": 0,
            "hint": "The -ing form of 'get' is 'getting'."
        },
        {
            "question": "I ( study ) English. \u2192 ( ? )",
            "options": [
                "was studyed",
                "were studying",
                "was studying",
                "was study"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + studying"
        },
        {
            "question": "They ( ? ) using. (\u77ed\u7e2e)",
            "options": [
                "weren't",
                "wasn't",
                "aren't",
                "don't"
            ],
            "answer": 0,
            "hint": "Answer: weren't"
        },
        {
            "question": "cut \u2192 ( ? )",
            "options": [
                "cuts",
                "cuting",
                "cutting",
                "cuted"
            ],
            "answer": 2,
            "hint": "The -ing form of 'cut' is 'cutting'."
        },
        {
            "question": "You ( study ) math. \u2192 ( ? )",
            "options": [
                "were studyed",
                "were studying",
                "was studying",
                "were study"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + studying"
        },
        {
            "question": "You were sleeping. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Were you sleeping?",
                "Were you sleeping.",
                "Did you sleeping?",
                "Were you sleep?"
            ],
            "answer": 0,
            "hint": "Answer: Were you sleeping?"
        },
        {
            "question": "put \u2192 ( ? )",
            "options": [
                "puted",
                "puts",
                "puting",
                "putting"
            ],
            "answer": 3,
            "hint": "The -ing form of 'put' is 'putting'."
        },
        {
            "question": "He ( study ) hard. \u2192 ( ? )",
            "options": [
                "was studying",
                "were studying",
                "was study",
                "was studyed"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + studying"
        },
        {
            "question": "He was studying. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Was he studying?",
                "Was he studying.",
                "Did he studying?",
                "Was he study?"
            ],
            "answer": 0,
            "hint": "Answer: Was he studying?"
        },
        {
            "question": "have \u2192 ( ? )",
            "options": [
                "haves",
                "having",
                "haveed",
                "haveing"
            ],
            "answer": 1,
            "hint": "The -ing form of 'have' is 'having'."
        },
        {
            "question": "She ( study ) history. \u2192 ( ? )",
            "options": [
                "was studyed",
                "were studying",
                "was studying",
                "was study"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + studying"
        },
        {
            "question": "She was cooking. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Was she cooking?",
                "Was she cooking.",
                "Did she cooking?",
                "Was she cook?"
            ],
            "answer": 0,
            "hint": "Answer: Was she cooking?"
        },
        {
            "question": "dance \u2192 ( ? )",
            "options": [
                "danceing",
                "dancing",
                "danceed",
                "dances"
            ],
            "answer": 1,
            "hint": "The -ing form of 'dance' is 'dancing'."
        },
        {
            "question": "We ( study ) together. \u2192 ( ? )",
            "options": [
                "were studying",
                "were studyed",
                "were study",
                "was studying"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + studying"
        },
        {
            "question": "They were running. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Were they running?",
                "Were they running.",
                "Did they running?",
                "Were they runn?"
            ],
            "answer": 0,
            "hint": "Answer: Were they running?"
        },
        {
            "question": "practice \u2192 ( ? )",
            "options": [
                "practiceing",
                "practiceed",
                "practicing",
                "practices"
            ],
            "answer": 2,
            "hint": "The -ing form of 'practice' is 'practicing'."
        },
        {
            "question": "They ( study ) Japanese. \u2192 ( ? )",
            "options": [
                "were study",
                "were studyed",
                "were studying",
                "was studying"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + studying"
        },
        {
            "question": "Ken was reading. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Was ken reading?",
                "Was ken reading.",
                "Did ken reading?",
                "Was ken read?"
            ],
            "answer": 0,
            "hint": "Answer: Was ken reading?"
        },
        {
            "question": "eat \u2192 ( ? )",
            "options": [
                "eats",
                "eated",
                "eating",
                "eateing"
            ],
            "answer": 2,
            "hint": "The -ing form of 'eat' is 'eating'."
        },
        {
            "question": "I ( cook ) dinner. \u2192 ( ? )",
            "options": [
                "was cooked",
                "were cooking",
                "was cook",
                "was cooking"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + cooking"
        },
        {
            "question": "It was raining. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Was it raining?",
                "Was it raining.",
                "Did it raining?",
                "Was it rain?"
            ],
            "answer": 0,
            "hint": "Answer: Was it raining?"
        },
        {
            "question": "drink \u2192 ( ? )",
            "options": [
                "drinks",
                "drinking",
                "drinked",
                "drinkeing"
            ],
            "answer": 1,
            "hint": "The -ing form of 'drink' is 'drinking'."
        },
        {
            "question": "You ( cook ) lunch. \u2192 ( ? )",
            "options": [
                "were cooking",
                "was cooking",
                "were cooked",
                "were cook"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + cooking"
        },
        {
            "question": "You were listening. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Were you listening?",
                "Were you listening.",
                "Did you listening?",
                "Were you listen?"
            ],
            "answer": 0,
            "hint": "Answer: Were you listening?"
        },
        {
            "question": "go \u2192 ( ? )",
            "options": [
                "goed",
                "going",
                "gos",
                "goeing"
            ],
            "answer": 1,
            "hint": "The -ing form of 'go' is 'going'."
        },
        {
            "question": "He ( cook ) breakfast. \u2192 ( ? )",
            "options": [
                "were cooking",
                "was cooked",
                "was cooking",
                "was cook"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + cooking"
        },
        {
            "question": "Tom was watching. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Was tom watching?",
                "Was tom watching.",
                "Did tom watching?",
                "Was tom watch?"
            ],
            "answer": 0,
            "hint": "Answer: Was tom watching?"
        },
        {
            "question": "do \u2192 ( ? )",
            "options": [
                "doeing",
                "dos",
                "doing",
                "doed"
            ],
            "answer": 2,
            "hint": "The -ing form of 'do' is 'doing'."
        },
        {
            "question": "She ( make ) cake. \u2192 ( ? )",
            "options": [
                "were making",
                "was makeed",
                "was make",
                "was making"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + making"
        },
        {
            "question": "Your mother was working. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Was mother working?",
                "Was mother working.",
                "Did mother working?",
                "Was mother work?"
            ],
            "answer": 0,
            "hint": "Answer: Was mother working?"
        },
        {
            "question": "sleep \u2192 ( ? )",
            "options": [
                "sleeped",
                "sleeps",
                "sleepeing",
                "sleeping"
            ],
            "answer": 3,
            "hint": "The -ing form of 'sleep' is 'sleeping'."
        },
        {
            "question": "We ( make ) cookies. \u2192 ( ? )",
            "options": [
                "were making",
                "were make",
                "was making",
                "were makeed"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + making"
        },
        {
            "question": "The students were singing. (\u7591\u554f) \u2192 ( ? )",
            "options": [
                "Were students singing?",
                "Were students singing.",
                "Did students singing?",
                "Were students s?"
            ],
            "answer": 0,
            "hint": "Answer: Were students singing?"
        },
        {
            "question": "listen \u2192 ( ? )",
            "options": [
                "listened",
                "listens",
                "listeneing",
                "listening"
            ],
            "answer": 3,
            "hint": "The -ing form of 'listen' is 'listening'."
        },
        {
            "question": "They ( make ) plan. \u2192 ( ? )",
            "options": [
                "was making",
                "were makeed",
                "were make",
                "were making"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + making"
        },
        {
            "question": "Were you studying? - Yes, I ( ? ).",
            "options": [
                "was",
                "wasn't",
                "were",
                "weren't"
            ],
            "answer": 0,
            "hint": "Answer: was"
        },
        {
            "question": "look \u2192 ( ? )",
            "options": [
                "looking",
                "lookeing",
                "looked",
                "looks"
            ],
            "answer": 0,
            "hint": "The -ing form of 'look' is 'looking'."
        },
        {
            "question": "I ( use ) computer. \u2192 ( ? )",
            "options": [
                "was using",
                "was useed",
                "was use",
                "were using"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + using"
        },
        {
            "question": "Were you studying? - No, I ( ? ).",
            "options": [
                "was",
                "wasn't",
                "were",
                "weren't"
            ],
            "answer": 1,
            "hint": "Answer: wasn't"
        },
        {
            "question": "walk \u2192 ( ? )",
            "options": [
                "walkeing",
                "walking",
                "walks",
                "walked"
            ],
            "answer": 1,
            "hint": "The -ing form of 'walk' is 'walking'."
        },
        {
            "question": "You ( use ) pen. \u2192 ( ? )",
            "options": [
                "were using",
                "were useed",
                "were use",
                "was using"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + using"
        },
        {
            "question": "Was he sleeping? - Yes, he ( ? ).",
            "options": [
                "was",
                "wasn't",
                "were",
                "weren't"
            ],
            "answer": 0,
            "hint": "Answer: was"
        },
        {
            "question": "talk \u2192 ( ? )",
            "options": [
                "talkeing",
                "talked",
                "talks",
                "talking"
            ],
            "answer": 3,
            "hint": "The -ing form of 'talk' is 'talking'."
        },
        {
            "question": "He ( use ) camera. \u2192 ( ? )",
            "options": [
                "was using",
                "were using",
                "was use",
                "was useed"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + using"
        },
        {
            "question": "Was he sleeping? - No, he ( ? ).",
            "options": [
                "was",
                "wasn't",
                "were",
                "weren't"
            ],
            "answer": 1,
            "hint": "Answer: wasn't"
        },
        {
            "question": "speak \u2192 ( ? )",
            "options": [
                "speaks",
                "speakeing",
                "speaked",
                "speaking"
            ],
            "answer": 3,
            "hint": "The -ing form of 'speak' is 'speaking'."
        },
        {
            "question": "She ( take ) pictures. \u2192 ( ? )",
            "options": [
                "was taking",
                "were taking",
                "was take",
                "was takeed"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + taking"
        },
        {
            "question": "Were they running? - Yes, they ( ? ).",
            "options": [
                "was",
                "wasn't",
                "were",
                "weren't"
            ],
            "answer": 2,
            "hint": "Answer: were"
        },
        {
            "question": "sing \u2192 ( ? )",
            "options": [
                "sings",
                "singed",
                "singeing",
                "singing"
            ],
            "answer": 3,
            "hint": "The -ing form of 'sing' is 'singing'."
        },
        {
            "question": "We ( take ) bus. \u2192 ( ? )",
            "options": [
                "were takeed",
                "were take",
                "was taking",
                "were taking"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + taking"
        },
        {
            "question": "Were they running? - No, they ( ? ).",
            "options": [
                "was",
                "wasn't",
                "were",
                "weren't"
            ],
            "answer": 3,
            "hint": "Answer: weren't"
        },
        {
            "question": "wait \u2192 ( ? )",
            "options": [
                "waiteing",
                "waiting",
                "waited",
                "waits"
            ],
            "answer": 1,
            "hint": "The -ing form of 'wait' is 'waiting'."
        },
        {
            "question": "They ( take ) walk. \u2192 ( ? )",
            "options": [
                "were take",
                "were taking",
                "was taking",
                "were takeed"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + taking"
        },
        {
            "question": "\u79c1\u306f\u30c6\u30cb\u30b9\u3092\u3057\u3066\u3044\u307e\u3057\u305f\u3002\u2192 I ( ? ) ( ? ) tennis.",
            "options": [
                "is playing",
                "played",
                "was played",
                "was playing"
            ],
            "answer": 3,
            "hint": "Answer: was playing"
        },
        {
            "question": "wash \u2192 ( ? )",
            "options": [
                "washeing",
                "washs",
                "washed",
                "washing"
            ],
            "answer": 3,
            "hint": "The -ing form of 'wash' is 'washing'."
        },
        {
            "question": "I ( run ) in park. \u2192 ( ? )",
            "options": [
                "was running",
                "were running",
                "was run",
                "was runed"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + running"
        },
        {
            "question": "\u3042\u306a\u305f\u306f\u672c\u3092\u8aad\u3093\u3067\u3044\u307e\u3057\u305f\u3002\u2192 You ( ? ) ( ? ) book.",
            "options": [
                "were readed",
                "were reading",
                "played",
                "were reading"
            ],
            "answer": 1,
            "hint": "Answer: were reading"
        },
        {
            "question": "clean \u2192 ( ? )",
            "options": [
                "cleans",
                "cleaned",
                "cleaneing",
                "cleaning"
            ],
            "answer": 3,
            "hint": "The -ing form of 'clean' is 'cleaning'."
        },
        {
            "question": "You ( run ) fast. \u2192 ( ? )",
            "options": [
                "were running",
                "were run",
                "were runed",
                "was running"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + running"
        },
        {
            "question": "help \u2192 ( ? )",
            "options": [
                "helps",
                "helpeing",
                "helped",
                "helping"
            ],
            "answer": 3,
            "hint": "The -ing form of 'help' is 'helping'."
        },
        {
            "question": "He ( run ) to school. \u2192 ( ? )",
            "options": [
                "were running",
                "was running",
                "was run",
                "was runed"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + running"
        },
        {
            "question": "open \u2192 ( ? )",
            "options": [
                "opens",
                "opening",
                "opened",
                "openeing"
            ],
            "answer": 1,
            "hint": "The -ing form of 'open' is 'opening'."
        },
        {
            "question": "She ( swim ) in pool. \u2192 ( ? )",
            "options": [
                "was swim",
                "were swimming",
                "was swimed",
                "was swimming"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + swimming"
        },
        {
            "question": "close \u2192 ( ? )",
            "options": [
                "closeing",
                "closes",
                "closeed",
                "closing"
            ],
            "answer": 3,
            "hint": "The -ing form of 'close' is 'closing'."
        },
        {
            "question": "We ( swim ) in sea. \u2192 ( ? )",
            "options": [
                "were swim",
                "were swimming",
                "was swimming",
                "were swimed"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + swimming"
        },
        {
            "question": "smile \u2192 ( ? )",
            "options": [
                "smileed",
                "smileing",
                "smiles",
                "smiling"
            ],
            "answer": 3,
            "hint": "The -ing form of 'smile' is 'smiling'."
        },
        {
            "question": "They ( swim ) well. \u2192 ( ? )",
            "options": [
                "was swimming",
                "were swim",
                "were swimed",
                "were swimming"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + swimming"
        },
        {
            "question": "\u30b1\u30f3\u306f\u30c6\u30ec\u30d3\u3092\u898b\u3066\u3044\u307e\u3057\u305f\u3002\u2192 Ken ( ? ) ( ? ) TV.",
            "options": [
                "is watching",
                "played",
                "was watching",
                "was watched"
            ],
            "answer": 2,
            "hint": "Answer: was watching"
        },
        {
            "question": "shine \u2192 ( ? )",
            "options": [
                "shines",
                "shineing",
                "shineed",
                "shining"
            ],
            "answer": 3,
            "hint": "The -ing form of 'shine' is 'shining'."
        },
        {
            "question": "I ( read ) book. \u2192 ( ? )",
            "options": [
                "was reading",
                "was readed",
                "was read",
                "were reading"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + reading"
        },
        {
            "question": "drive \u2192 ( ? )",
            "options": [
                "drives",
                "driveing",
                "driveed",
                "driving"
            ],
            "answer": 3,
            "hint": "The -ing form of 'drive' is 'driving'."
        },
        {
            "question": "You ( read ) magazine. \u2192 ( ? )",
            "options": [
                "were read",
                "was reading",
                "were readed",
                "were reading"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + reading"
        },
        {
            "question": "live \u2192 ( ? )",
            "options": [
                "liveing",
                "living",
                "lives",
                "liveed"
            ],
            "answer": 1,
            "hint": "The -ing form of 'live' is 'living'."
        },
        {
            "question": "He ( write ) letter. \u2192 ( ? )",
            "options": [
                "were writing",
                "was write",
                "was writing",
                "was writeed"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + writing"
        },
        {
            "question": "give \u2192 ( ? )",
            "options": [
                "giving",
                "giveing",
                "gives",
                "giveed"
            ],
            "answer": 0,
            "hint": "The -ing form of 'give' is 'giving'."
        },
        {
            "question": "She ( write ) email. \u2192 ( ? )",
            "options": [
                "was writeed",
                "were writing",
                "was write",
                "was writing"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + writing"
        },
        {
            "question": "\u79c1\u306f\u304a\u98a8\u5442\u306b\u5165\u3063\u3066\u3044\u307e\u3057\u305f\u3002\u2192 I ( ? ) ( ? ) bath.",
            "options": [
                "was taking",
                "is taking",
                "was taked",
                "played"
            ],
            "answer": 0,
            "hint": "Answer: was taking"
        },
        {
            "question": "move \u2192 ( ? )",
            "options": [
                "moves",
                "moveed",
                "moving",
                "moveing"
            ],
            "answer": 2,
            "hint": "The -ing form of 'move' is 'moving'."
        },
        {
            "question": "We ( listen ) music. \u2192 ( ? )",
            "options": [
                "were listened",
                "was listening",
                "were listen",
                "were listening"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + listening"
        },
        {
            "question": "change \u2192 ( ? )",
            "options": [
                "changeed",
                "changing",
                "changeing",
                "changes"
            ],
            "answer": 1,
            "hint": "The -ing form of 'change' is 'changing'."
        },
        {
            "question": "They ( listen ) radio. \u2192 ( ? )",
            "options": [
                "were listening",
                "was listening",
                "were listened",
                "were listen"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + listening"
        },
        {
            "question": "die \u2192 ( ? )",
            "options": [
                "dying",
                "dies",
                "dieed",
                "dieing"
            ],
            "answer": 0,
            "hint": "The -ing form of 'die' is 'dying'."
        },
        {
            "question": "I ( eat ) lunch. \u2192 ( ? )",
            "options": [
                "was eated",
                "were eating",
                "was eat",
                "was eating"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + eating"
        },
        {
            "question": "lie \u2192 ( ? )",
            "options": [
                "lies",
                "lieed",
                "lying",
                "lieing"
            ],
            "answer": 2,
            "hint": "The -ing form of 'lie' is 'lying'."
        },
        {
            "question": "You ( eat ) dinner. \u2192 ( ? )",
            "options": [
                "were eat",
                "were eating",
                "was eating",
                "were eated"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + eating"
        },
        {
            "question": "ski \u2192 ( ? )",
            "options": [
                "skieing",
                "skiing",
                "skied",
                "skis"
            ],
            "answer": 1,
            "hint": "The -ing form of 'ski' is 'skiing'."
        },
        {
            "question": "He ( eat ) apple. \u2192 ( ? )",
            "options": [
                "was eating",
                "were eating",
                "was eat",
                "was eated"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + eating"
        },
        {
            "question": "\u79c1\u306f\u5bbf\u984c\u3092\u3057\u3066\u3044\u307e\u3057\u305f\u3002\u2192 I ( ? ) ( ? ) homework.",
            "options": [
                "was doing",
                "played",
                "was doed",
                "is doing"
            ],
            "answer": 0,
            "hint": "Answer: was doing"
        },
        {
            "question": "see \u2192 ( ? )",
            "options": [
                "dummy",
                "seeed",
                "seeing",
                "sees"
            ],
            "answer": 2,
            "hint": "The -ing form of 'see' is 'seeing'."
        },
        {
            "question": "She ( drink ) tea. \u2192 ( ? )",
            "options": [
                "was drinked",
                "was drinking",
                "was drink",
                "were drinking"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + drinking"
        },
        {
            "question": "\u79c1\u306f\u30bd\u30d0\u3092\u4f5c\u3063\u3066\u3044\u307e\u3057\u305f\u3002\u2192 I ( ? ) ( ? ) soba.",
            "options": [
                "was maked",
                "was making",
                "played",
                "is making"
            ],
            "answer": 1,
            "hint": "Answer: was making"
        },
        {
            "question": "visit \u2192 ( ? )",
            "options": [
                "visiting",
                "visited",
                "visiteing",
                "visits"
            ],
            "answer": 0,
            "hint": "The -ing form of 'visit' is 'visiting'."
        },
        {
            "question": "We ( drink ) coffee. \u2192 ( ? )",
            "options": [
                "were drink",
                "were drinked",
                "were drinking",
                "was drinking"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + drinking"
        },
        {
            "question": "enjoy \u2192 ( ? )",
            "options": [
                "enjoying",
                "enjoys",
                "enjoyed",
                "enjoyeing"
            ],
            "answer": 0,
            "hint": "The -ing form of 'enjoy' is 'enjoying'."
        },
        {
            "question": "They ( drink ) milk. \u2192 ( ? )",
            "options": [
                "were drink",
                "was drinking",
                "were drinking",
                "were drinked"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + drinking"
        },
        {
            "question": "\u79c1\u306f\u5353\u7403\u3092\u3057\u3066\u3044\u307e\u3057\u305f\u3002\u2192 I ( ? ) ( ? ) table tennis.",
            "options": [
                "was playing",
                "is playing",
                "played",
                "was played"
            ],
            "answer": 0,
            "hint": "Answer: was playing"
        },
        {
            "question": "I ( ? ) playing.",
            "options": [
                "were",
                "are",
                "was",
                "is"
            ],
            "answer": 2,
            "hint": "The past be verb for 'I' is 'was'."
        },
        {
            "question": "I ( sleep ) in bed. \u2192 ( ? )",
            "options": [
                "was sleeped",
                "was sleeping",
                "were sleeping",
                "was sleep"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + sleeping"
        },
        {
            "question": "You ( ? ) playing.",
            "options": [
                "was",
                "are",
                "is",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'You' is 'were'."
        },
        {
            "question": "You ( sleep ) on sofa. \u2192 ( ? )",
            "options": [
                "was sleeping",
                "were sleep",
                "were sleeped",
                "were sleeping"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + sleeping"
        },
        {
            "question": "He ( ? ) playing.",
            "options": [
                "are",
                "was",
                "is",
                "were"
            ],
            "answer": 1,
            "hint": "The past be verb for 'He' is 'was'."
        },
        {
            "question": "Baby ( sleep ) well. \u2192 ( ? )",
            "options": [
                "was sleeping",
                "were sleeped",
                "were sleeping",
                "were sleep"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + sleeping"
        },
        {
            "question": "She ( ? ) playing.",
            "options": [
                "was",
                "is",
                "are",
                "were"
            ],
            "answer": 0,
            "hint": "The past be verb for 'She' is 'was'."
        },
        {
            "question": "Cat ( sleep ) under table. \u2192 ( ? )",
            "options": [
                "were sleep",
                "were sleeped",
                "was sleeping",
                "were sleeping"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + sleeping"
        },
        {
            "question": "It ( ? ) playing.",
            "options": [
                "are",
                "were",
                "is",
                "was"
            ],
            "answer": 3,
            "hint": "The past be verb for 'It' is 'was'."
        },
        {
            "question": "I ( wait ) for you. \u2192 ( ? )",
            "options": [
                "was waiting",
                "was waited",
                "were waiting",
                "was wait"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + waiting"
        },
        {
            "question": "We ( ? ) playing.",
            "options": [
                "was",
                "is",
                "were",
                "are"
            ],
            "answer": 2,
            "hint": "The past be verb for 'We' is 'were'."
        },
        {
            "question": "You ( wait ) for bus. \u2192 ( ? )",
            "options": [
                "were waiting",
                "was waiting",
                "were wait",
                "were waited"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + waiting"
        },
        {
            "question": "They ( ? ) playing.",
            "options": [
                "was",
                "were",
                "are",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'They' is 'were'."
        },
        {
            "question": "He ( talk ) with Ken. \u2192 ( ? )",
            "options": [
                "was talk",
                "were talking",
                "was talked",
                "was talking"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + talking"
        },
        {
            "question": "Ken ( ? ) playing.",
            "options": [
                "were",
                "are",
                "was",
                "is"
            ],
            "answer": 2,
            "hint": "The past be verb for 'Ken' is 'was'."
        },
        {
            "question": "She ( talk ) on phone. \u2192 ( ? )",
            "options": [
                "were talking",
                "was talked",
                "was talk",
                "was talking"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + talking"
        },
        {
            "question": "Emi ( ? ) playing.",
            "options": [
                "is",
                "were",
                "are",
                "was"
            ],
            "answer": 3,
            "hint": "The past be verb for 'Emi' is 'was'."
        },
        {
            "question": "We ( talk ) about trip. \u2192 ( ? )",
            "options": [
                "were talked",
                "were talk",
                "were talking",
                "was talking"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + talking"
        },
        {
            "question": "My father ( ? ) playing.",
            "options": [
                "were",
                "was",
                "is",
                "are"
            ],
            "answer": 1,
            "hint": "The past be verb for 'My father' is 'was'."
        },
        {
            "question": "They ( talk ) loudly. \u2192 ( ? )",
            "options": [
                "was talking",
                "were talked",
                "were talking",
                "were talk"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + talking"
        },
        {
            "question": "Parents ( ? ) playing.",
            "options": [
                "are",
                "is",
                "were",
                "was"
            ],
            "answer": 2,
            "hint": "The past be verb for 'Parents' is 'were'."
        },
        {
            "question": "I ( clean ) room. \u2192 ( ? )",
            "options": [
                "was cleaned",
                "was cleaning",
                "was clean",
                "were cleaning"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + cleaning"
        },
        {
            "question": "The dog ( ? ) running.",
            "options": [
                "was",
                "is",
                "are",
                "were"
            ],
            "answer": 0,
            "hint": "The past be verb for 'The dog' is 'was'."
        },
        {
            "question": "You ( clean ) house. \u2192 ( ? )",
            "options": [
                "was cleaning",
                "were cleaning",
                "were cleaned",
                "were clean"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + cleaning"
        },
        {
            "question": "The dogs ( ? ) running.",
            "options": [
                "are",
                "were",
                "is",
                "was"
            ],
            "answer": 1,
            "hint": "The past be verb for 'The dogs' is 'were'."
        },
        {
            "question": "He ( wash ) car. \u2192 ( ? )",
            "options": [
                "was washing",
                "was washed",
                "was wash",
                "were washing"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + washing"
        },
        {
            "question": "The cat ( ? ) sleeping.",
            "options": [
                "is",
                "were",
                "was",
                "are"
            ],
            "answer": 2,
            "hint": "The past be verb for 'The cat' is 'was'."
        },
        {
            "question": "She ( wash ) hands. \u2192 ( ? )",
            "options": [
                "was wash",
                "was washed",
                "was washing",
                "were washing"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + washing"
        },
        {
            "question": "The cats ( ? ) sleeping.",
            "options": [
                "are",
                "was",
                "were",
                "is"
            ],
            "answer": 2,
            "hint": "The past be verb for 'The cats' is 'were'."
        },
        {
            "question": "We ( wash ) dishes. \u2192 ( ? )",
            "options": [
                "were washing",
                "were wash",
                "were washed",
                "was washing"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + washing"
        },
        {
            "question": "The bird ( ? ) flying.",
            "options": [
                "was",
                "are",
                "were",
                "is"
            ],
            "answer": 0,
            "hint": "The past be verb for 'The bird' is 'was'."
        },
        {
            "question": "It ( rain ). \u2192 ( ? )",
            "options": [
                "was rain",
                "was rained",
                "were raining",
                "was raining"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + raining"
        },
        {
            "question": "The birds ( ? ) flying.",
            "options": [
                "are",
                "were",
                "is",
                "was"
            ],
            "answer": 1,
            "hint": "The past be verb for 'The birds' is 'were'."
        },
        {
            "question": "It ( snow ). \u2192 ( ? )",
            "options": [
                "was snowed",
                "was snow",
                "was snowing",
                "were snowing"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + snowing"
        },
        {
            "question": "The car ( ? ) moving.",
            "options": [
                "was",
                "were",
                "is",
                "are"
            ],
            "answer": 0,
            "hint": "The past be verb for 'The car' is 'was'."
        },
        {
            "question": "Wind ( blow ). \u2192 ( ? )",
            "options": [
                "were blowed",
                "was blowing",
                "were blowing",
                "were blow"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + blowing"
        },
        {
            "question": "The cars ( ? ) moving.",
            "options": [
                "are",
                "is",
                "was",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'The cars' is 'were'."
        },
        {
            "question": "Sun ( shine ). \u2192 ( ? )",
            "options": [
                "was shining",
                "were shining",
                "were shineed",
                "were shine"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + shining"
        },
        {
            "question": "People ( ? ) waiting.",
            "options": [
                "are",
                "is",
                "was",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'People' is 'were'."
        },
        {
            "question": "Stars ( shine ). \u2192 ( ? )",
            "options": [
                "were shine",
                "were shining",
                "were shineed",
                "was shining"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + shining"
        },
        {
            "question": "Everyone ( ? ) watching.",
            "options": [
                "is",
                "was",
                "were",
                "are"
            ],
            "answer": 2,
            "hint": "The past be verb for 'Everyone' is 'were'."
        },
        {
            "question": "I ( practice ) piano. \u2192 ( ? )",
            "options": [
                "was practice",
                "was practicing",
                "were practicing",
                "was practiceed"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + practicing"
        },
        {
            "question": "Someone ( ? ) calling.",
            "options": [
                "was",
                "are",
                "is",
                "were"
            ],
            "answer": 0,
            "hint": "The past be verb for 'Someone' is 'was'."
        },
        {
            "question": "You ( practice ) judo. \u2192 ( ? )",
            "options": [
                "was practicing",
                "were practice",
                "were practiceed",
                "were practicing"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + practicing"
        },
        {
            "question": "Who ( ? ) talking?",
            "options": [
                "was",
                "are",
                "were",
                "is"
            ],
            "answer": 0,
            "hint": "The past be verb for 'Who' is 'was'."
        },
        {
            "question": "He ( sing ) song. \u2192 ( ? )",
            "options": [
                "was singing",
                "was sing",
                "was singed",
                "were singing"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + singing"
        },
        {
            "question": "What ( ? ) happening?",
            "options": [
                "are",
                "was",
                "were",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'What' is 'was'."
        },
        {
            "question": "She ( dance ) well. \u2192 ( ? )",
            "options": [
                "were dancing",
                "was danceed",
                "was dancing",
                "was dance"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + dancing"
        },
        {
            "question": "Ken and I ( ? ) studying.",
            "options": [
                "were",
                "is",
                "are",
                "was"
            ],
            "answer": 0,
            "hint": "The past be verb for 'Ken and I' is 'were'."
        },
        {
            "question": "We ( enjoy ) music. \u2192 ( ? )",
            "options": [
                "were enjoyed",
                "were enjoy",
                "was enjoying",
                "were enjoying"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + enjoying"
        },
        {
            "question": "You and I ( ? ) talking.",
            "options": [
                "was",
                "is",
                "are",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'You and I' is 'were'."
        },
        {
            "question": "They ( enjoy ) party. \u2192 ( ? )",
            "options": [
                "were enjoying",
                "were enjoyed",
                "were enjoy",
                "was enjoying"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + enjoying"
        },
        {
            "question": "Tom and Jerry ( ? ) fighting.",
            "options": [
                "was",
                "are",
                "were",
                "is"
            ],
            "answer": 2,
            "hint": "The past be verb for 'Tom and Jerry' is 'were'."
        },
        {
            "question": "I ( sit ) on chair. \u2192 ( ? )",
            "options": [
                "was sit",
                "was sited",
                "was sitting",
                "were sitting"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + sitting"
        },
        {
            "question": "My sister ( ? ) crying.",
            "options": [
                "are",
                "was",
                "is",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'My sister' is 'were'."
        },
        {
            "question": "You ( sit ) on floor. \u2192 ( ? )",
            "options": [
                "were sitting",
                "were sited",
                "were sit",
                "was sitting"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + sitting"
        },
        {
            "question": "My brothers ( ? ) laughing.",
            "options": [
                "were",
                "are",
                "is",
                "was"
            ],
            "answer": 0,
            "hint": "The past be verb for 'My brothers' is 'were'."
        },
        {
            "question": "He ( stand ) by door. \u2192 ( ? )",
            "options": [
                "was stand",
                "was standed",
                "were standing",
                "was standing"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + standing"
        },
        {
            "question": "The student ( ? ) reading.",
            "options": [
                "were",
                "is",
                "was",
                "are"
            ],
            "answer": 2,
            "hint": "The past be verb for 'The student' is 'was'."
        },
        {
            "question": "She ( stand ) there. \u2192 ( ? )",
            "options": [
                "was standed",
                "was stand",
                "were standing",
                "was standing"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + standing"
        },
        {
            "question": "The students ( ? ) reading.",
            "options": [
                "is",
                "were",
                "was",
                "are"
            ],
            "answer": 1,
            "hint": "The past be verb for 'The students' is 'were'."
        },
        {
            "question": "I ( help ) mother. \u2192 ( ? )",
            "options": [
                "was helping",
                "were helping",
                "was helped",
                "was help"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + helping"
        },
        {
            "question": "Mr. Tanaka ( ? ) teaching.",
            "options": [
                "was",
                "are",
                "were",
                "is"
            ],
            "answer": 0,
            "hint": "The past be verb for 'Mr. Tanaka' is 'was'."
        },
        {
            "question": "You ( help ) me. \u2192 ( ? )",
            "options": [
                "was helping",
                "were helping",
                "were help",
                "were helped"
            ],
            "answer": 1,
            "hint": "Past Progressive: were + helping"
        },
        {
            "question": "Ms. Sato ( ? ) cooking.",
            "options": [
                "are",
                "was",
                "were",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'Ms. Sato' is 'was'."
        },
        {
            "question": "We ( do ) homework. \u2192 ( ? )",
            "options": [
                "were do",
                "were doed",
                "were doing",
                "was doing"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + doing"
        },
        {
            "question": "I ( ? )",
            "options": [
                "was",
                "are",
                "is",
                "were"
            ],
            "answer": 0,
            "hint": "The past be verb for 'I' is 'was'."
        },
        {
            "question": "They ( do ) cleaning. \u2192 ( ? )",
            "options": [
                "was doing",
                "were doed",
                "were doing",
                "were do"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + doing"
        },
        {
            "question": "You ( ? )",
            "options": [
                "are",
                "were",
                "was",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'You' is 'were'."
        },
        {
            "question": "Bus ( come ). \u2192 ( ? )",
            "options": [
                "were comeed",
                "was coming",
                "were coming",
                "were come"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + coming"
        },
        {
            "question": "He ( ? )",
            "options": [
                "was",
                "were",
                "is",
                "are"
            ],
            "answer": 0,
            "hint": "The past be verb for 'He' is 'was'."
        },
        {
            "question": "Train ( stop ). \u2192 ( ? )",
            "options": [
                "were stopping",
                "were stop",
                "were stoped",
                "was stopping"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + stopping"
        },
        {
            "question": "She ( ? )",
            "options": [
                "were",
                "are",
                "is",
                "was"
            ],
            "answer": 3,
            "hint": "The past be verb for 'She' is 'was'."
        },
        {
            "question": "I ( look ) at sky. \u2192 ( ? )",
            "options": [
                "was looking",
                "were looking",
                "was looked",
                "was look"
            ],
            "answer": 0,
            "hint": "Past Progressive: was + looking"
        },
        {
            "question": "It ( ? )",
            "options": [
                "were",
                "was",
                "are",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'It' is 'was'."
        },
        {
            "question": "You ( look ) for key. \u2192 ( ? )",
            "options": [
                "were look",
                "were looked",
                "were looking",
                "was looking"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + looking"
        },
        {
            "question": "We ( ? )",
            "options": [
                "were",
                "are",
                "was",
                "is"
            ],
            "answer": 0,
            "hint": "The past be verb for 'We' is 'were'."
        },
        {
            "question": "He ( shop ). \u2192 ( ? )",
            "options": [
                "was shop",
                "was shoped",
                "were shopping",
                "was shopping"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + shopping"
        },
        {
            "question": "They ( ? )",
            "options": [
                "is",
                "was",
                "were",
                "are"
            ],
            "answer": 2,
            "hint": "The past be verb for 'They' is 'were'."
        },
        {
            "question": "She ( ski ). \u2192 ( ? )",
            "options": [
                "was skied",
                "was skiing",
                "was ski",
                "were skiing"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + skiing"
        },
        {
            "question": "Ken ( ? )",
            "options": [
                "was",
                "is",
                "were",
                "are"
            ],
            "answer": 0,
            "hint": "The past be verb for 'Ken' is 'was'."
        },
        {
            "question": "I ( walk ) dog. \u2192 ( ? )",
            "options": [
                "was walked",
                "was walking",
                "was walk",
                "were walking"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + walking"
        },
        {
            "question": "The boy ( ? )",
            "options": [
                "are",
                "was",
                "is",
                "were"
            ],
            "answer": 1,
            "hint": "The past be verb for 'The boy' is 'was'."
        },
        {
            "question": "You ( cut ) paper. \u2192 ( ? )",
            "options": [
                "was cutting",
                "were cuted",
                "were cutting",
                "were cut"
            ],
            "answer": 2,
            "hint": "Past Progressive: were + cutting"
        },
        {
            "question": "The boys ( ? )",
            "options": [
                "are",
                "is",
                "was",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'The boys' is 'were'."
        },
        {
            "question": "He ( put ) on desk. \u2192 ( ? )",
            "options": [
                "was puted",
                "was putting",
                "was put",
                "were putting"
            ],
            "answer": 1,
            "hint": "Past Progressive: was + putting"
        },
        {
            "question": "The girl ( ? )",
            "options": [
                "is",
                "are",
                "were",
                "was"
            ],
            "answer": 3,
            "hint": "The past be verb for 'The girl' is 'was'."
        },
        {
            "question": "She ( open ) box. \u2192 ( ? )",
            "options": [
                "was opened",
                "was open",
                "was opening",
                "were opening"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + opening"
        },
        {
            "question": "The girls ( ? )",
            "options": [
                "was",
                "were",
                "are",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'The girls' is 'were'."
        },
        {
            "question": "We ( close ) store. \u2192 ( ? )",
            "options": [
                "were closeed",
                "were close",
                "was closing",
                "were closing"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + closing"
        },
        {
            "question": "This man ( ? )",
            "options": [
                "are",
                "were",
                "was",
                "is"
            ],
            "answer": 2,
            "hint": "The past be verb for 'This man' is 'was'."
        },
        {
            "question": "They ( visit ) Kyoto. \u2192 ( ? )",
            "options": [
                "were visiting",
                "were visit",
                "were visited",
                "was visiting"
            ],
            "answer": 0,
            "hint": "Past Progressive: were + visiting"
        },
        {
            "question": "These men ( ? )",
            "options": [
                "is",
                "are",
                "was",
                "were"
            ],
            "answer": 3,
            "hint": "The past be verb for 'These men' is 'were'."
        },
        {
            "question": "I ( think ) about you. \u2192 ( ? )",
            "options": [
                "was thinked",
                "were thinking",
                "was think",
                "was thinking"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + thinking"
        },
        {
            "question": "That woman ( ? )",
            "options": [
                "are",
                "was",
                "were",
                "is"
            ],
            "answer": 1,
            "hint": "The past be verb for 'That woman' is 'was'."
        },
        {
            "question": "You ( say ) something. \u2192 ( ? )",
            "options": [
                "were say",
                "was saying",
                "were sayed",
                "were saying"
            ],
            "answer": 3,
            "hint": "Past Progressive: were + saying"
        },
        {
            "question": "Those women ( ? )",
            "options": [
                "was",
                "are",
                "were",
                "is"
            ],
            "answer": 2,
            "hint": "The past be verb for 'Those women' is 'were'."
        },
        {
            "question": "He ( go ) home. \u2192 ( ? )",
            "options": [
                "was go",
                "was goed",
                "was going",
                "were going"
            ],
            "answer": 2,
            "hint": "Past Progressive: was + going"
        },
        {
            "question": "All of us ( ? )",
            "options": [
                "was",
                "is",
                "were",
                "are"
            ],
            "answer": 2,
            "hint": "The past be verb for 'All of us' is 'were'."
        },
        {
            "question": "She ( come ) back. \u2192 ( ? )",
            "options": [
                "was come",
                "was comeed",
                "were coming",
                "was coming"
            ],
            "answer": 3,
            "hint": "Past Progressive: was + coming"
        }
    ]
};



quizData.english_general_verbs_questions = {
    title: "一般動詞の疑問文 & look",
    questions: [
        {
            "question": "You ( ? ) happy.",
            "options": [
                "looks",
                "looked",
                "looking",
                "look"
            ],
            "answer": 3,
            "hint": "Subject 'You' -> look"
        },
        {
            "question": "That bike ( ? ) new.",
            "options": [
                "looked",
                "look",
                "looking",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'That bike' -> looks"
        },
        {
            "question": "\u5f7c\u306f\u5fd9\u3057\u305d\u3046\u3067\u3059\u3002\u2192 He ( ? ).",
            "options": [
                "are busy",
                "looks busy",
                "look busy",
                "is busy"
            ],
            "answer": 1,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "I ( ? ) sad.",
            "options": [
                "looks",
                "looked",
                "looking",
                "look"
            ],
            "answer": 3,
            "hint": "Subject 'I' -> look"
        },
        {
            "question": "Those bikes ( ? ) old.",
            "options": [
                "looked",
                "look",
                "looks",
                "looking"
            ],
            "answer": 1,
            "hint": "Subject 'Those bikes' -> look"
        },
        {
            "question": "\u5f7c\u5973\u306f\u6687\u305d\u3046\u3067\u3059\u3002\u2192 She ( ? ).",
            "options": [
                "are free",
                "look free",
                "is free",
                "looks free"
            ],
            "answer": 3,
            "hint": "Subject 'She' -> looks"
        },
        {
            "question": "He ( ? ) busy.",
            "options": [
                "looks",
                "looked",
                "look",
                "looking"
            ],
            "answer": 0,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "The flower ( ? ) nice.",
            "options": [
                "looks",
                "looked",
                "looking",
                "look"
            ],
            "answer": 0,
            "hint": "Subject 'The flower' -> looks"
        },
        {
            "question": "\u305d\u308c\u306f\u9762\u767d\u305d\u3046\u3067\u3059\u3002\u2192 It ( ? ).",
            "options": [
                "is interesting",
                "are interesting",
                "look interesting",
                "looks interesting"
            ],
            "answer": 3,
            "hint": "Subject 'It' -> looks"
        },
        {
            "question": "She ( ? ) tired.",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 1,
            "hint": "Subject 'She' -> looks"
        },
        {
            "question": "The flowers ( ? ) nice.",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 0,
            "hint": "Subject 'The flowers' -> look"
        },
        {
            "question": "\u30b1\u30f3\u306f\u7720\u305d\u3046\u3067\u3059\u3002\u2192 Ken ( ? ).",
            "options": [
                "looks sleepy",
                "is sleepy",
                "look sleepy",
                "are sleepy"
            ],
            "answer": 0,
            "hint": "Subject 'Ken' -> looks"
        },
        {
            "question": "It ( ? ) good.",
            "options": [
                "looks",
                "look",
                "looked",
                "looking"
            ],
            "answer": 0,
            "hint": "Subject 'It' -> looks"
        },
        {
            "question": "Everyone ( ? ) busy.",
            "options": [
                "looked",
                "look",
                "looks",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'Everyone' -> looks"
        },
        {
            "question": "\u30a8\u30df\u306f\u60b2\u3057\u305d\u3046\u3067\u3059\u3002\u2192 Emi ( ? ).",
            "options": [
                "looks sad",
                "are sad",
                "look sad",
                "is sad"
            ],
            "answer": 0,
            "hint": "Subject 'Emi' -> looks"
        },
        {
            "question": "We ( ? ) sleepy.",
            "options": [
                "looks",
                "looked",
                "look",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'We' -> look"
        },
        {
            "question": "Nobody ( ? ) tired.",
            "options": [
                "looking",
                "looks",
                "look",
                "looked"
            ],
            "answer": 1,
            "hint": "Subject 'Nobody' -> looks"
        },
        {
            "question": "\u305d\u306e\u72ac\u306f\u5927\u304d\u305d\u3046\u3067\u3059\u3002\u2192 The dog ( ? ).",
            "options": [
                "looks big",
                "are big",
                "is big",
                "look big"
            ],
            "answer": 3,
            "hint": "Subject 'dog' -> look"
        },
        {
            "question": "They ( ? ) angry.",
            "options": [
                "look",
                "looked",
                "looking",
                "looks"
            ],
            "answer": 0,
            "hint": "Subject 'They' -> look"
        },
        {
            "question": "My mother ( ? ) young.",
            "options": [
                "looks",
                "look",
                "looking",
                "looked"
            ],
            "answer": 0,
            "hint": "Subject 'My mother' -> looks"
        },
        {
            "question": "\u305d\u306e\u732b\u306f\u5c0f\u3055\u305d\u3046\u3067\u3059\u3002\u2192 The cat ( ? ).",
            "options": [
                "are small",
                "is small",
                "look small",
                "looks small"
            ],
            "answer": 3,
            "hint": "Subject 'cat' -> looks"
        },
        {
            "question": "Ken ( ? ) hungry.",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 1,
            "hint": "Subject 'Ken' -> looks"
        },
        {
            "question": "My parents ( ? ) kind.",
            "options": [
                "looked",
                "look",
                "looking",
                "looks"
            ],
            "answer": 1,
            "hint": "Subject 'My parents' -> look"
        },
        {
            "question": "\u3053\u306e\u672c\u306f\u826f\u3055\u305d\u3046\u3067\u3059\u3002\u2192 This book ( ? ).",
            "options": [
                "are good",
                "look good",
                "looks good",
                "is good"
            ],
            "answer": 2,
            "hint": "Subject 'book' -> looks"
        },
        {
            "question": "Emi ( ? ) thirsty.",
            "options": [
                "looked",
                "look",
                "looks",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'Emi' -> looks"
        },
        {
            "question": "Your face ( ? ) red.",
            "options": [
                "looking",
                "looked",
                "looks",
                "look"
            ],
            "answer": 2,
            "hint": "Subject 'Your face' -> looks"
        },
        {
            "question": "\u3042\u306e\u672c\u306f\u96e3\u3057\u305d\u3046\u3067\u3059\u3002\u2192 That book ( ? ).",
            "options": [
                "look difficult",
                "are difficult",
                "looks difficult",
                "is difficult"
            ],
            "answer": 2,
            "hint": "Subject 'book' -> looks"
        },
        {
            "question": "The dog ( ? ) cute.",
            "options": [
                "looking",
                "looks",
                "look",
                "looked"
            ],
            "answer": 1,
            "hint": "Subject 'The dog' -> looks"
        },
        {
            "question": "His eyes ( ? ) blue.",
            "options": [
                "look",
                "looks",
                "looked",
                "looking"
            ],
            "answer": 0,
            "hint": "Subject 'His eyes' -> look"
        },
        {
            "question": "\u3042\u306a\u305f\u306f\u75b2\u308c\u3066\u898b\u3048\u307e\u3059\u3002\u2192 You ( ? ).",
            "options": [
                "look tired",
                "is tired",
                "looks tired",
                "are tired"
            ],
            "answer": 0,
            "hint": "Subject 'You' -> look"
        },
        {
            "question": "The cats ( ? ) small.",
            "options": [
                "looking",
                "looked",
                "look",
                "looks"
            ],
            "answer": 2,
            "hint": "Subject 'The cats' -> look"
        },
        {
            "question": "The sky ( ? ) dark.",
            "options": [
                "look",
                "looking",
                "looked",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'The sky' -> looks"
        },
        {
            "question": "\u79c1\u306f\u5909\u306b\u898b\u3048\u307e\u3059\u304b\uff1f\u2192 Do I ( ? )?",
            "options": [
                "are strange",
                "look strange",
                "is strange",
                "looks strange"
            ],
            "answer": 1,
            "hint": "Subject 'I' -> look"
        },
        {
            "question": "You ( ? ) fine.",
            "options": [
                "looks",
                "look",
                "looked",
                "looking"
            ],
            "answer": 1,
            "hint": "Subject 'You' -> look"
        },
        {
            "question": "The rain ( ? ) cold.",
            "options": [
                "looked",
                "looks",
                "look",
                "looking"
            ],
            "answer": 1,
            "hint": "Subject 'The rain' -> looks"
        },
        {
            "question": "\u5f7c\u306f\u89aa\u5207\u305d\u3046\u3067\u3059\u3002\u2192 He ( ? ).",
            "options": [
                "is kind",
                "look kind",
                "looks kind",
                "are kind"
            ],
            "answer": 2,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "He ( ? ) sick.",
            "options": [
                "looks",
                "looking",
                "look",
                "looked"
            ],
            "answer": 0,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "The movie ( ? ) fun.",
            "options": [
                "looked",
                "looks",
                "looking",
                "look"
            ],
            "answer": 1,
            "hint": "Subject 'The movie' -> looks"
        },
        {
            "question": "\u5148\u751f\u306f\u53b3\u3057\u305d\u3046\u3067\u3059\u3002\u2192 The teacher ( ? ).",
            "options": [
                "is strict",
                "look strict",
                "looks strict",
                "are strict"
            ],
            "answer": 2,
            "hint": "Subject 'teacher' -> looks"
        },
        {
            "question": "She ( ? ) excited.",
            "options": [
                "looks",
                "look",
                "looking",
                "looked"
            ],
            "answer": 0,
            "hint": "Subject 'She' -> looks"
        },
        {
            "question": "The game ( ? ) long.",
            "options": [
                "look",
                "looked",
                "looks",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'The game' -> looks"
        },
        {
            "question": "\u305d\u306e\u30b1\u30fc\u30ad\u306f\u7518\u305d\u3046\u3067\u3059\u3002\u2192 The cake ( ? ).",
            "options": [
                "is sweet",
                "looks sweet",
                "are sweet",
                "look sweet"
            ],
            "answer": 1,
            "hint": "Subject 'cake' -> looks"
        },
        {
            "question": "It ( ? ) delicious.",
            "options": [
                "looked",
                "looking",
                "looks",
                "look"
            ],
            "answer": 2,
            "hint": "Subject 'It' -> looks"
        },
        {
            "question": "This pen ( ? ) useful.",
            "options": [
                "looked",
                "look",
                "looking",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'This pen' -> looks"
        },
        {
            "question": "\u305d\u306e\u30ab\u30ec\u30fc\u306f\u8f9b\u305d\u3046\u3067\u3059\u3002\u2192 The curry ( ? ).",
            "options": [
                "are spicy",
                "looks spicy",
                "look spicy",
                "is spicy"
            ],
            "answer": 1,
            "hint": "Subject 'curry' -> looks"
        },
        {
            "question": "The teacher ( ? ) scary.",
            "options": [
                "look",
                "looking",
                "looks",
                "looked"
            ],
            "answer": 2,
            "hint": "Subject 'The teacher' -> looks"
        },
        {
            "question": "These pens ( ? ) good.",
            "options": [
                "looks",
                "looking",
                "look",
                "looked"
            ],
            "answer": 2,
            "hint": "Subject 'These pens' -> look"
        },
        {
            "question": "\u5f7c\u306f\u82e5\u304f\u898b\u3048\u307e\u3059\u3002\u2192 He ( ? ).",
            "options": [
                "are young",
                "look young",
                "looks young",
                "is young"
            ],
            "answer": 2,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "My friend ( ? ) kind.",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 1,
            "hint": "Subject 'My friend' -> looks"
        },
        {
            "question": "You ( ? ) ( happy ).",
            "options": [
                "looking",
                "look",
                "looked",
                "looks"
            ],
            "answer": 1,
            "hint": "Subject 'You' -> look"
        },
        {
            "question": "\u5f7c\u5973\u306f\u5e74\u5bc4\u308a\u306b\u898b\u3048\u307e\u3059\u3002\u2192 She ( ? ).",
            "options": [
                "is old",
                "looks old",
                "look old",
                "are old"
            ],
            "answer": 1,
            "hint": "Subject 'She' -> looks"
        },
        {
            "question": "My friends ( ? ) cool.",
            "options": [
                "looking",
                "look",
                "looked",
                "looks"
            ],
            "answer": 1,
            "hint": "Subject 'My friends' -> look"
        },
        {
            "question": "He ( ? ) ( sad ).",
            "options": [
                "look",
                "looking",
                "looks",
                "looked"
            ],
            "answer": 2,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "\u7686\u3001\u697d\u3057\u305d\u3046\u3067\u3059\u3002\u2192 Everyone ( ? ).",
            "options": [
                "are happy",
                "is happy",
                "look happy",
                "looks happy"
            ],
            "answer": 3,
            "hint": "Subject 'Everyone' -> looks"
        },
        {
            "question": "This book ( ? ) hard.",
            "options": [
                "looking",
                "look",
                "looked",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'This book' -> looks"
        },
        {
            "question": "She ( ? ) ( busy ).",
            "options": [
                "looked",
                "looking",
                "looks",
                "look"
            ],
            "answer": 2,
            "hint": "Subject 'She' -> looks"
        },
        {
            "question": "\u3042\u306e\u7537\u306e\u4eba\u306f\u5f37\u305d\u3046\u3067\u3059\u3002\u2192 That man ( ? ).",
            "options": [
                "are strong",
                "looks strong",
                "is strong",
                "look strong"
            ],
            "answer": 1,
            "hint": "Subject 'man' -> looks"
        },
        {
            "question": "That car ( ? ) fast.",
            "options": [
                "looked",
                "looking",
                "looks",
                "look"
            ],
            "answer": 2,
            "hint": "Subject 'That car' -> looks"
        },
        {
            "question": "It ( ? ) ( nice ).",
            "options": [
                "looks",
                "looked",
                "look",
                "looking"
            ],
            "answer": 0,
            "hint": "Subject 'It' -> looks"
        },
        {
            "question": "\u3042\u306e\u5c11\u5e74\u306f\u5f31\u305d\u3046\u3067\u3059\u3002\u2192 That boy ( ? ).",
            "options": [
                "are weak",
                "is weak",
                "look weak",
                "looks weak"
            ],
            "answer": 3,
            "hint": "Subject 'boy' -> looks"
        },
        {
            "question": "You and I ( ? ) busy.",
            "options": [
                "looked",
                "looking",
                "looks",
                "look"
            ],
            "answer": 3,
            "hint": "Subject 'You and I' -> look"
        },
        {
            "question": "They ( ? ) ( tired ).",
            "options": [
                "looking",
                "looked",
                "looks",
                "look"
            ],
            "answer": 3,
            "hint": "Subject 'They' -> look"
        },
        {
            "question": "\u3042\u306a\u305f\u306e\u8eca\u306f\u901f\u305d\u3046\u3067\u3059\u3002\u2192 Your car ( ? ).",
            "options": [
                "is fast",
                "look fast",
                "looks fast",
                "are fast"
            ],
            "answer": 2,
            "hint": "Subject 'car' -> looks"
        },
        {
            "question": "Ken and Tom ( ? ) strong.",
            "options": [
                "look",
                "looked",
                "looking",
                "looks"
            ],
            "answer": 0,
            "hint": "Subject 'Ken and Tom' -> look"
        },
        {
            "question": "We ( ? ) ( fine ).",
            "options": [
                "looks",
                "look",
                "looked",
                "looking"
            ],
            "answer": 1,
            "hint": "Subject 'We' -> look"
        },
        {
            "question": "\u5f7c\u306e\u81ea\u8ee2\u8eca\u306f\u9ad8\u305d\u3046\u3067\u3059\u3002\u2192 His bike ( ? ).",
            "options": [
                "look expensive",
                "are expensive",
                "looks expensive",
                "is expensive"
            ],
            "answer": 2,
            "hint": "Subject 'bike' -> looks"
        },
        {
            "question": "Your father ( ? ) tall.",
            "options": [
                "looks",
                "looking",
                "looked",
                "look"
            ],
            "answer": 0,
            "hint": "Subject 'Your father' -> looks"
        },
        {
            "question": "Ken ( ? ) ( hungry ).",
            "options": [
                "looked",
                "look",
                "looks",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'Ken' -> looks"
        },
        {
            "question": "\u305d\u306e\u30c6\u30b9\u30c8\u306f\u7c21\u5358\u305d\u3046\u3067\u3059\u3002\u2192 The test ( ? ).",
            "options": [
                "are easy",
                "is easy",
                "look easy",
                "looks easy"
            ],
            "answer": 3,
            "hint": "Subject 'test' -> looks"
        },
        {
            "question": "His sister ( ? ) pretty.",
            "options": [
                "look",
                "looked",
                "looks",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'His sister' -> looks"
        },
        {
            "question": "Emi ( ? ) ( sleepy ).",
            "options": [
                "look",
                "looked",
                "looks",
                "looking"
            ],
            "answer": 2,
            "hint": "Subject 'Emi' -> looks"
        },
        {
            "question": "\u8cea\u554f\u306f\u96e3\u3057\u305d\u3046\u3067\u3059\u3002\u2192 The question ( ? ).",
            "options": [
                "is difficult",
                "look difficult",
                "are difficult",
                "looks difficult"
            ],
            "answer": 3,
            "hint": "Subject 'question' -> looks"
        },
        {
            "question": "The house ( ? ) big.",
            "options": [
                "looked",
                "looking",
                "looks",
                "look"
            ],
            "answer": 2,
            "hint": "Subject 'The house' -> looks"
        },
        {
            "question": "The dog ( ? ) ( cute ).",
            "options": [
                "looked",
                "look",
                "looking",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'The dog' -> looks"
        },
        {
            "question": "\u5929\u6c17\u306f\u826f\u3055\u305d\u3046\u3067\u3059\u3002\u2192 The weather ( ? ).",
            "options": [
                "looks nice",
                "is nice",
                "are nice",
                "look nice"
            ],
            "answer": 0,
            "hint": "Subject 'weather' -> looks"
        },
        {
            "question": "The rooms ( ? ) clean.",
            "options": [
                "looking",
                "look",
                "looked",
                "looks"
            ],
            "answer": 1,
            "hint": "Subject 'The rooms' -> look"
        },
        {
            "question": "You ( ? ) ( angry ).",
            "options": [
                "looks",
                "look",
                "looked",
                "looking"
            ],
            "answer": 1,
            "hint": "Subject 'You' -> look"
        },
        {
            "question": "\u305d\u306e\u30cb\u30e5\u30fc\u30b9\u306f\u9762\u767d\u305d\u3046\u3067\u3059\u3002\u2192 The news ( ? ).",
            "options": [
                "is interesting",
                "look interesting",
                "are interesting",
                "looks interesting"
            ],
            "answer": 3,
            "hint": "Subject 'news' -> looks"
        },
        {
            "question": "The question ( ? ) easy.",
            "options": [
                "looking",
                "look",
                "looks",
                "looked"
            ],
            "answer": 2,
            "hint": "Subject 'The question' -> looks"
        },
        {
            "question": "He ( ? ) ( sick ).",
            "options": [
                "looks",
                "looked",
                "look",
                "looking"
            ],
            "answer": 0,
            "hint": "Subject 'He' -> looks"
        },
        {
            "question": "\u305d\u306e\u8a71\u306f\u672c\u5f53\u305d\u3046\u3067\u3059\u3002\u2192 The story ( ? ).",
            "options": [
                "look true",
                "are true",
                "is true",
                "looks true"
            ],
            "answer": 3,
            "hint": "Subject 'story' -> looks"
        },
        {
            "question": "The test ( ? ) difficult.",
            "options": [
                "looked",
                "looks",
                "look",
                "looking"
            ],
            "answer": 1,
            "hint": "Subject 'The test' -> looks"
        },
        {
            "question": "She ( ? ) ( excited ).",
            "options": [
                "looking",
                "looked",
                "look",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'She' -> looks"
        },
        {
            "question": "\u5f7c\u306f\u5143\u6c17\u3058\u3083\u306a\u3055\u305d\u3046\u3067\u3059\u3002\u2192 He doesn't ( ? ).",
            "options": [
                "looked well",
                "looking well",
                "looks well",
                "look well"
            ],
            "answer": 3,
            "hint": "After doesn't, use base form 'look'."
        },
        {
            "question": "This apple ( ? ) sweet.",
            "options": [
                "looks",
                "looked",
                "looking",
                "look"
            ],
            "answer": 0,
            "hint": "Subject 'This apple' -> looks"
        },
        {
            "question": "It ( ? ) ( great ).",
            "options": [
                "looks",
                "looking",
                "looked",
                "look"
            ],
            "answer": 0,
            "hint": "Subject 'It' -> looks"
        },
        {
            "question": "\u5f7c\u5973\u306f\u5e78\u305b\u3058\u3083\u306a\u3055\u305d\u3046\u3067\u3059\u3002\u2192 She doesn't ( ? ).",
            "options": [
                "looks happy",
                "looking happy",
                "look happy",
                "looked happy"
            ],
            "answer": 2,
            "hint": "After doesn't, use base form 'look'."
        },
        {
            "question": "Those apples ( ? ) sour.",
            "options": [
                "looks",
                "looking",
                "looked",
                "look"
            ],
            "answer": 3,
            "hint": "Subject 'Those apples' -> look"
        },
        {
            "question": "That ( ? ) ( fun ).",
            "options": [
                "looking",
                "looked",
                "looks",
                "look"
            ],
            "answer": 2,
            "hint": "Subject 'That' -> looks"
        },
        {
            "question": "\u305d\u308c\u306f\u826f\u304f\u898b\u3048\u307e\u305b\u3093\u3002\u2192 It doesn't ( ? ).",
            "options": [
                "looks good",
                "looked good",
                "looking good",
                "look good"
            ],
            "answer": 3,
            "hint": "After doesn't, use base form 'look'."
        },
        {
            "question": "The man ( ? ) rich.",
            "options": [
                "looks",
                "looked",
                "looking",
                "look"
            ],
            "answer": 0,
            "hint": "Subject 'The man' -> looks"
        },
        {
            "question": "This ( ? ) ( new ).",
            "options": [
                "looks",
                "looking",
                "looked",
                "look"
            ],
            "answer": 0,
            "hint": "Subject 'This' -> looks"
        },
        {
            "question": "\u79c1\u306f\u5909\u306b\u898b\u3048\u307e\u3059\u304b\uff1f\u2192 Do I ( ? ) strange?",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 0,
            "hint": "After do/does, use base form 'look'."
        },
        {
            "question": "The woman ( ? ) famous.",
            "options": [
                "looking",
                "looks",
                "looked",
                "look"
            ],
            "answer": 1,
            "hint": "Subject 'The woman' -> looks"
        },
        {
            "question": "You ( ? ) ( happy ).",
            "options": [
                "looked",
                "looks",
                "looking",
                "look"
            ],
            "answer": 3,
            "hint": "Subject 'You' -> look"
        },
        {
            "question": "\u5f7c\u306f\u3069\u3046\u898b\u3048\u307e\u3059\u304b\uff1f\u2192 How does he ( ? )?",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 0,
            "hint": "After do/does, use base form 'look'."
        },
        {
            "question": "The boy ( ? ) smart.",
            "options": [
                "looking",
                "look",
                "looked",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'The boy' -> looks"
        },
        {
            "question": "\u3042\u306a\u305f\u306f\u5e78\u305b\u305d\u3046\u3067\u3059\u3002\u2192 You ( ? ) ( ? ).",
            "options": [
                "look",
                "looked",
                "looking",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject '\u3042\u306a\u305f\u306f\u5e78\u305b\u305d\u3046\u3067\u3059\u3002\u2192 You' -> looks"
        },
        {
            "question": "\u305d\u308c\u306f\u3069\u3046\u898b\u3048\u307e\u3059\u304b\uff1f\u2192 How does it ( ? )?",
            "options": [
                "look",
                "looks",
                "looking",
                "looked"
            ],
            "answer": 0,
            "hint": "After do/does, use base form 'look'."
        },
        {
            "question": "You played. \u2192 ( ? ) you play?",
            "options": [
                "Do",
                "Did",
                "Does",
                "Was"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( played )? \u2192 ( ? )",
            "options": [
                "plays",
                "playing",
                "play",
                "played"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you play? (Yes) \u2192 Yes, I ( ? ).",
            "options": [
                "did",
                "don't",
                "didn't",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You watched. \u2192 ( ? ) you watch?",
            "options": [
                "Does",
                "Do",
                "Did",
                "Was"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( watched )? \u2192 ( ? )",
            "options": [
                "watched",
                "watchs",
                "watching",
                "watch"
            ],
            "answer": 3,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you play? (No) \u2192 No, I ( ? ).",
            "options": [
                "don't",
                "do",
                "did",
                "didn't"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You cooked. \u2192 ( ? ) you cook?",
            "options": [
                "Was",
                "Did",
                "Does",
                "Do"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( cooked )? \u2192 ( ? )",
            "options": [
                "cooks",
                "cooking",
                "cooked",
                "cook"
            ],
            "answer": 3,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did he go? (Yes) \u2192 Yes, he ( ? ).",
            "options": [
                "didn't",
                "did",
                "don't",
                "do"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You studied. \u2192 ( ? ) you study?",
            "options": [
                "Does",
                "Was",
                "Did",
                "Do"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did they ( studied )? \u2192 ( ? )",
            "options": [
                "studying",
                "study",
                "studied",
                "studys"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did he go? (No) \u2192 No, he ( ? ).",
            "options": [
                "did",
                "don't",
                "do",
                "didn't"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You went. \u2192 ( ? ) you go?",
            "options": [
                "Did",
                "Do",
                "Was",
                "Does"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did Ken ( went )? \u2192 ( ? )",
            "options": [
                "went",
                "go",
                "gos",
                "going"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did she eat? (Yes) \u2192 Yes, she ( ? ).",
            "options": [
                "don't",
                "didn't",
                "did",
                "do"
            ],
            "answer": 2,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You came. \u2192 ( ? ) you come?",
            "options": [
                "Was",
                "Did",
                "Does",
                "Do"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( came )? \u2192 ( ? )",
            "options": [
                "come",
                "comeing",
                "comes",
                "came"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did she eat? (No) \u2192 No, she ( ? ).",
            "options": [
                "do",
                "don't",
                "did",
                "didn't"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You had. \u2192 ( ? ) you have?",
            "options": [
                "Was",
                "Does",
                "Do",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( had )? \u2192 ( ? )",
            "options": [
                "haves",
                "have",
                "haveing",
                "had"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did they run? (Yes) \u2192 Yes, they ( ? ).",
            "options": [
                "did",
                "don't",
                "didn't",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You ate. \u2192 ( ? ) you eat?",
            "options": [
                "Was",
                "Did",
                "Does",
                "Do"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( ate )? \u2192 ( ? )",
            "options": [
                "eats",
                "ate",
                "eat",
                "eating"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did they run? (No) \u2192 No, they ( ? ).",
            "options": [
                "did",
                "didn't",
                "do",
                "don't"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You saw. \u2192 ( ? ) you see?",
            "options": [
                "Do",
                "Was",
                "Did",
                "Does"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did it ( rained )? \u2192 ( ? )",
            "options": [
                "raining",
                "rained",
                "rain",
                "rains"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did Ken study? (Yes) \u2192 Yes, he ( ? ).",
            "options": [
                "did",
                "didn't",
                "don't",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You bought. \u2192 ( ? ) you buy?",
            "options": [
                "Does",
                "Do",
                "Did",
                "Was"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( saw )? \u2192 ( ? )",
            "options": [
                "see",
                "seeing",
                "sees",
                "saw"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did Emi cook? (Yes) \u2192 Yes, she ( ? ).",
            "options": [
                "did",
                "don't",
                "didn't",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "He played. \u2192 ( ? ) he play?",
            "options": [
                "Does",
                "Did",
                "Do",
                "Was"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( bought )? \u2192 ( ? )",
            "options": [
                "buys",
                "buy",
                "bought",
                "buying"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did the dog run? (Yes) \u2192 Yes, it ( ? ).",
            "options": [
                "didn't",
                "did",
                "do",
                "don't"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "She washed. \u2192 ( ? ) she wash?",
            "options": [
                "Did",
                "Do",
                "Was",
                "Does"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( wrote )? \u2192 ( ? )",
            "options": [
                "wrote",
                "writes",
                "write",
                "writeing"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you watch TV? (Yes) \u2192 Yes, I ( ? ).",
            "options": [
                "did",
                "do",
                "didn't",
                "don't"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "They ran. \u2192 ( ? ) they run?",
            "options": [
                "Do",
                "Does",
                "Was",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did they ( ran )? \u2192 ( ? )",
            "options": [
                "runs",
                "runing",
                "run",
                "ran"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you study? (No) \u2192 No, I ( ? ).",
            "options": [
                "don't",
                "do",
                "did",
                "didn't"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "Ken read. \u2192 ( ? ) Ken read?",
            "options": [
                "Was",
                "Do",
                "Did",
                "Does"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( spoke )? \u2192 ( ? )",
            "options": [
                "speak",
                "speaking",
                "speaks",
                "spoke"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did he play soccer? (Yes) \u2192 Yes, he ( ? ).",
            "options": [
                "did",
                "do",
                "didn't",
                "don't"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "Emi wrote. \u2192 ( ? ) Emi write?",
            "options": [
                "Was",
                "Did",
                "Does",
                "Do"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( knew )? \u2192 ( ? )",
            "options": [
                "knew",
                "know",
                "knows",
                "knowing"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did she play tennis? (No) \u2192 No, she ( ? ).",
            "options": [
                "did",
                "didn't",
                "don't",
                "do"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "It rained. \u2192 ( ? ) it rain?",
            "options": [
                "Do",
                "Did",
                "Was",
                "Does"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( made )? \u2192 ( ? )",
            "options": [
                "make",
                "makes",
                "made",
                "makeing"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did it rain? (Yes) \u2192 Yes, it ( ? ).",
            "options": [
                "don't",
                "didn't",
                "did",
                "do"
            ],
            "answer": 2,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "We used. \u2192 ( ? ) we use?",
            "options": [
                "Was",
                "Does",
                "Do",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( took )? \u2192 ( ? )",
            "options": [
                "take",
                "takeing",
                "takes",
                "took"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you help him? (Yes) \u2192 Yes, I ( ? ).",
            "options": [
                "don't",
                "did",
                "didn't",
                "do"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "The dog ran. \u2192 ( ? ) the dog run?",
            "options": [
                "Do",
                "Was",
                "Did",
                "Does"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( got )? \u2192 ( ? )",
            "options": [
                "got",
                "get",
                "gets",
                "geting"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did he help you? (No) \u2192 No, he ( ? ).",
            "options": [
                "didn't",
                "don't",
                "did",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You liked. \u2192 ( ? ) you like?",
            "options": [
                "Did",
                "Do",
                "Was",
                "Does"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( used )? \u2192 ( ? )",
            "options": [
                "use",
                "useing",
                "uses",
                "used"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did they come? (Yes) \u2192 Yes, they ( ? ).",
            "options": [
                "do",
                "didn't",
                "don't",
                "did"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "He lived. \u2192 ( ? ) he live?",
            "options": [
                "Was",
                "Does",
                "Do",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did they ( lived )? \u2192 ( ? )",
            "options": [
                "lived",
                "live",
                "liveing",
                "lives"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you see it? (No) \u2192 No, I ( ? ).",
            "options": [
                "do",
                "didn't",
                "did",
                "don't"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "She wanted. \u2192 ( ? ) she want?",
            "options": [
                "Was",
                "Did",
                "Does",
                "Do"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did Ken ( liked )? \u2192 ( ? )",
            "options": [
                "likes",
                "likeing",
                "liked",
                "like"
            ],
            "answer": 3,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did he buy it? (Yes) \u2192 Yes, he ( ? ).",
            "options": [
                "do",
                "did",
                "don't",
                "didn't"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "They helped. \u2192 ( ? ) they help?",
            "options": [
                "Does",
                "Was",
                "Did",
                "Do"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did Emi ( wanted )? \u2192 ( ? )",
            "options": [
                "wanted",
                "wanting",
                "want",
                "wants"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did she read it? (No) \u2192 No, she ( ? ).",
            "options": [
                "didn't",
                "did",
                "don't",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You listened. \u2192 ( ? ) you listen?",
            "options": [
                "Do",
                "Was",
                "Does",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did it ( stopped )? \u2192 ( ? )",
            "options": [
                "stops",
                "stoping",
                "stop",
                "stopped"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you know that? (Yes) \u2192 Yes, I ( ? ).",
            "options": [
                "don't",
                "do",
                "did",
                "didn't"
            ],
            "answer": 2,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "He cleaned. \u2192 ( ? ) he clean?",
            "options": [
                "Does",
                "Was",
                "Do",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( tried )? \u2192 ( ? )",
            "options": [
                "trying",
                "tried",
                "trys",
                "try"
            ],
            "answer": 3,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you go to school? (Yes) \u2192 ( ? )",
            "options": [
                "don't",
                "didn't",
                "do",
                "did"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "She enjoyed. \u2192 ( ? ) she enjoy?",
            "options": [
                "Did",
                "Do",
                "Was",
                "Does"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( studied )? \u2192 ( ? )",
            "options": [
                "studys",
                "studied",
                "study",
                "studying"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you eat lunch? (No) \u2192 ( ? )",
            "options": [
                "don't",
                "didn't",
                "do",
                "did"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You visited. \u2192 ( ? ) you visit?",
            "options": [
                "Was",
                "Do",
                "Does",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( cried )? \u2192 ( ? )",
            "options": [
                "cried",
                "cry",
                "crying",
                "crys"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did he watch TV? (Yes) \u2192 ( ? )",
            "options": [
                "do",
                "did",
                "didn't",
                "don't"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "They walked. \u2192 ( ? ) they walk?",
            "options": [
                "Did",
                "Does",
                "Was",
                "Do"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did they ( carried )? \u2192 ( ? )",
            "options": [
                "carried",
                "carry",
                "carrys",
                "carrying"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did she cook dinner? (No) \u2192 ( ? )",
            "options": [
                "didn't",
                "don't",
                "did",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "Ken stopped. \u2192 ( ? ) Ken stop?",
            "options": [
                "Did",
                "Was",
                "Do",
                "Does"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( left )? \u2192 ( ? )",
            "options": [
                "left",
                "leave",
                "leaveing",
                "leaves"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did they play baseball? (Yes) \u2192 ( ? )",
            "options": [
                "did",
                "don't",
                "do",
                "didn't"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "Emi tried. \u2192 ( ? ) Emi try?",
            "options": [
                "Does",
                "Was",
                "Did",
                "Do"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( met )? \u2192 ( ? )",
            "options": [
                "met",
                "meeting",
                "meet",
                "meets"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did it snow? (No) \u2192 ( ? )",
            "options": [
                "do",
                "don't",
                "did",
                "didn't"
            ],
            "answer": 3,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You met. \u2192 ( ? ) you meet?",
            "options": [
                "Do",
                "Did",
                "Was",
                "Does"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did she ( sang )? \u2192 ( ? )",
            "options": [
                "singing",
                "sings",
                "sing",
                "sang"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did Ken come? (Yes) \u2192 ( ? )",
            "options": [
                "do",
                "did",
                "don't",
                "didn't"
            ],
            "answer": 1,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "He sang. \u2192 ( ? ) he sing?",
            "options": [
                "Do",
                "Does",
                "Was",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did it ( began )? \u2192 ( ? )",
            "options": [
                "begining",
                "begins",
                "begin",
                "began"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did Emi go? (No) \u2192 ( ? )",
            "options": [
                "don't",
                "do",
                "didn't",
                "did"
            ],
            "answer": 2,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "She swam. \u2192 ( ? ) she swim?",
            "options": [
                "Did",
                "Do",
                "Does",
                "Was"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did you ( drank )? \u2192 ( ? )",
            "options": [
                "drinking",
                "drink",
                "drinks",
                "drank"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you finish? (Yes) \u2192 ( ? )",
            "options": [
                "did",
                "didn't",
                "do",
                "don't"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "They drank. \u2192 ( ? ) they drink?",
            "options": [
                "Do",
                "Did",
                "Does",
                "Was"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "Did he ( slept )? \u2192 ( ? )",
            "options": [
                "sleeping",
                "sleeps",
                "sleep",
                "slept"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Did you enjoy? (No) \u2192 ( ? )",
            "options": [
                "didn't",
                "did",
                "don't",
                "do"
            ],
            "answer": 0,
            "hint": "Short answer with Did -> did / didn't"
        },
        {
            "question": "You got. \u2192 ( ? ) you get?",
            "options": [
                "Do",
                "Does",
                "Was",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you do?",
            "options": [
                "does",
                "do",
                "was",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( did / what / eat / you )? \u2192 ( ? )",
            "options": [
                "What did you eat?",
                "Did you eat what?",
                "What did eat you?",
                "What you did eat?"
            ],
            "answer": 0,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) you busy yesterday?",
            "options": [
                "Do",
                "Did",
                "Were",
                "Was"
            ],
            "answer": 2,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u4f55\u3092\u898b\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you see?",
            "options": [
                "do",
                "did",
                "does",
                "was"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "( go / where / you / did )? \u2192 ( ? )",
            "options": [
                "Where you did go?",
                "Where did go you?",
                "Where did you go?",
                "Did you go where?"
            ],
            "answer": 2,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) you play soccer yesterday?",
            "options": [
                "Did",
                "Was",
                "Were",
                "Do"
            ],
            "answer": 0,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u4f55\u3092\u98df\u3079\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you eat?",
            "options": [
                "was",
                "do",
                "did",
                "does"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "( study / did / you / English )? \u2192 ( ? )",
            "options": [
                "Did study English you?",
                "You study English did?",
                "Did you study English?",
                "You did study English?"
            ],
            "answer": 2,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) you happy?",
            "options": [
                "Were",
                "Was",
                "Do",
                "Did"
            ],
            "answer": 0,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u4f55\u3092\u8cb7\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you buy?",
            "options": [
                "did",
                "do",
                "does",
                "was"
            ],
            "answer": 0,
            "hint": "Past tense question."
        },
        {
            "question": "( play / did / he / tennis )? \u2192 ( ? )",
            "options": [
                "Did play tennis he?",
                "He did play tennis?",
                "He play tennis did?",
                "Did he play tennis?"
            ],
            "answer": 3,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) you watch TV?",
            "options": [
                "Did",
                "Do",
                "Were",
                "Was"
            ],
            "answer": 0,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u4f55\u3092\u4f5c\u308a\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you make?",
            "options": [
                "does",
                "was",
                "do",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( she / did / cook / dinner )? \u2192 ( ? )",
            "options": [
                "She cook dinner did?",
                "She did cook dinner?",
                "Did cook dinner she?",
                "Did she cook dinner?"
            ],
            "answer": 3,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) he a teacher?",
            "options": [
                "Were",
                "Did",
                "Do",
                "Was"
            ],
            "answer": 3,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u4f55\u3092\u8aad\u307f\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you read?",
            "options": [
                "do",
                "was",
                "does",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( they / did / come / here )? \u2192 ( ? )",
            "options": [
                "Did come here they?",
                "They come here did?",
                "They did come here?",
                "Did they come here?"
            ],
            "answer": 3,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) he go to school?",
            "options": [
                "Do",
                "Did",
                "Was",
                "Were"
            ],
            "answer": 1,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u5f7c\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) he do?",
            "options": [
                "does",
                "do",
                "was",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( you / did / what / buy )? \u2192 ( ? )",
            "options": [
                "What did you buy?",
                "What did buy you?",
                "What you did buy?",
                "Did you buy what?"
            ],
            "answer": 0,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) she sad?",
            "options": [
                "Did",
                "Do",
                "Were",
                "Was"
            ],
            "answer": 3,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u5f7c\u5973\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) she do?",
            "options": [
                "did",
                "do",
                "was",
                "does"
            ],
            "answer": 0,
            "hint": "Past tense question."
        },
        {
            "question": "( he / did / what / make )? \u2192 ( ? )",
            "options": [
                "What did make he?",
                "Did he make what?",
                "What he did make?",
                "What did he make?"
            ],
            "answer": 3,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) she cry?",
            "options": [
                "Do",
                "Did",
                "Was",
                "Were"
            ],
            "answer": 1,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u5f7c\u3089\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) they do?",
            "options": [
                "was",
                "did",
                "do",
                "does"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "( did / when / you / go )? \u2192 ( ? )",
            "options": [
                "Did you go when?",
                "When did go you?",
                "When did you go?",
                "When you did go?"
            ],
            "answer": 2,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) they students?",
            "options": [
                "Was",
                "Do",
                "Were",
                "Did"
            ],
            "answer": 2,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u30b1\u30f3\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) Ken do?",
            "options": [
                "do",
                "does",
                "did",
                "was"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "( did / where / he / live )? \u2192 ( ? )",
            "options": [
                "Where he did live?",
                "Where did he live?",
                "Did he live where?",
                "Where did live he?"
            ],
            "answer": 1,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) they study?",
            "options": [
                "Were",
                "Was",
                "Do",
                "Did"
            ],
            "answer": 3,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u3069\u3053\u306b\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you go?",
            "options": [
                "do",
                "does",
                "was",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( do / what / you / did )? \u2192 ( ? )",
            "options": [
                "Did you do what?",
                "What did do you?",
                "What did you do?",
                "What you did do?"
            ],
            "answer": 2,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) it cold?",
            "options": [
                "Did",
                "Were",
                "Do",
                "Was"
            ],
            "answer": 3,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u3069\u3053\u3067\u898b\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you see?",
            "options": [
                "did",
                "was",
                "does",
                "do"
            ],
            "answer": 0,
            "hint": "Past tense question."
        },
        {
            "question": "( see / who / you / did )? \u2192 ( ? )",
            "options": [
                "Who did see you?",
                "Did you see who?",
                "Who did you see?",
                "Who you did see?"
            ],
            "answer": 2,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) it rain?",
            "options": [
                "Were",
                "Did",
                "Do",
                "Was"
            ],
            "answer": 1,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u3069\u3053\u3067\u8cb7\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you buy?",
            "options": [
                "does",
                "did",
                "do",
                "was"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "( did / you / enjoy / it )? \u2192 ( ? )",
            "options": [
                "You did enjoy it?",
                "You enjoy it did?",
                "Did enjoy it you?",
                "Did you enjoy it?"
            ],
            "answer": 3,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) you tired?",
            "options": [
                "Do",
                "Was",
                "Did",
                "Were"
            ],
            "answer": 3,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u3069\u3053\u3067\u4f1a\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you meet?",
            "options": [
                "was",
                "do",
                "did",
                "does"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "( did / not / I / go ). \u2192 ( ? )",
            "options": [
                "I did not go.",
                "I not did go.",
                "Did I not go.",
                "I go did not."
            ],
            "answer": 0,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "( ? ) you run?",
            "options": [
                "Do",
                "Was",
                "Did",
                "Were"
            ],
            "answer": 2,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u5f7c\u306f\u3069\u3053\u3078\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) he go?",
            "options": [
                "do",
                "was",
                "did",
                "does"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "( did / not / he / eat ). \u2192 ( ? )",
            "options": [
                "He eat did not.",
                "He not did eat.",
                "He did not eat.",
                "Did he not eat."
            ],
            "answer": 2,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "What ( ? ) you do?",
            "options": [
                "were",
                "did",
                "do",
                "was"
            ],
            "answer": 1,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u5f7c\u5973\u306f\u3069\u3053\u306b\u4f4f\u3093\u3067\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) she live?",
            "options": [
                "do",
                "does",
                "was",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( did / not / she / know ). \u2192 ( ? )",
            "options": [
                "She did not know.",
                "She not did know.",
                "She know did not.",
                "Did she not know."
            ],
            "answer": 0,
            "hint": "Order: Wh + did + Subject + Verb"
        },
        {
            "question": "Where ( ? ) you?",
            "options": [
                "were",
                "was",
                "do",
                "did"
            ],
            "answer": 0,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u3044\u3064\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you go?",
            "options": [
                "do",
                "was",
                "did",
                "does"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "Did you ( went )? \u2192 ( ? )",
            "options": [
                "gos",
                "go",
                "going",
                "went"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Where ( ? ) you go?",
            "options": [
                "did",
                "do",
                "was",
                "were"
            ],
            "answer": 0,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u3044\u3064\u6765\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you come?",
            "options": [
                "did",
                "was",
                "do",
                "does"
            ],
            "answer": 0,
            "hint": "Past tense question."
        },
        {
            "question": "Did he ( came )? \u2192 ( ? )",
            "options": [
                "came",
                "comes",
                "comeing",
                "come"
            ],
            "answer": 3,
            "hint": "After Did, use the base form."
        },
        {
            "question": "What ( ? ) that?",
            "options": [
                "were",
                "do",
                "was",
                "did"
            ],
            "answer": 2,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u3044\u3064\u98df\u3079\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you eat?",
            "options": [
                "do",
                "does",
                "did",
                "was"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "Did she ( plays )? \u2192 ( ? )",
            "options": [
                "plays",
                "playsing",
                "playss",
                "plays"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "What ( ? ) you eat?",
            "options": [
                "do",
                "were",
                "did",
                "was"
            ],
            "answer": 2,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u3044\u3064\u5bdd\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you sleep?",
            "options": [
                "was",
                "do",
                "did",
                "does"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "Did it ( rains )? \u2192 ( ? )",
            "options": [
                "rains",
                "rainsing",
                "rainss",
                "rains"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Who ( ? ) he?",
            "options": [
                "do",
                "did",
                "was",
                "were"
            ],
            "answer": 2,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u8ab0\u3092\u898b\u307e\u3057\u305f\u304b\uff1f\u2192 Who ( ? ) you see?",
            "options": [
                "do",
                "did",
                "does",
                "was"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "Did you ( watched )? \u2192 ( ? )",
            "options": [
                "watch",
                "watchs",
                "watching",
                "watched"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "Who ( ? ) you meet?",
            "options": [
                "do",
                "were",
                "was",
                "did"
            ],
            "answer": 3,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u8ab0\u306b\u4f1a\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Who ( ? ) you meet?",
            "options": [
                "does",
                "do",
                "was",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "Did they ( runs )? \u2192 ( ? )",
            "options": [
                "runs",
                "runs",
                "runss",
                "runsing"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "How ( ? ) the weather?",
            "options": [
                "was",
                "were",
                "do",
                "did"
            ],
            "answer": 3,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u3069\u306e\u3088\u3046\u306b\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 How ( ? ) you go?",
            "options": [
                "do",
                "did",
                "was",
                "does"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "Did Ken ( studied )? \u2192 ( ? )",
            "options": [
                "study",
                "studied",
                "studying",
                "studys"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "How ( ? ) you go?",
            "options": [
                "do",
                "did",
                "was",
                "were"
            ],
            "answer": 1,
            "hint": "Action verb -> Did"
        },
        {
            "question": "\u3069\u3046\u3084\u3063\u3066\u4f5c\u308a\u307e\u3057\u305f\u304b\uff1f\u2192 How ( ? ) you make?",
            "options": [
                "does",
                "did",
                "do",
                "was"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "Did Emi ( cooked )? \u2192 ( ? )",
            "options": [
                "cooked",
                "cooking",
                "cook",
                "cooks"
            ],
            "answer": 2,
            "hint": "After Did, use the base form."
        },
        {
            "question": "( ? ) he happy?",
            "options": [
                "Was",
                "Were",
                "Do",
                "Did"
            ],
            "answer": 0,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u4f55\u6642\u3067\u3057\u305f\u304b\uff1f\u2192 What time ( ? ) it?",
            "options": [
                "does",
                "did",
                "do",
                "was"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "Did you ( were ) busy? \u2192 ( ? )",
            "options": [
                "were",
                "wereing",
                "weres",
                "were"
            ],
            "answer": 0,
            "hint": "After Did, use the base form."
        },
        {
            "question": "( ? ) he look happy?",
            "options": [
                "Did",
                "Was",
                "Had",
                "Were"
            ],
            "answer": 0,
            "hint": "Action verb 'look' -> Did"
        },
        {
            "question": "\u4f55\u6642\u306b\u8d77\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 What time ( ? ) you get up?",
            "options": [
                "did",
                "was",
                "does",
                "do"
            ],
            "answer": 0,
            "hint": "Past tense question."
        },
        {
            "question": "Did you ( was ) sad? \u2192 ( ? )",
            "options": [
                "wasing",
                "was",
                "wass",
                "was"
            ],
            "answer": 1,
            "hint": "After Did, use the base form."
        },
        {
            "question": "( ? ) she busy?",
            "options": [
                "Do",
                "Was",
                "Did",
                "Were"
            ],
            "answer": 1,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u4f55\u6642\u306b\u5bdd\u307e\u3057\u305f\u304b\uff1f\u2192 What time ( ? ) you sleep?",
            "options": [
                "was",
                "does",
                "did",
                "do"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "( Do ) you go yesterday? \u2192 ( ? )",
            "options": [
                "Do",
                "Was",
                "Did",
                "Does"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "( ? ) she look busy?",
            "options": [
                "Were",
                "Did",
                "Was",
                "Had"
            ],
            "answer": 1,
            "hint": "Action verb 'look' -> Did"
        },
        {
            "question": "\u3069\u3061\u3089\u3092\u8cb7\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Which ( ? ) you buy?",
            "options": [
                "do",
                "did",
                "does",
                "was"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "( Do ) he come yesterday? \u2192 ( ? )",
            "options": [
                "Does",
                "Do",
                "Was",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "( ? ) they kind?",
            "options": [
                "Were",
                "Do",
                "Did",
                "Was"
            ],
            "answer": 0,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u3069\u3061\u3089\u3092\u98df\u3079\u307e\u3057\u305f\u304b\uff1f\u2192 Which ( ? ) you eat?",
            "options": [
                "does",
                "was",
                "did",
                "do"
            ],
            "answer": 2,
            "hint": "Past tense question."
        },
        {
            "question": "( Does ) she eat yesterday? \u2192 ( ? )",
            "options": [
                "Do",
                "Was",
                "Does",
                "Did"
            ],
            "answer": 3,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "( ? ) they look kind?",
            "options": [
                "Had",
                "Were",
                "Did",
                "Was"
            ],
            "answer": 2,
            "hint": "Action verb 'look' -> Did"
        },
        {
            "question": "\u306a\u305c\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Why ( ? ) you go?",
            "options": [
                "was",
                "does",
                "do",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( Are ) you play yesterday? \u2192 ( ? )",
            "options": [
                "Was",
                "Does",
                "Did",
                "Do"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "( ? ) it nice?",
            "options": [
                "Do",
                "Were",
                "Did",
                "Was"
            ],
            "answer": 3,
            "hint": "State/Adjective -> Was/Were"
        },
        {
            "question": "\u306a\u305c\u6ce3\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Why ( ? ) you cry?",
            "options": [
                "was",
                "does",
                "do",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( Is ) he go yesterday? \u2192 ( ? )",
            "options": [
                "Did",
                "Does",
                "Was",
                "Do"
            ],
            "answer": 0,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "( ? ) it look nice?",
            "options": [
                "Was",
                "Did",
                "Were",
                "Had"
            ],
            "answer": 1,
            "hint": "Action verb 'look' -> Did"
        },
        {
            "question": "\u3042\u306a\u305f\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you do?",
            "options": [
                "do",
                "was",
                "does",
                "did"
            ],
            "answer": 3,
            "hint": "Past tense question."
        },
        {
            "question": "( Were ) you play tennis? \u2192 ( ? )",
            "options": [
                "Does",
                "Did",
                "Was",
                "Do"
            ],
            "answer": 1,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "That ( ? ) interesting.",
            "options": [
                "look",
                "looked",
                "looking",
                "looks"
            ],
            "answer": 3,
            "hint": "Subject 'That' -> looks"
        },
        {
            "question": "\u3042\u306a\u305f\u306f\u3069\u3053\u306b\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you? (\u203bbe\u52d5\u8a5e)",
            "options": [
                "are",
                "were",
                "was",
                "did"
            ],
            "answer": 1,
            "hint": "Past tense question."
        },
        {
            "question": "( Was ) he eat lunch? \u2192 ( ? )",
            "options": [
                "Does",
                "Do",
                "Did",
                "Was"
            ],
            "answer": 2,
            "hint": "Past tense question -> Did"
        },
        {
            "question": "That ( ? ) interesting.",
            "options": [
                "looked",
                "looks",
                "looking",
                "look"
            ],
            "answer": 1,
            "hint": "Subject 'That' -> looks"
        },
        {
            "question": "\u5f7c\u306f\u8ab0\u3067\u3057\u305f\u304b\uff1f\u2192 Who ( ? ) he? (\u203bbe\u52d5\u8a5e)",
            "options": [
                "did",
                "are",
                "were",
                "was"
            ],
            "answer": 3,
            "hint": "Past tense question."
        }
    ]
};

quizData.history_kamakura_muromachi = {
    title: "歴史 - 鎌倉・室町",
    questions: [
        {
            "question": "文永の役（1回目の元寇）で、元軍が使用した集団戦法や火器に対し、日本軍（鎌倉武士）はどのような戦い方をして苦戦しましたか。",
            "options": [
                "一騎打ち（やあやあ我こそは…）",
                "ゲリラ戦",
                "鉄砲隊による一斉射撃",
                "騎馬隊による突撃"
            ],
            "answer": 0,
            "hint": "名乗りを上げてから戦う、古くからの作法を守っていました。"
        },
        {
            "question": "2度の元寇の後、博多湾の沿岸に築かれた、元軍の再来に備えるための石造りの壁を何といいますか。",
            "options": [
                "防塁（石塁）",
                "万里の長城",
                "古墳",
                "土塁"
            ],
            "answer": 0,
            "hint": "福岡市内にその跡が残っています。"
        },
        {
            "question": "元寇の後、御家人が困窮した理由の一つとして、親の領地を子供たち全員に分ける相続方法が原因で、土地が細分化されてしまったことが挙げられます。この相続方法は何ですか。",
            "options": [
                "分割相続",
                "長子相続",
                "末子相続",
                "単独相続"
            ],
            "answer": 0,
            "hint": "土地が小さくなりすぎて、生活ができなくなりました。"
        },
        {
            "question": "鎌倉幕府が出した「徳政令（永仁の徳政令）」の内容として正しいものはどれですか。",
            "options": [
                "御家人が売ったり質に入れたりした土地を、無償で取り戻させる",
                "農民に新しい土地を与える",
                "商人の借金を帳消しにする",
                "新しい貨幣を発行する"
            ],
            "answer": 0,
            "hint": "御家人を救うための強引な政策でしたが、かえって経済が混乱しました。"
        },
        {
            "question": "後醍醐天皇による「建武の新政」が崩壊するきっかけとなった、中先代の乱を鎮圧するために鎌倉へ向かい、そのまま幕府に反旗を翻した人物は誰ですか。",
            "options": [
                "足利尊氏",
                "新田義貞",
                "楠木正成",
                "北条高時"
            ],
            "answer": 0,
            "hint": "後の室町幕府初代将軍です。"
        },
        {
            "question": "足利尊氏が北朝（京都）を支持したのに対し、後醍醐天皇はどこに逃れて「南朝」を立てましたか。",
            "options": [
                "吉野（奈良県）",
                "鎌倉（神奈川県）",
                "博多（福岡県）",
                "平泉（岩手県）"
            ],
            "answer": 0,
            "hint": "山深い場所で、約60年間対立が続きました。"
        },
        {
            "question": "室町幕府の仕組みにおいて、将軍を補佐する役職を何といいますか。",
            "options": [
                "管領",
                "執権",
                "老中",
                "関白"
            ],
            "answer": 0,
            "hint": "細川氏・斯波氏・畠山氏の三家が交代で務めました。"
        },
        {
            "question": "守護大名が、荘園領主の支配を排除し、その土地の武士や農民を直接支配して領国化したことを何といいますか。",
            "options": [
                "守護請",
                "守護領国制",
                "版籍奉還",
                "廃藩置県"
            ],
            "answer": 1,
            "hint": "守護が単なる軍事指揮官から、その国の支配者（大名）へと変わっていきました。"
        },
        {
            "question": "足利義満が行った「日明貿易」の主な目的は何でしたか。",
            "options": [
                "莫大な利益を得ること",
                "キリスト教を広めること",
                "領土を拡大すること",
                "モンゴルと戦うため"
            ],
            "answer": 0,
            "hint": "明の皇帝に朝貢する形式をとり、輸入した銅銭などが日本経済を潤しました。"
        },
        {
            "question": "応仁の乱のきっかけとなった、足利義政の跡継ぎ問題に関わった、義政の弟と息子（の母）の組み合わせはどれですか。",
            "options": [
                "足利義視 と 日野富子（義尚の母）",
                "足利尊氏 と 足利直義",
                "源頼朝 と 北条政子",
                "織田信長 と 豊臣秀吉"
            ],
            "answer": 0,
            "hint": "弟に譲ると言った後に息子が生まれ、争いになりました。"
        },
        {
            "question": "応仁の乱により京都が荒廃した後、京都の復興に尽力した裕福な商工業者を何といいますか。",
            "options": [
                "町衆（町　衆）",
                "豪農",
                "御家人",
                "公家"
            ],
            "answer": 0,
            "hint": "祇園祭の再興なども彼らの力によるものです。"
        },
        {
            "question": "室町時代、農村で形成された自治組織「惣（惣村）」で開かれた話し合いの場を何といいますか。",
            "options": [
                "寄合",
                "国会",
                "評定",
                "株仲間"
            ],
            "answer": 0,
            "hint": "村の掟（おきて）などを全員で決めました。"
        },
        {
            "question": "1428年の正長の土一揆で、農民たちが徳政を求めて襲撃した場所はどこですか。",
            "options": [
                "酒屋・土倉",
                "将軍の御所",
                "寺院",
                "港"
            ],
            "answer": 0,
            "hint": "高利貸しを営んでおり、借用証書が保管されていました。"
        },
        {
            "question": "1485年、山城国（京都府）で国人や農民が守護大名の軍勢を追い出し、8年間の自治を行った出来事は何ですか。",
            "options": [
                "山城の国一揆",
                "加賀の一向一揆",
                "島原の乱",
                "大塩平八郎の乱"
            ],
            "answer": 0,
            "hint": "応仁の乱の主戦場となった地域で起こりました。"
        },
        {
            "question": "加賀（石川県）で、浄土真宗の信徒らが守護大名を倒し、約100年間にわたって自治を行った出来事は何ですか。",
            "options": [
                "加賀の一向一揆",
                "山城の国一揆",
                "正長の土一揆",
                "天草四郎の乱"
            ],
            "answer": 0,
            "hint": "「百姓の持ちたる国」と呼ばれました。"
        },
        {
            "question": "戦国大名が、領国内の統治を固めるために制定した独自の法律（分国法）にしばしば見られる規定は何ですか。",
            "options": [
                "喧嘩両成敗",
                "鎖国",
                "廃刀令",
                "四民平等"
            ],
            "answer": 0,
            "hint": "理由を問わず、争いをした両方を処罰するというルールです。"
        },
        {
            "question": "戦国大名が家臣や商工業者を城の周辺に集めて住まわせた町を何といいますか。",
            "options": [
                "城下町",
                "門前町",
                "宿場町",
                "港町"
            ],
            "answer": 0,
            "hint": "防衛機能と経済機能を兼ね備えていました。"
        },
        {
            "question": "現在の大阪府堺市などで見られた、裕福な商人（会合衆）による自治が行われた都市を何といいますか。",
            "options": [
                "自治都市",
                "宗教都市",
                "計画都市",
                "城下町"
            ],
            "answer": 0,
            "hint": "「東洋のベニス」と称されることもありました。"
        },
        {
            "question": "室町時代、定期市の開催回数は鎌倉時代の「三斎市」からどう変化しましたか。",
            "options": [
                "六斎市（月に6回）",
                "毎日開催",
                "年1回",
                "廃止された"
            ],
            "answer": 0,
            "hint": "商業がより活発になったことを示しています。"
        },
        {
            "question": "商品の運送や積み下ろしを行った業者で、馬を利用したものを何といいますか。",
            "options": [
                "馬借",
                "車借",
                "飛脚",
                "問屋"
            ],
            "answer": 0,
            "hint": "土一揆の際にも、その機動力を活かして活動しました。"
        },
        {
            "question": "「下克上」の風潮の中で、守護代から戦国大名に成り上がり、越前（福井県）の一乗谷を拠点とした戦国大名は誰ですか。",
            "options": [
                "朝倉氏",
                "武田氏",
                "上杉氏",
                "北条氏"
            ],
            "answer": 0,
            "hint": "一乗谷朝倉氏遺跡として有名です。"
        },
        {
            "question": "関東地方で、堀越公方を滅ぼして伊豆を奪い、のちに関東一円を支配する戦国大名となったのは誰ですか。",
            "options": [
                "北条早雲（伊勢宗瑞）",
                "織田信長",
                "豊臣秀吉",
                "徳川家康"
            ],
            "answer": 0,
            "hint": "下克上の代表的な人物とされ、小田原城を拠点としました。"
        },
        {
            "question": "甲斐（山梨県）の戦国大名で、騎馬隊を率い、上杉謙信と川中島で戦ったのは誰ですか。",
            "options": [
                "武田信玄",
                "伊達政宗",
                "毛利元就",
                "長宗我部元親"
            ],
            "answer": 0,
            "hint": "「風林火山」の旗印で有名です。"
        },
        {
            "question": "越後（新潟県）の戦国大名で、義を重んじ、武田信玄のライバルだったのは誰ですか。",
            "options": [
                "上杉謙信",
                "今川義元",
                "斎藤道三",
                "島津義久"
            ],
            "answer": 0,
            "hint": "自らを毘沙門天の化身と称しました。"
        },
        {
            "question": "中国地方（広島県など）で勢力を広げた戦国大名で、「三本の矢」の教えの逸話で知られるのは誰ですか。",
            "options": [
                "毛利元就",
                "尼子経久",
                "大内義隆",
                "宇喜多直家"
            ],
            "answer": 0,
            "hint": "一族の団結を説きました。"
        },
        {
            "question": "室町時代に普及した、同じ耕地で一年に米と麦を交互に作る農法を何といいますか。",
            "options": [
                "二毛作",
                "二期作",
                "輪作",
                "焼畑農業"
            ],
            "answer": 0,
            "hint": "土地の生産性が大きく向上しました。"
        },
        {
            "question": "室町時代、灌漑（かんがい）のために使われた、足踏み式の揚水機を何といいますか。",
            "options": [
                "竜骨車",
                "水車",
                "千歯扱き",
                "唐箕"
            ],
            "answer": 0,
            "hint": "中国から伝わり、水田への水やりに活躍しました。"
        },
        {
            "question": "室町時代、特産品が各地で作られましたが、京都の西陣などで作られた高級織物は何ですか。",
            "options": [
                "絹織物（西陣織）",
                "綿織物",
                "麻織物",
                "ナイロン"
            ],
            "answer": 0,
            "hint": "応仁の乱の西軍の陣地跡で発展したことから名付けられました。"
        },
        {
            "question": "1419年、朝鮮軍が倭寇の拠点を叩くために襲撃した島はどこですか（応永の外寇）。",
            "options": [
                "対馬",
                "壱岐",
                "佐渡",
                "淡路島"
            ],
            "answer": 0,
            "hint": "宗氏が治めていた、日本と朝鮮の間にある島です。"
        },
        {
            "question": "アイヌ民族の指導者コシャマインが蜂起した原因は何ですか。",
            "options": [
                "和人が不当に安い価格で商品を取引しようとしたから",
                "和人がアイヌの土地を奪ったから",
                "和人がアイヌに重税を課したから",
                "和人がアイヌの宗教を禁止したから"
            ],
            "answer": 0,
            "hint": "小刀（マキリ）の価格などを巡るトラブルがきっかけでした。"
        }
    ]
};

quizData.history_muromachi_society = {
    title: "社会の仕組み - 惣・座・徳政令",
    questions: [
        {
            "question": "元寇の後、生活が苦しくなった御家人を救うために、鎌倉幕府が出した「借金を帳消しにする法令」を何といいますか。",
            "options": [
                "御成敗式目",
                "徳政令",
                "刀狩令",
                "武家諸法度"
            ],
            "answer": 1,
            "hint": "永仁の徳政令が有名です。"
        },
        {
            "question": "室町時代、営業を独占する権利を得るために、商工業者が結成した同業者組合を何といいますか。",
            "options": [
                "株仲間",
                "惣",
                "座",
                "講"
            ],
            "answer": 2,
            "hint": "貴族や寺社に税（座役）を払って保護を受けました。"
        },
        {
            "question": "室町時代の農村で作られた、有力な農民を中心とした自治組織を何といいますか。",
            "options": [
                "寄合",
                "座",
                "惣（惣村）",
                "一揆"
            ],
            "answer": 2,
            "hint": "「寄合」を開いて村の掟を定めました。"
        },
        {
            "question": "1428年、近江（滋賀県）の馬借らが徳政令を求めて蜂起し、京都へ乱入した出来事を何といいますか。",
            "options": [
                "応仁の乱",
                "正長の土一揆",
                "島原の乱",
                "山城の国一揆"
            ],
            "answer": 1,
            "hint": "借用証書を破り捨てるなどして徳政を求めました。"
        },
        {
            "question": "応仁の乱のころから広まった、下の身分の者が上の身分の者の実力を倒して地位を奪う風潮を何といいますか。",
            "options": [
                "下克上",
                "専制君主",
                "鎖国",
                "王政復古"
            ],
            "answer": 0,
            "hint": "実力主義の戦国時代の始まりを象徴する言葉です。"
        },
        {
            "question": "戦国時代、各地の戦国大名が領国を支配するために定めた独自の法律を何といいますか。",
            "options": [
                "公事方御定書",
                "分国法（家法）",
                "武家諸法度",
                "御成敗式目"
            ],
            "answer": 1,
            "hint": "「喧嘩両成敗」などが規定されました。"
        },
        {
            "question": "室町時代、馬を使って荷物を運んだ運送業者を何といいますか。",
            "options": [
                "馬借",
                "問屋",
                "飛脚",
                "廻船"
            ],
            "answer": 0,
            "hint": "交通の要所や港などで活躍し、土一揆の中心にもなりました。"
        },
        {
            "question": "室町時代、借金の質草（担保）として預けられた品物を保管し、金を貸し付ける金融業者を何といいますか。",
            "options": [
                "土倉",
                "酒屋",
                "両替商",
                "問屋"
            ],
            "answer": 0,
            "hint": "しっかりとした蔵（土蔵）を持っていました。"
        },
        {
            "question": "戦国大名が城の周辺に家来や商工業者を住まわせ、計画的に造り上げた町を何といいますか。",
            "options": [
                "門前町",
                "宿場町",
                "寺内町",
                "城下町"
            ],
            "answer": 3,
            "hint": "現在の県庁所在地の多くがここから発展しました。"
        },
        {
            "question": "1485年、京都南部の山城国で起こり、国人（地侍）や農民が団結して守護大名を追い出し、8年間自治を行った一揆は何ですか。",
            "options": [
                "加賀の一向一揆",
                "山城の国一揆",
                "島原の乱",
                "大塩平八郎の乱"
            ],
            "answer": 1,
            "hint": "「山城」という場所の名前がつきます。"
        }
    ]
};

quizData.history_muromachi_culture = {
    title: "文化・宗教 - 金閣・銀閣・鎌倉新仏教",
    questions: [
        {
            "question": "鎌倉時代、法然の弟子でありながら、念仏の札を配って全国を歩き、「踊念仏」で盆踊りの起源ともなった時宗の開祖は誰ですか。",
            "options": [
                "親鸞",
                "一遍",
                "日蓮",
                "空也"
            ],
            "answer": 1,
            "hint": "「遊行上人」とも呼ばれました。"
        },
        {
            "question": "鎌倉時代に栄西が伝えた禅宗（臨済宗）とともに、中国（宋）から日本に持ち帰られ、後に喫茶の習慣として広まったものは何ですか。",
            "options": [
                "お茶の種",
                "火薬",
                "木綿",
                "サツマイモ"
            ],
            "answer": 0,
            "hint": "眠気覚ましとして座禅の修行に役立ちました。"
        },
        {
            "question": "「南無妙法蓮華経」という題目を唱えることを説き、他宗を激しく攻撃したため幕府に弾圧されたものの、武士や商人に広まった宗派は何ですか。",
            "options": [
                "浄土宗",
                "日蓮宗（法華宗）",
                "真言宗",
                "曹洞宗"
            ],
            "answer": 1,
            "hint": "日蓮が開祖です。"
        },
        {
            "question": "鎌倉時代、後鳥羽上皇の命令で編集された、藤原定家らが中心となってまとめた和歌集は何ですか。",
            "options": [
                "古今和歌集",
                "新古今和歌集",
                "万葉集",
                "金槐和歌集"
            ],
            "answer": 1,
            "hint": "「新」しい「古今」和歌集という意味です。"
        },
        {
            "question": "琵琶法師（びわほうし）によって語り継がれ、平氏の繁栄と滅亡を描いた軍記物語の傑作は何ですか。",
            "options": [
                "源氏物語",
                "平家物語",
                "竹取物語",
                "義経記"
            ],
            "answer": 1,
            "hint": "「祇園精舎の鐘の声……」という書き出しが有名です。"
        },
        {
            "question": "鎌倉時代初期の随筆集で、鴨長明が災害や飢饉など世の中の無常（はかなさ）を書き記した作品は何ですか。",
            "options": [
                "枕草子",
                "徒然草",
                "方丈記",
                "奥の細道"
            ],
            "answer": 2,
            "hint": "小さな庵（方丈）で執筆されました。"
        },
        {
            "question": "鎌倉時代末期から南北朝時代にかけて、兼好法師（吉田兼好）が書いた随筆集は何ですか。",
            "options": [
                "方丈記",
                "徒然草",
                "更級日記",
                "土佐日記"
            ],
            "answer": 1,
            "hint": "「つれづれなるままに……」で始まります。"
        },
        {
            "question": "東大寺南大門の金剛力士像を作った運慶や快慶など、写実的で力強い彫刻を生み出した仏師の派閥を何といいますか。",
            "options": [
                "円派",
                "院派",
                "慶派",
                "奈良派"
            ],
            "answer": 2,
            "hint": "名前に「慶」のつく仏師が多かったことから名付けられました。"
        },
        {
            "question": "東大寺南大門の再建に使われた、中国（宋）の様式を取り入れた建築様式を何といいますか。",
            "options": [
                "大仏様（天竺様）",
                "和様",
                "禅宗様",
                "書院造"
            ],
            "answer": 0,
            "hint": "太い柱と、柱を貫く水平の材（貫）が特徴です。"
        },
        {
            "question": "室町文化のうち、足利義満の時代の「北山文化」の特徴として最も適切なものはどれですか。",
            "options": [
                "公家文化と武家文化の融合",
                "わび・さびの簡素な文化",
                "町人中心の活気ある文化",
                "西洋の影響を受けた南蛮文化"
            ],
            "answer": 0,
            "hint": "金閣に代表されるように、華やかで力強い側面がありました。"
        },
        {
            "question": "室町文化のうち、足利義政の時代の「東山文化」の特徴として最も適切なものはどれですか。",
            "options": [
                "禅宗の精神に基づいた簡素で気品ある文化",
                "金箔を多用した豪華絢爛な文化",
                "仏教色を排除した実用的な文化",
                "古代の復興を目指した文化"
            ],
            "answer": 0,
            "hint": "銀閣や水墨画、茶の湯などが当てはまります。"
        },
        {
            "question": "室町時代、上の句と下の句を複数の人で次々に詠みつないでいく文芸が流行しました。これを何といいますか。",
            "options": [
                "俳諧",
                "連歌",
                "川柳",
                "短歌"
            ],
            "answer": 1,
            "hint": "寄合（会合）の際などにも行われ、人々の交流の場となりました。"
        },
        {
            "question": "室町時代に庶民の間で親しまれた、「一寸法師」や「浦島太郎」などの絵入りの短編物語を何といいますか。",
            "options": [
                "御伽草子",
                "今昔物語集",
                "宇治拾遺物語",
                "浮世草子"
            ],
            "answer": 0,
            "hint": "子供から大人まで楽しめる物語です。"
        },
        {
            "question": "室町時代の建築様式「書院造」の特徴の一つで、部屋を仕切るために使われた、紙を貼った建具は何ですか。",
            "options": [
                "雨戸",
                "障子・ふすま",
                "カーテン",
                "板戸"
            ],
            "answer": 1,
            "hint": "これにより部屋の広さを自由に変えたり、光を取り込んだりしました。"
        },
        {
            "question": "室町時代、床の間に花を飾る習慣から発展し、芸術として確立されたものは何ですか。",
            "options": [
                "盆栽",
                "華道（生け花）",
                "造園",
                "園芸"
            ],
            "answer": 1,
            "hint": "池坊（いけのぼう）などの流派が生まれました。"
        },
        {
            "question": "能の合間に演じられた、当時の庶民の生活や言葉を使い、失敗談などを面白おかしく演じた劇は何ですか。",
            "options": [
                "歌舞伎",
                "狂言",
                "漫才",
                "落語"
            ],
            "answer": 1,
            "hint": "能と同じ舞台で演じられますが、仮面をつけないことが多いです。"
        },
        {
            "question": "室町時代、禅宗の寺院（五山）の僧たちが、中国の文化に親しみ、漢詩文を作る文学が発達しました。これを何といいますか。",
            "options": [
                "五山文学",
                "漢文訓読",
                "国風文化",
                "朱子学"
            ],
            "answer": 0,
            "hint": "京都や鎌倉の大きな禅寺が中心でした。"
        },
        {
            "question": "雪舟が中国（明）で学び、日本で大成させた「水墨画」の特徴は何ですか。",
            "options": [
                "金や銀を使い、極彩色で描く",
                "墨一色で、濃淡や筆の勢いによって表現する",
                "油絵具を使って立体的に描く",
                "版画で同じ絵を大量に作る"
            ],
            "answer": 1,
            "hint": "余白を活かした表現が特徴です。"
        },
        {
            "question": "銀閣（慈照寺）にある、書院造の原点とされる建物（部屋）の名前は何ですか。",
            "options": [
                "東求堂同仁斎",
                "燕の御所",
                "飛雲閣",
                "待庵"
            ],
            "answer": 0,
            "hint": "四畳半の茶室のルーツとも言われています。"
        },
        {
            "question": "鎌倉時代の文化の担い手として、京都の公家文化に対し、鎌倉ではどのような人々の気風を反映した文化が生まれましたか。",
            "options": [
                "町人（商人）",
                "武士",
                "農民",
                "外国人"
            ],
            "answer": 1,
            "hint": "素朴で力強い文化が好まれました。"
        },
        {
            "question": "平安時代の寝殿造に対して、室町時代の書院造では床は何敷きになりましたか。",
            "options": [
                "板敷き",
                "畳敷き",
                "土間",
                "絨毯"
            ],
            "answer": 1,
            "hint": "現在の和室と同じスタイルです。"
        },
        {
            "question": "室町時代に広まった茶の湯（わび茶）を創始し、精神性を重んじる茶道を説いた人物は誰ですか（千利休の師匠にあたる人物のひとり）。",
            "options": [
                "村田珠光",
                "古田織部",
                "小堀遠州",
                "細川幽斎"
            ],
            "answer": 0,
            "hint": "教科書の発展欄などに出てくることがあります。"
        },
        {
            "question": "鎌倉仏教において、自分の力（修行）で悟りを開くことを何といいますか。",
            "options": [
                "他力",
                "自力",
                "念仏",
                "題目"
            ],
            "answer": 1,
            "hint": "禅宗などがこれにあたります。"
        },
        {
            "question": "鎌倉仏教において、仏（阿弥陀如来など）の力にすがって救われようとすることを何といいますか。",
            "options": [
                "他力（他力本願）",
                "自力",
                "座禅",
                "苦行"
            ],
            "answer": 0,
            "hint": "浄土宗や浄土真宗の考え方です。"
        },
        {
            "question": "室町時代、各地で盆踊りのもとになった、鉦（かね）や太鼓に合わせて集団で踊る踊りを何といいますか。",
            "options": [
                "風流踊（ふりゅうおどり）",
                "日本舞踊",
                "カチャーシー",
                "神楽"
            ],
            "answer": 0,
            "hint": "人々が派手な衣装で熱狂的に踊りました。"
        },
        {
            "question": "日蓮宗（法華宗）が特に信仰されたのは、どのような人々でしたか。",
            "options": [
                "京都の公家",
                "地方の農民",
                "関東の武士や京都・堺の商工業者（町衆）",
                "九州の海賊"
            ],
            "answer": 2,
            "hint": "現世利益（生きている間の救い）を説いたため、活動的な人々に受け入れられました。"
        },
        {
            "question": "親鸞の教え（浄土真宗）を一言で表すと、どのような考え方ですか。",
            "options": [
                "厳しい修行をした者だけが救われる",
                "悪人こそが阿弥陀如来の救いの対象である（悪人正機）",
                "学問を修めた者が救われる",
                "寄付を多くした者が救われる"
            ],
            "answer": 1,
            "hint": "「善人なほもて往生をとぐ、いはんや悪人をや」という言葉が有名です。"
        },
        {
            "question": "室町時代、京都の祇園祭が一時中断する原因となった大きな戦乱は何ですか。",
            "options": [
                "源平の戦い",
                "応仁の乱",
                "南北朝の動乱",
                "本能寺の変"
            ],
            "answer": 1,
            "hint": "町が焼き払われましたが、後に町衆の力で復活しました。"
        },
        {
            "question": "金閣（鹿苑寺）の建築様式の特徴はどれですか。",
            "options": [
                "全ての階が同じ様式で作られている",
                "1層が寝殿造風、2層が武家造風、3層が禅宗様（中国風）",
                "全体がレンガで作られている",
                "屋根に十字架がついている"
            ],
            "answer": 1,
            "hint": "公家・武家・禅宗（中国）の文化の融合を象徴しています。"
        },
        {
            "question": "銀閣（慈照寺）の庭園の特徴は何ですか。",
            "options": [
                "水を一切使わず、石と砂で自然を表現した（枯山水風）",
                "大きな池を中心に、船を浮かべて遊ぶ",
                "西洋風の噴水がある",
                "広大な芝生が広がっている"
            ],
            "answer": 0,
            "hint": "東山文化の「わび・さび」の精神が表れています。"
        },
        {
            "question": "鎌倉時代に再建された東大寺南大門にある金剛力士像は、口の開け方で2体に分かれています。口を開けている像（阿形）と閉じている像（吽形）の組み合わせで正しいのはどれですか。",
            "options": [
                "阿形（あぎょう）と 吽形（うんぎょう）",
                "善形（ぜんぎょう）と 悪形（あくぎょう）",
                "上形（じょうぎょう）と 下形（げぎょう）",
                "陽形（ようぎょう）と 陰形（いんぎょう）"
            ],
            "answer": 0,
            "hint": "「あ・うんの呼吸」の語源になっています。"
        },
        {
            "question": "戦国時代、イエズス会の宣教師ヴァリニャーノの勧めで、ローマ教皇のもとへ派遣された少年たちの使節団を何といいますか。",
            "options": [
                "遣唐使",
                "岩倉使節団",
                "天正遣欧少年使節",
                "慶長遣欧使節"
            ],
            "answer": 2,
            "hint": "伊東マンショら4人の少年が派遣されました。"
        },
        {
            "question": "安土桃山時代（戦国末期）に、千利休が大成し、豊臣秀吉にも仕えた文化は何ですか。",
            "options": [
                "茶道（わび茶）",
                "歌舞伎",
                "浄瑠璃",
                "俳句"
            ],
            "answer": 0,
            "hint": "狭い茶室で、主と客が心を通わせることを重視しました。"
        }
    ]
};

quizData.history_muromachi_foreign = {
    title: "対外関係 - 日明貿易・琉球・アイヌ",
    questions: [
        {
            "question": "足利義満が始めた日明貿易において、正式な貿易船と海賊（倭寇）を区別するために用いられた割符（札）は何ですか。",
            "options": [
                "朱印状",
                "勘合（符）",
                "通行手形",
                "パスポート"
            ],
            "answer": 1,
            "hint": "これを持参しない船は入港を拒否されました。"
        },
        {
            "question": "日明貿易（勘合貿易）で、日本から明へ輸出された主な品物はどれですか。",
            "options": [
                "生糸",
                "銅銭",
                "刀剣・銅・硫黄",
                "書物"
            ],
            "answer": 2,
            "hint": "日本刀はその切れ味の良さから珍重されました。"
        },
        {
            "question": "15世紀初め、沖縄本島を統一して琉球王国を建て、中継貿易で繁栄させた人物は誰ですか。",
            "options": [
                "尚巴志",
                "コシャマイン",
                "阿倍仲麻呂",
                "卑弥呼"
            ],
            "answer": 0,
            "hint": "首里城を王宮としました。"
        },
        {
            "question": "1457年、和人の進出に対してアイヌ民族が蜂起した戦いを何といいますか。",
            "options": [
                "シャクシャインの戦い",
                "コシャマインの戦い",
                "アテルイの戦い",
                "応仁の乱"
            ],
            "answer": 1,
            "hint": "アイヌの首長が中心となって戦いました。"
        },
        {
            "question": "13世紀から16世紀にかけて、朝鮮半島や中国沿岸を荒らし回った海賊集団を何といいますか。",
            "options": [
                "倭寇",
                "バイキング",
                "水軍",
                "野武士"
            ],
            "answer": 0,
            "hint": "「倭」は日本を意味します。"
        },
        {
            "question": "1543年、種子島に漂着したポルトガル人が伝えた、戦国時代の戦い方を一変させた武器は何ですか。",
            "options": [
                "大砲",
                "鉄砲（火縄銃）",
                "弓矢",
                "クロスボウ"
            ],
            "answer": 1,
            "hint": "その後、堺や国友などで大量生産されました。"
        }
    ]
};

quizData.history_muromachi_details = {
    title: "詳細・応用 - 作品・地名・人物",
    questions: [
        {
            "question": "鎌倉時代末期、兼好法師（吉田兼好）が書いた随筆集は何ですか。「つれづれなるままに……」の書き出しで有名です。",
            "options": [
                "枕草子",
                "方丈記",
                "徒然草",
                "源氏物語"
            ],
            "answer": 2,
            "hint": "無常観に基づき、日々の思いをつづりました。"
        },
        {
            "question": "能を大成させた世阿弥が書いた、能の理論書（芸術論）は何ですか。",
            "options": [
                "風姿花伝",
                "古事記",
                "日本書紀",
                "万葉集"
            ],
            "answer": 0,
            "hint": "「初心忘るべからず」という言葉が有名です。"
        },
        {
            "question": "戦国時代、武田信玄（甲斐）と上杉謙信（越後）が数回にわたって激突した有名な戦いは何ですか。",
            "options": [
                "桶狭間の戦い",
                "長篠の戦い",
                "川中島の戦い",
                "関ヶ原の戦い"
            ],
            "answer": 2,
            "hint": "信濃（長野県）の支配権を巡る戦いです。"
        },
        {
            "question": "戦国時代に開発が進み、朝鮮から伝わった「灰吹法」によって産出量が激増した、島根県にある世界遺産の鉱山は何ですか。",
            "options": [
                "佐渡金山",
                "石見銀山",
                "足尾銅山",
                "別子銅山"
            ],
            "answer": 1,
            "hint": "大内氏や毛利氏が支配しました。"
        },
        {
            "question": "1549年、キリスト教を伝えるために来日したフランシスコ・ザビエルが最初に上陸した場所はどこですか。",
            "options": [
                "長崎",
                "鹿児島",
                "平戸",
                "山口"
            ],
            "answer": 1,
            "hint": "九州の南端です。"
        },
        {
            "question": "室町時代、京都の町衆によって行われた祭りで、応仁の乱後に復興し、現在も続いているものは何ですか。",
            "options": [
                "葵祭",
                "祇園祭",
                "時代祭",
                "天神祭"
            ],
            "answer": 1,
            "hint": "豪華な「山鉾」が巡行します。"
        },
        {
            "question": "鎌倉時代、災害や飢饉の様子を描き、世の無常（はかなさ）を記した鴨長明の随筆集は何ですか。",
            "options": [
                "徒然草",
                "方丈記",
                "平家物語",
                "土佐日記"
            ],
            "answer": 1,
            "hint": "小さな庵（方丈）で書かれました。"
        },
        {
            "question": "琵琶法師によって語られ、平氏の繁栄と滅亡を描いた軍記物語は何ですか。",
            "options": [
                "源氏物語",
                "平家物語",
                "太平記",
                "義経記"
            ],
            "answer": 1,
            "hint": "「祇園精舎の鐘の声」で始まります。"
        },
        {
            "question": "鎌倉時代、後鳥羽上皇の命令で藤原定家らが編集した和歌集は何ですか。",
            "options": [
                "万葉集",
                "古今和歌集",
                "新古今和歌集",
                "金槐和歌集"
            ],
            "answer": 2,
            "hint": "「新」しい「古今」和歌集です。"
        },
        {
            "question": "東大寺南大門にある金剛力士像を制作した、運慶や快慶らが所属していた仏師の集団を何といいますか。",
            "options": [
                "円派",
                "院派",
                "慶派",
                "奈良派"
            ],
            "answer": 2,
            "hint": "名前に「慶」の字がつく仏師たちです。"
        },
        {
            "question": "元寇（文永の役・弘安の役）の様子を描いた絵巻物で、御家人の竹崎季長が自分の活躍を幕府に訴えるために描かせたものは何ですか。",
            "options": [
                "鳥獣戯画",
                "蒙古襲来絵詞",
                "源氏物語絵巻",
                "伴大納言絵巻"
            ],
            "answer": 1,
            "hint": "教科書によく出てくる、馬上の武士とモンゴル兵が描かれた絵です。"
        },
        {
            "question": "元寇の際、博多湾の沿岸に築かれた石造りの防御壁を何といいますか。",
            "options": [
                "土塁",
                "防塁（石塁）",
                "万里の長城",
                "城壁"
            ],
            "answer": 1,
            "hint": "石を積み上げて騎馬の侵入を防ぎました。"
        },
        {
            "question": "元軍が使用した火薬兵器で、大きな音と光で日本の騎馬武者を驚かせたものは何ですか。",
            "options": [
                "鉄砲",
                "てつはう",
                "大砲",
                "ロケット"
            ],
            "answer": 1,
            "hint": "ボールのような形をした爆弾です。"
        },
        {
            "question": "足利義満が日明貿易で輸入し、日本国内で標準的な通貨として使われた銅銭の名前は何ですか。",
            "options": [
                "和同開珎",
                "寛永通宝",
                "永楽通宝",
                "富本銭"
            ],
            "answer": 2,
            "hint": "織田信長の旗印にも描かれています。"
        },
        {
            "question": "琉球王国（沖縄）の王宮で、世界遺産にも登録されている城の名前は何ですか。",
            "options": [
                "首里城",
                "中城城",
                "今帰仁城",
                "五稜郭"
            ],
            "answer": 0,
            "hint": "那覇市の高台にあります。"
        },
        {
            "question": "1457年、アイヌの人々が和人の不当な取引に怒り、蜂起した戦いの中心となった首長は誰ですか。",
            "options": [
                "シャクシャイン",
                "コシャマイン",
                "アテルイ",
                "オムシャ"
            ],
            "answer": 1,
            "hint": "「コ」から始まる名前です。"
        },
        {
            "question": "アイヌの人々が住んでいた、草ぶきの伝統的な家屋を何といいますか。",
            "options": [
                "ゲル",
                "パオ",
                "チセ",
                "竪穴住居"
            ],
            "answer": 2,
            "hint": "アイヌ語で「家」を意味します。"
        },
        {
            "question": "アイヌの人々が和人（日本人）との交易で輸出した主な海産物は何ですか。",
            "options": [
                "マグロ",
                "昆布（コンブ）",
                "タイ",
                "真珠"
            ],
            "answer": 1,
            "hint": "出し汁に使われる海藻です。"
        },
        {
            "question": "室町時代、農村の自治組織「惣」で作られた、村の決まりごとを何といいますか。",
            "options": [
                "御成敗式目",
                "分国法",
                "惣掟（村掟）",
                "武家諸法度"
            ],
            "answer": 2,
            "hint": "これに違反すると村八分などの罰を受けました。"
        },
        {
            "question": "室町時代、年貢の軽減や借金の帳消し（徳政）を求めて、農民や馬借が起こした実力行使を何といいますか。",
            "options": [
                "一揆（土一揆）",
                "ストライキ",
                "デモ",
                "革命"
            ],
            "answer": 0,
            "hint": "「正長の土一揆」などが有名です。"
        },
        {
            "question": "1467年の応仁の乱で、東軍の総大将となった管領は誰ですか。",
            "options": [
                "山名宗全",
                "細川勝元",
                "足利義政",
                "日野富子"
            ],
            "answer": 1,
            "hint": "「細川」氏です。"
        },
        {
            "question": "1467年の応仁の乱で、西軍の総大将となった守護大名は誰ですか。",
            "options": [
                "山名宗全",
                "細川勝元",
                "足利義視",
                "楠木正成"
            ],
            "answer": 0,
            "hint": "「山名」氏です。"
        },
        {
            "question": "戦国時代、越前（福井県）の一乗谷を拠点とし、独自の城下町を築いた戦国大名は誰ですか。",
            "options": [
                "武田氏",
                "上杉氏",
                "朝倉氏",
                "北条氏"
            ],
            "answer": 2,
            "hint": "遺跡がほぼ完全な形で発掘されました。"
        },
        {
            "question": "小田原城を拠点に、関東地方一円を支配した戦国大名は誰ですか。",
            "options": [
                "北条氏（後北条氏）",
                "伊達氏",
                "徳川氏",
                "今川氏"
            ],
            "answer": 0,
            "hint": "北条早雲から始まる一族です。"
        },
        {
            "question": "中国地方の覇者となり、「三本の矢」の逸話で知られる戦国大名は誰ですか。",
            "options": [
                "毛利元就",
                "尼子経久",
                "大内義隆",
                "長宗我部元親"
            ],
            "answer": 0,
            "hint": "息子たちに団結を説きました。"
        },
        {
            "question": "室町時代に雪舟が大成した、墨の濃淡で自然や風景を描く絵画様式は何ですか。",
            "options": [
                "大和絵",
                "水墨画",
                "浮世絵",
                "油絵"
            ],
            "answer": 1,
            "hint": "中国（明）で学んだ技法です。"
        },
        {
            "question": "室町時代、京都の町並みや人々の生活（祇園祭など）を描いた屏風絵を何といいますか。",
            "options": [
                "洛中洛外図屏風",
                "唐獅子図屏風",
                "風神雷神図屏風",
                "東海道五十三次"
            ],
            "answer": 0,
            "hint": "「洛中」は京都の中、「洛外」は京都の外という意味です。"
        },
        {
            "question": "室町時代に流行した、絵入りの短編小説（『一寸法師』など）を何といいますか。",
            "options": [
                "御伽草子",
                "源氏物語",
                "今昔物語集",
                "仮名草子"
            ],
            "answer": 0,
            "hint": "「おとぎ話」の語源です。"
        },
        {
            "question": "室町時代、和歌の上の句と下の句を、複数の人が次々に詠みつないでいく文芸は何ですか。",
            "options": [
                "俳諧",
                "連歌",
                "川柳",
                "狂歌"
            ],
            "answer": 1,
            "hint": "寄合の場での交流としても重要でした。"
        },
        {
            "question": "室町時代に大成された「能」の合間に演じられた、滑稽な（笑える）劇は何ですか。",
            "options": [
                "歌舞伎",
                "狂言",
                "漫才",
                "落語"
            ],
            "answer": 1,
            "hint": "当時の話し言葉（口語）が使われています。"
        },
        {
            "question": "銀閣（慈照寺）にある、現存する最古の書院造の遺構とされる部屋の名前は何ですか。",
            "options": [
                "東求堂同仁斎",
                "燕の御所",
                "白書院",
                "待庵"
            ],
            "answer": 0,
            "hint": "四畳半の茶室の始まりと言われています。"
        },
        {
            "question": "茶道の祖とも呼ばれ、村田珠光や千利休に影響を与えた、堺の商人は誰ですか。",
            "options": [
                "武野紹鴎",
                "今井宗久",
                "古田織部",
                "小堀遠州"
            ],
            "answer": 0,
            "hint": "教科書の発展的な記述に含まれることがあります。"
        },
        {
            "question": "戦国時代、鉄砲の生産地として栄えた近畿地方の場所は、堺とあと一つはどこですか。",
            "options": [
                "国友",
                "奈良",
                "吉野",
                "安土"
            ],
            "answer": 0,
            "hint": "現在の滋賀県長浜市にあります。"
        },
        {
            "question": "南蛮貿易で日本にもたらされた、当時のヨーロッパの医術を何といいますか。",
            "options": [
                "漢方",
                "南蛮外科",
                "蘭学",
                "アーユルヴェーダ"
            ],
            "answer": 1,
            "hint": "戦場での怪我の治療などに役立ちました。"
        },
        {
            "question": "南蛮人（ポルトガル人など）が伝えた文化で、パン、カステラ、タバコなどと共に日本に入ってきた「かるた」は、何語に由来しますか。",
            "options": [
                "英語",
                "ポルトガル語",
                "オランダ語",
                "中国語"
            ],
            "answer": 1,
            "hint": "「カード」を意味する言葉です。"
        },
        {
            "question": "1582年、イエズス会の宣教師ヴァリニャーノの勧めでローマ教皇のもとに派遣された少年たちの使節団を何といいますか。",
            "options": [
                "天正遣欧少年使節",
                "慶長遣欧使節",
                "岩倉使節団",
                "遣唐使"
            ],
            "answer": 0,
            "hint": "伊東マンショらが派遣されました。"
        },
        {
            "question": "室町時代、堺や博多などの港町で、市政を運営した裕福な商人たちを何といいますか。",
            "options": [
                "町衆",
                "会合衆（えごうしゅう）",
                "家老",
                "大名"
            ],
            "answer": 1,
            "hint": "堺では36人の会合衆が有名です。"
        },
        {
            "question": "室町時代、馬を使って物資を運んだ運送業者を何といいますか。",
            "options": [
                "馬借",
                "車借",
                "問屋",
                "飛脚"
            ],
            "answer": 0,
            "hint": "交通の要所で活躍し、一揆にも参加しました。"
        },
        {
            "question": "室町時代、高利貸しを営み、土一揆の襲撃対象にもなった質屋のような業者を何といいますか。",
            "options": [
                "土倉（どそう）",
                "両替商",
                "蔵元",
                "問屋"
            ],
            "answer": 0,
            "hint": "「酒屋」と並んで金融業を行いました。"
        },
        {
            "question": "戦国大名の武田信玄が定めた分国法（法律）の名前は何ですか。",
            "options": [
                "甲州法度之次第",
                "今川仮名目録",
                "塵芥集",
                "御成敗式目"
            ],
            "answer": 0,
            "hint": "「甲州」は山梨県の旧国名です。"
        },
        {
            "question": "室町時代、京都五山の僧侶たちが漢詩文を作って楽しんだ文学を何といいますか。",
            "options": [
                "五山文学",
                "国風文化",
                "元禄文化",
                "朱子学"
            ],
            "answer": 0,
            "hint": "中国（明）の影響を受けた禅僧の文化です。"
        },
        {
            "question": "東山文化の時期、水墨画や庭園に取り入れられた、禅宗の影響を受けた「簡素で静かな美しさ」を表す言葉は何ですか。",
            "options": [
                "わび・さび",
                "もののあはれ",
                "幽玄",
                "粋"
            ],
            "answer": 0,
            "hint": "茶の湯の精神にも通じます。"
        },
        {
            "question": "戦国時代、家臣が主君を倒して地位を奪う風潮を「下克上」といいますが、この言葉の意味として最も近いものはどれですか。",
            "options": [
                "下が上に勝つ",
                "上が下を助ける",
                "みんなで協力する",
                "外国と戦う"
            ],
            "answer": 0,
            "hint": "実力主義の時代を表す言葉です。"
        },
        {
            "question": "室町幕府において、将軍の補佐役である「管領」に就任できた三つの家柄（三管領）に含まれないのはどれですか。",
            "options": [
                "細川氏",
                "畠山氏",
                "斯波氏",
                "山名氏"
            ],
            "answer": 3,
            "hint": "山名氏は「侍所」の長官になれる「四職」の一つです。"
        },
        {
            "question": "1429年に琉球王国を統一した尚巴志が拠点とした、那覇にある貿易港は何ですか。",
            "options": [
                "那覇港",
                "博多港",
                "堺港",
                "長崎港"
            ],
            "answer": 0,
            "hint": "中国や日本、東南アジアとの貿易で賑わいました。"
        },
        {
            "question": "室町時代、農村で灌漑（かんがい）のために使われた、中国から伝わった足踏み式の揚水機は何ですか。",
            "options": [
                "竜骨車",
                "水車",
                "唐箕",
                "千歯扱き"
            ],
            "answer": 0,
            "hint": "龍の背骨のような形をしています。"
        },
        {
            "question": "室町時代、京都の西陣で作られ始めた、現在も伝統工芸品として有名な織物は何ですか。",
            "options": [
                "西陣織",
                "博多織",
                "加賀友禅",
                "結城紬"
            ],
            "answer": 0,
            "hint": "応仁の乱の西軍の陣地跡で発展しました。"
        },
        {
            "question": "鎌倉時代、日本で初めて武家政権のための法律（御成敗式目）を制定した人物は誰ですか。",
            "options": [
                "北条泰時",
                "北条時宗",
                "源頼朝",
                "足利尊氏"
            ],
            "answer": 0,
            "hint": "第3代執権です。"
        }
    ]
};
