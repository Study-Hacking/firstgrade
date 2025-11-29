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
            "look",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'You' -> look"
    },
    {
        "question": "That bike ( ? ) new.",
        "options": [
            "looks",
            "looking",
            "look",
            "looked"
        ],
        "answer": 0,
        "hint": "Subject 'That bike' -> looks"
    },
    {
        "question": "\u5f7c\u306f\u5fd9\u3057\u305d\u3046\u3067\u3059\u3002\u2192 He ( ? ).",
        "options": [
            "are busy",
            "look busy",
            "looks busy",
            "is busy"
        ],
        "answer": 2,
        "hint": "Subject 'He' -> looks"
    },
    {
        "question": "I ( ? ) sad.",
        "options": [
            "looked",
            "looking",
            "looks",
            "look"
        ],
        "answer": 3,
        "hint": "Subject 'I' -> look"
    },
    {
        "question": "Those bikes ( ? ) old.",
        "options": [
            "looked",
            "looking",
            "look",
            "looks"
        ],
        "answer": 2,
        "hint": "Subject 'Those bikes' -> look"
    },
    {
        "question": "\u5f7c\u5973\u306f\u6687\u305d\u3046\u3067\u3059\u3002\u2192 She ( ? ).",
        "options": [
            "is free",
            "looks free",
            "are free",
            "look free"
        ],
        "answer": 1,
        "hint": "Subject 'She' -> looks"
    },
    {
        "question": "He ( ? ) busy.",
        "options": [
            "looking",
            "look",
            "looks",
            "looked"
        ],
        "answer": 2,
        "hint": "Subject 'He' -> looks"
    },
    {
        "question": "The flower ( ? ) nice.",
        "options": [
            "looked",
            "looking",
            "looks",
            "look"
        ],
        "answer": 2,
        "hint": "Subject 'The flower' -> looks"
    },
    {
        "question": "\u305d\u308c\u306f\u9762\u767d\u305d\u3046\u3067\u3059\u3002\u2192 It ( ? ).",
        "options": [
            "looks interesting",
            "are interesting",
            "is interesting",
            "look interesting"
        ],
        "answer": 0,
        "hint": "Subject 'It' -> looks"
    },
    {
        "question": "She ( ? ) tired.",
        "options": [
            "looking",
            "looks",
            "look",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'She' -> looks"
    },
    {
        "question": "The flowers ( ? ) nice.",
        "options": [
            "looking",
            "look",
            "looked",
            "looks"
        ],
        "answer": 1,
        "hint": "Subject 'The flowers' -> look"
    },
    {
        "question": "\u30b1\u30f3\u306f\u7720\u305d\u3046\u3067\u3059\u3002\u2192 Ken ( ? ).",
        "options": [
            "is sleepy",
            "looks sleepy",
            "are sleepy",
            "look sleepy"
        ],
        "answer": 1,
        "hint": "Subject 'Ken' -> looks"
    },
    {
        "question": "It ( ? ) good.",
        "options": [
            "looking",
            "looked",
            "look",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'It' -> looks"
    },
    {
        "question": "Everyone ( ? ) busy.",
        "options": [
            "looks",
            "looked",
            "look",
            "looking"
        ],
        "answer": 0,
        "hint": "Subject 'Everyone' -> looks"
    },
    {
        "question": "\u30a8\u30df\u306f\u60b2\u3057\u305d\u3046\u3067\u3059\u3002\u2192 Emi ( ? ).",
        "options": [
            "looks sad",
            "is sad",
            "look sad",
            "are sad"
        ],
        "answer": 0,
        "hint": "Subject 'Emi' -> looks"
    },
    {
        "question": "We ( ? ) sleepy.",
        "options": [
            "looked",
            "looking",
            "looks",
            "look"
        ],
        "answer": 3,
        "hint": "Subject 'We' -> look"
    },
    {
        "question": "Nobody ( ? ) tired.",
        "options": [
            "look",
            "looks",
            "looking",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'Nobody' -> looks"
    },
    {
        "question": "\u305d\u306e\u72ac\u306f\u5927\u304d\u305d\u3046\u3067\u3059\u3002\u2192 The dog ( ? ).",
        "options": [
            "is big",
            "looks big",
            "look big",
            "are big"
        ],
        "answer": 2,
        "hint": "Subject 'dog' -> look"
    },
    {
        "question": "They ( ? ) angry.",
        "options": [
            "looks",
            "looked",
            "looking",
            "look"
        ],
        "answer": 3,
        "hint": "Subject 'They' -> look"
    },
    {
        "question": "My mother ( ? ) young.",
        "options": [
            "look",
            "looked",
            "looking",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'My mother' -> looks"
    },
    {
        "question": "\u305d\u306e\u732b\u306f\u5c0f\u3055\u305d\u3046\u3067\u3059\u3002\u2192 The cat ( ? ).",
        "options": [
            "is small",
            "looks small",
            "look small",
            "are small"
        ],
        "answer": 1,
        "hint": "Subject 'cat' -> looks"
    },
    {
        "question": "Ken ( ? ) hungry.",
        "options": [
            "look",
            "looked",
            "looks",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'Ken' -> looks"
    },
    {
        "question": "My parents ( ? ) kind.",
        "options": [
            "looks",
            "looked",
            "looking",
            "look"
        ],
        "answer": 3,
        "hint": "Subject 'My parents' -> look"
    },
    {
        "question": "\u3053\u306e\u672c\u306f\u826f\u3055\u305d\u3046\u3067\u3059\u3002\u2192 This book ( ? ).",
        "options": [
            "are good",
            "looks good",
            "is good",
            "look good"
        ],
        "answer": 1,
        "hint": "Subject 'book' -> looks"
    },
    {
        "question": "Emi ( ? ) thirsty.",
        "options": [
            "looks",
            "looked",
            "look",
            "looking"
        ],
        "answer": 0,
        "hint": "Subject 'Emi' -> looks"
    },
    {
        "question": "Your face ( ? ) red.",
        "options": [
            "looks",
            "looking",
            "look",
            "looked"
        ],
        "answer": 0,
        "hint": "Subject 'Your face' -> looks"
    },
    {
        "question": "\u3042\u306e\u672c\u306f\u96e3\u3057\u305d\u3046\u3067\u3059\u3002\u2192 That book ( ? ).",
        "options": [
            "looks difficult",
            "look difficult",
            "is difficult",
            "are difficult"
        ],
        "answer": 0,
        "hint": "Subject 'book' -> looks"
    },
    {
        "question": "The dog ( ? ) cute.",
        "options": [
            "look",
            "looks",
            "looking",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'The dog' -> looks"
    },
    {
        "question": "His eyes ( ? ) blue.",
        "options": [
            "look",
            "looking",
            "looks",
            "looked"
        ],
        "answer": 0,
        "hint": "Subject 'His eyes' -> look"
    },
    {
        "question": "\u3042\u306a\u305f\u306f\u75b2\u308c\u3066\u898b\u3048\u307e\u3059\u3002\u2192 You ( ? ).",
        "options": [
            "are tired",
            "look tired",
            "looks tired",
            "is tired"
        ],
        "answer": 1,
        "hint": "Subject 'You' -> look"
    },
    {
        "question": "The cats ( ? ) small.",
        "options": [
            "looked",
            "looking",
            "looks",
            "look"
        ],
        "answer": 3,
        "hint": "Subject 'The cats' -> look"
    },
    {
        "question": "The sky ( ? ) dark.",
        "options": [
            "looked",
            "looking",
            "look",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'The sky' -> looks"
    },
    {
        "question": "\u79c1\u306f\u5909\u306b\u898b\u3048\u307e\u3059\u304b\uff1f\u2192 Do I ( ? )?",
        "options": [
            "look strange",
            "are strange",
            "is strange",
            "looks strange"
        ],
        "answer": 0,
        "hint": "Subject 'I' -> look"
    },
    {
        "question": "You ( ? ) fine.",
        "options": [
            "look",
            "looks",
            "looking",
            "looked"
        ],
        "answer": 0,
        "hint": "Subject 'You' -> look"
    },
    {
        "question": "The rain ( ? ) cold.",
        "options": [
            "looked",
            "looking",
            "look",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'The rain' -> looks"
    },
    {
        "question": "\u5f7c\u306f\u89aa\u5207\u305d\u3046\u3067\u3059\u3002\u2192 He ( ? ).",
        "options": [
            "are kind",
            "looks kind",
            "is kind",
            "look kind"
        ],
        "answer": 1,
        "hint": "Subject 'He' -> looks"
    },
    {
        "question": "He ( ? ) sick.",
        "options": [
            "look",
            "looks",
            "looking",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'He' -> looks"
    },
    {
        "question": "The movie ( ? ) fun.",
        "options": [
            "looked",
            "looking",
            "looks",
            "look"
        ],
        "answer": 2,
        "hint": "Subject 'The movie' -> looks"
    },
    {
        "question": "\u5148\u751f\u306f\u53b3\u3057\u305d\u3046\u3067\u3059\u3002\u2192 The teacher ( ? ).",
        "options": [
            "is strict",
            "looks strict",
            "are strict",
            "look strict"
        ],
        "answer": 1,
        "hint": "Subject 'teacher' -> looks"
    },
    {
        "question": "She ( ? ) excited.",
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
        "question": "The game ( ? ) long.",
        "options": [
            "looking",
            "looks",
            "looked",
            "look"
        ],
        "answer": 1,
        "hint": "Subject 'The game' -> looks"
    },
    {
        "question": "\u305d\u306e\u30b1\u30fc\u30ad\u306f\u7518\u305d\u3046\u3067\u3059\u3002\u2192 The cake ( ? ).",
        "options": [
            "looks sweet",
            "is sweet",
            "are sweet",
            "look sweet"
        ],
        "answer": 0,
        "hint": "Subject 'cake' -> looks"
    },
    {
        "question": "It ( ? ) delicious.",
        "options": [
            "look",
            "looked",
            "looks",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'It' -> looks"
    },
    {
        "question": "This pen ( ? ) useful.",
        "options": [
            "looks",
            "looked",
            "look",
            "looking"
        ],
        "answer": 0,
        "hint": "Subject 'This pen' -> looks"
    },
    {
        "question": "\u305d\u306e\u30ab\u30ec\u30fc\u306f\u8f9b\u305d\u3046\u3067\u3059\u3002\u2192 The curry ( ? ).",
        "options": [
            "looks spicy",
            "is spicy",
            "look spicy",
            "are spicy"
        ],
        "answer": 0,
        "hint": "Subject 'curry' -> looks"
    },
    {
        "question": "The teacher ( ? ) scary.",
        "options": [
            "looked",
            "look",
            "looking",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'The teacher' -> looks"
    },
    {
        "question": "These pens ( ? ) good.",
        "options": [
            "looks",
            "looked",
            "looking",
            "look"
        ],
        "answer": 3,
        "hint": "Subject 'These pens' -> look"
    },
    {
        "question": "\u5f7c\u306f\u82e5\u304f\u898b\u3048\u307e\u3059\u3002\u2192 He ( ? ).",
        "options": [
            "are young",
            "is young",
            "looks young",
            "look young"
        ],
        "answer": 2,
        "hint": "Subject 'He' -> looks"
    },
    {
        "question": "My friend ( ? ) kind.",
        "options": [
            "looked",
            "looks",
            "looking",
            "look"
        ],
        "answer": 1,
        "hint": "Subject 'My friend' -> looks"
    },
    {
        "question": "You ( ? ) ( happy ).",
        "options": [
            "looks",
            "looking",
            "look",
            "looked"
        ],
        "answer": 2,
        "hint": "Subject 'You' -> look"
    },
    {
        "question": "\u5f7c\u5973\u306f\u5e74\u5bc4\u308a\u306b\u898b\u3048\u307e\u3059\u3002\u2192 She ( ? ).",
        "options": [
            "look old",
            "is old",
            "are old",
            "looks old"
        ],
        "answer": 3,
        "hint": "Subject 'She' -> looks"
    },
    {
        "question": "My friends ( ? ) cool.",
        "options": [
            "looks",
            "looked",
            "look",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'My friends' -> look"
    },
    {
        "question": "He ( ? ) ( sad ).",
        "options": [
            "looked",
            "look",
            "looks",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'He' -> looks"
    },
    {
        "question": "\u7686\u3001\u697d\u3057\u305d\u3046\u3067\u3059\u3002\u2192 Everyone ( ? ).",
        "options": [
            "looks happy",
            "are happy",
            "look happy",
            "is happy"
        ],
        "answer": 0,
        "hint": "Subject 'Everyone' -> looks"
    },
    {
        "question": "This book ( ? ) hard.",
        "options": [
            "look",
            "looks",
            "looked",
            "looking"
        ],
        "answer": 1,
        "hint": "Subject 'This book' -> looks"
    },
    {
        "question": "She ( ? ) ( busy ).",
        "options": [
            "look",
            "looked",
            "looking",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'She' -> looks"
    },
    {
        "question": "\u3042\u306e\u7537\u306e\u4eba\u306f\u5f37\u305d\u3046\u3067\u3059\u3002\u2192 That man ( ? ).",
        "options": [
            "looks strong",
            "look strong",
            "are strong",
            "is strong"
        ],
        "answer": 0,
        "hint": "Subject 'man' -> looks"
    },
    {
        "question": "That car ( ? ) fast.",
        "options": [
            "looks",
            "looked",
            "look",
            "looking"
        ],
        "answer": 0,
        "hint": "Subject 'That car' -> looks"
    },
    {
        "question": "It ( ? ) ( nice ).",
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
        "question": "\u3042\u306e\u5c11\u5e74\u306f\u5f31\u305d\u3046\u3067\u3059\u3002\u2192 That boy ( ? ).",
        "options": [
            "look weak",
            "looks weak",
            "is weak",
            "are weak"
        ],
        "answer": 1,
        "hint": "Subject 'boy' -> looks"
    },
    {
        "question": "You and I ( ? ) busy.",
        "options": [
            "looking",
            "looked",
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
            "look",
            "looks",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'They' -> look"
    },
    {
        "question": "\u3042\u306a\u305f\u306e\u8eca\u306f\u901f\u305d\u3046\u3067\u3059\u3002\u2192 Your car ( ? ).",
        "options": [
            "looks fast",
            "are fast",
            "look fast",
            "is fast"
        ],
        "answer": 0,
        "hint": "Subject 'car' -> looks"
    },
    {
        "question": "Ken and Tom ( ? ) strong.",
        "options": [
            "looking",
            "look",
            "looks",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'Ken and Tom' -> look"
    },
    {
        "question": "We ( ? ) ( fine ).",
        "options": [
            "look",
            "looked",
            "looks",
            "looking"
        ],
        "answer": 0,
        "hint": "Subject 'We' -> look"
    },
    {
        "question": "\u5f7c\u306e\u81ea\u8ee2\u8eca\u306f\u9ad8\u305d\u3046\u3067\u3059\u3002\u2192 His bike ( ? ).",
        "options": [
            "is expensive",
            "looks expensive",
            "are expensive",
            "look expensive"
        ],
        "answer": 1,
        "hint": "Subject 'bike' -> looks"
    },
    {
        "question": "Your father ( ? ) tall.",
        "options": [
            "looking",
            "looks",
            "look",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'Your father' -> looks"
    },
    {
        "question": "Ken ( ? ) ( hungry ).",
        "options": [
            "look",
            "looked",
            "looking",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'Ken' -> looks"
    },
    {
        "question": "\u305d\u306e\u30c6\u30b9\u30c8\u306f\u7c21\u5358\u305d\u3046\u3067\u3059\u3002\u2192 The test ( ? ).",
        "options": [
            "are easy",
            "looks easy",
            "is easy",
            "look easy"
        ],
        "answer": 1,
        "hint": "Subject 'test' -> looks"
    },
    {
        "question": "His sister ( ? ) pretty.",
        "options": [
            "look",
            "looking",
            "looks",
            "looked"
        ],
        "answer": 2,
        "hint": "Subject 'His sister' -> looks"
    },
    {
        "question": "Emi ( ? ) ( sleepy ).",
        "options": [
            "looks",
            "look",
            "looked",
            "looking"
        ],
        "answer": 0,
        "hint": "Subject 'Emi' -> looks"
    },
    {
        "question": "\u8cea\u554f\u306f\u96e3\u3057\u305d\u3046\u3067\u3059\u3002\u2192 The question ( ? ).",
        "options": [
            "look difficult",
            "are difficult",
            "looks difficult",
            "is difficult"
        ],
        "answer": 2,
        "hint": "Subject 'question' -> looks"
    },
    {
        "question": "The house ( ? ) big.",
        "options": [
            "looking",
            "look",
            "looked",
            "looks"
        ],
        "answer": 3,
        "hint": "Subject 'The house' -> looks"
    },
    {
        "question": "The dog ( ? ) ( cute ).",
        "options": [
            "looking",
            "look",
            "looks",
            "looked"
        ],
        "answer": 2,
        "hint": "Subject 'The dog' -> looks"
    },
    {
        "question": "\u5929\u6c17\u306f\u826f\u3055\u305d\u3046\u3067\u3059\u3002\u2192 The weather ( ? ).",
        "options": [
            "look nice",
            "looks nice",
            "are nice",
            "is nice"
        ],
        "answer": 1,
        "hint": "Subject 'weather' -> looks"
    },
    {
        "question": "The rooms ( ? ) clean.",
        "options": [
            "looked",
            "look",
            "looks",
            "looking"
        ],
        "answer": 1,
        "hint": "Subject 'The rooms' -> look"
    },
    {
        "question": "You ( ? ) ( angry ).",
        "options": [
            "look",
            "looks",
            "looking",
            "looked"
        ],
        "answer": 0,
        "hint": "Subject 'You' -> look"
    },
    {
        "question": "\u305d\u306e\u30cb\u30e5\u30fc\u30b9\u306f\u9762\u767d\u305d\u3046\u3067\u3059\u3002\u2192 The news ( ? ).",
        "options": [
            "is interesting",
            "are interesting",
            "looks interesting",
            "look interesting"
        ],
        "answer": 2,
        "hint": "Subject 'news' -> looks"
    },
    {
        "question": "The question ( ? ) easy.",
        "options": [
            "look",
            "looked",
            "looks",
            "looking"
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
            "looks true",
            "look true",
            "are true",
            "is true"
        ],
        "answer": 0,
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
            "look",
            "looks",
            "looking",
            "looked"
        ],
        "answer": 1,
        "hint": "Subject 'She' -> looks"
    },
    {
        "question": "\u5f7c\u306f\u5143\u6c17\u3058\u3083\u306a\u3055\u305d\u3046\u3067\u3059\u3002\u2192 He doesn't ( ? ).",
        "options": [
            "looks well",
            "looked well",
            "looking well",
            "look well"
        ],
        "answer": 3,
        "hint": "After doesn't, use base form 'look'."
    },
    {
        "question": "This apple ( ? ) sweet.",
        "options": [
            "looked",
            "looks",
            "looking",
            "look"
        ],
        "answer": 1,
        "hint": "Subject 'This apple' -> looks"
    },
    {
        "question": "It ( ? ) ( great ).",
        "options": [
            "looked",
            "look",
            "looks",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'It' -> looks"
    },
    {
        "question": "\u5f7c\u5973\u306f\u5e78\u305b\u3058\u3083\u306a\u3055\u305d\u3046\u3067\u3059\u3002\u2192 She doesn't ( ? ).",
        "options": [
            "looks happy",
            "looking happy",
            "looked happy",
            "look happy"
        ],
        "answer": 3,
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
            "looks",
            "looked",
            "looking",
            "look"
        ],
        "answer": 0,
        "hint": "Subject 'That' -> looks"
    },
    {
        "question": "\u305d\u308c\u306f\u826f\u304f\u898b\u3048\u307e\u305b\u3093\u3002\u2192 It doesn't ( ? ).",
        "options": [
            "look good",
            "looks good",
            "looked good",
            "looking good"
        ],
        "answer": 0,
        "hint": "After doesn't, use base form 'look'."
    },
    {
        "question": "The man ( ? ) rich.",
        "options": [
            "looked",
            "look",
            "looks",
            "looking"
        ],
        "answer": 2,
        "hint": "Subject 'The man' -> looks"
    },
    {
        "question": "This ( ? ) ( new ).",
        "options": [
            "looks",
            "look",
            "looked",
            "looking"
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
            "looked",
            "looks",
            "look",
            "looking"
        ],
        "answer": 1,
        "hint": "Subject 'The woman' -> looks"
    },
    {
        "question": "You ( ? ) ( happy ).",
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
            "look",
            "looks",
            "looked",
            "looking"
        ],
        "answer": 1,
        "hint": "Subject 'The boy' -> looks"
    },
    {
        "question": "\u3042\u306a\u305f\u306f\u5e78\u305b\u305d\u3046\u3067\u3059\u3002\u2192 You ( ? ) ( ? ).",
        "options": [
            "looks",
            "looked",
            "look",
            "looking"
        ],
        "answer": 0,
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
            "Does",
            "Was",
            "Do",
            "Did"
        ],
        "answer": 3,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did you ( played )? \u2192 ( ? )",
        "options": [
            "played",
            "plays",
            "play",
            "playing"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you play? (Yes) \u2192 Yes, I ( ? ).",
        "options": [
            "do",
            "didn't",
            "did",
            "don't"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "You watched. \u2192 ( ? ) you watch?",
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
        "question": "Did he ( watched )? \u2192 ( ? )",
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
            "Did",
            "Do",
            "Was",
            "Does"
        ],
        "answer": 0,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did she ( cooked )? \u2192 ( ? )",
        "options": [
            "cooking",
            "cook",
            "cooks",
            "cooked"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did he go? (Yes) \u2192 Yes, he ( ? ).",
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
        "question": "You studied. \u2192 ( ? ) you study?",
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
        "question": "Did they ( studied )? \u2192 ( ? )",
        "options": [
            "study",
            "studys",
            "studied",
            "studying"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did he go? (No) \u2192 No, he ( ? ).",
        "options": [
            "didn't",
            "do",
            "don't",
            "did"
        ],
        "answer": 0,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "You went. \u2192 ( ? ) you go?",
        "options": [
            "Do",
            "Does",
            "Did",
            "Was"
        ],
        "answer": 2,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did Ken ( went )? \u2192 ( ? )",
        "options": [
            "going",
            "gos",
            "went",
            "go"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did she eat? (Yes) \u2192 Yes, she ( ? ).",
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
        "question": "You came. \u2192 ( ? ) you come?",
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
        "question": "Did you ( came )? \u2192 ( ? )",
        "options": [
            "came",
            "comes",
            "come",
            "comeing"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did she eat? (No) \u2192 No, she ( ? ).",
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
        "question": "You had. \u2192 ( ? ) you have?",
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
        "question": "Did he ( had )? \u2192 ( ? )",
        "options": [
            "had",
            "haves",
            "haveing",
            "have"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did they run? (Yes) \u2192 Yes, they ( ? ).",
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
        "question": "You ate. \u2192 ( ? ) you eat?",
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
        "question": "Did she ( ate )? \u2192 ( ? )",
        "options": [
            "ate",
            "eat",
            "eats",
            "eating"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did they run? (No) \u2192 No, they ( ? ).",
        "options": [
            "do",
            "did",
            "didn't",
            "don't"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "You saw. \u2192 ( ? ) you see?",
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
        "question": "Did it ( rained )? \u2192 ( ? )",
        "options": [
            "rains",
            "rained",
            "rain",
            "raining"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did Ken study? (Yes) \u2192 Yes, he ( ? ).",
        "options": [
            "do",
            "don't",
            "did",
            "didn't"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "You bought. \u2192 ( ? ) you buy?",
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
        "question": "Did you ( saw )? \u2192 ( ? )",
        "options": [
            "seeing",
            "see",
            "saw",
            "sees"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did Emi cook? (Yes) \u2192 Yes, she ( ? ).",
        "options": [
            "did",
            "do",
            "don't",
            "didn't"
        ],
        "answer": 0,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "He played. \u2192 ( ? ) he play?",
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
        "question": "Did he ( bought )? \u2192 ( ? )",
        "options": [
            "buy",
            "buys",
            "buying",
            "bought"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did the dog run? (Yes) \u2192 Yes, it ( ? ).",
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
        "question": "She washed. \u2192 ( ? ) she wash?",
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
        "question": "Did she ( wrote )? \u2192 ( ? )",
        "options": [
            "writes",
            "write",
            "wrote",
            "writeing"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you watch TV? (Yes) \u2192 Yes, I ( ? ).",
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
        "question": "They ran. \u2192 ( ? ) they run?",
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
        "question": "Did they ( ran )? \u2192 ( ? )",
        "options": [
            "runing",
            "runs",
            "ran",
            "run"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you study? (No) \u2192 No, I ( ? ).",
        "options": [
            "don't",
            "didn't",
            "did",
            "do"
        ],
        "answer": 1,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "Ken read. \u2192 ( ? ) Ken read?",
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
        "question": "Did you ( spoke )? \u2192 ( ? )",
        "options": [
            "spoke",
            "speaking",
            "speak",
            "speaks"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did he play soccer? (Yes) \u2192 Yes, he ( ? ).",
        "options": [
            "do",
            "didn't",
            "did",
            "don't"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "Emi wrote. \u2192 ( ? ) Emi write?",
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
        "question": "Did he ( knew )? \u2192 ( ? )",
        "options": [
            "know",
            "knows",
            "knew",
            "knowing"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did she play tennis? (No) \u2192 No, she ( ? ).",
        "options": [
            "did",
            "do",
            "don't",
            "didn't"
        ],
        "answer": 3,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "It rained. \u2192 ( ? ) it rain?",
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
        "question": "Did she ( made )? \u2192 ( ? )",
        "options": [
            "makes",
            "makeing",
            "made",
            "make"
        ],
        "answer": 3,
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
            "Do",
            "Does",
            "Was",
            "Did"
        ],
        "answer": 3,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did you ( took )? \u2192 ( ? )",
        "options": [
            "took",
            "takes",
            "take",
            "takeing"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you help him? (Yes) \u2192 Yes, I ( ? ).",
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
        "question": "The dog ran. \u2192 ( ? ) the dog run?",
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
        "question": "Did he ( got )? \u2192 ( ? )",
        "options": [
            "get",
            "gets",
            "got",
            "geting"
        ],
        "answer": 0,
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
            "Do",
            "Was",
            "Did",
            "Does"
        ],
        "answer": 2,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did she ( used )? \u2192 ( ? )",
        "options": [
            "used",
            "useing",
            "use",
            "uses"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did they come? (Yes) \u2192 Yes, they ( ? ).",
        "options": [
            "didn't",
            "do",
            "don't",
            "did"
        ],
        "answer": 3,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "He lived. \u2192 ( ? ) he live?",
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
        "question": "Did they ( lived )? \u2192 ( ? )",
        "options": [
            "lived",
            "liveing",
            "live",
            "lives"
        ],
        "answer": 2,
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
            "Did",
            "Do",
            "Was",
            "Does"
        ],
        "answer": 0,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did Ken ( liked )? \u2192 ( ? )",
        "options": [
            "likeing",
            "liked",
            "likes",
            "like"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did he buy it? (Yes) \u2192 Yes, he ( ? ).",
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
        "question": "They helped. \u2192 ( ? ) they help?",
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
        "question": "Did Emi ( wanted )? \u2192 ( ? )",
        "options": [
            "want",
            "wanted",
            "wants",
            "wanting"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did she read it? (No) \u2192 No, she ( ? ).",
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
        "question": "You listened. \u2192 ( ? ) you listen?",
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
        "question": "Did it ( stopped )? \u2192 ( ? )",
        "options": [
            "stop",
            "stoping",
            "stopped",
            "stops"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you know that? (Yes) \u2192 Yes, I ( ? ).",
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
        "question": "He cleaned. \u2192 ( ? ) he clean?",
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
        "question": "Did you ( tried )? \u2192 ( ? )",
        "options": [
            "trys",
            "try",
            "trying",
            "tried"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you go to school? (Yes) \u2192 ( ? )",
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
        "question": "She enjoyed. \u2192 ( ? ) she enjoy?",
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
        "question": "Did he ( studied )? \u2192 ( ? )",
        "options": [
            "studied",
            "studys",
            "studying",
            "study"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you eat lunch? (No) \u2192 ( ? )",
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
        "question": "You visited. \u2192 ( ? ) you visit?",
        "options": [
            "Did",
            "Does",
            "Do",
            "Was"
        ],
        "answer": 0,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did she ( cried )? \u2192 ( ? )",
        "options": [
            "cry",
            "cried",
            "crying",
            "crys"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did he watch TV? (Yes) \u2192 ( ? )",
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
        "question": "They walked. \u2192 ( ? ) they walk?",
        "options": [
            "Was",
            "Did",
            "Do",
            "Does"
        ],
        "answer": 1,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "Did they ( carried )? \u2192 ( ? )",
        "options": [
            "carrying",
            "carrys",
            "carried",
            "carry"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did she cook dinner? (No) \u2192 ( ? )",
        "options": [
            "do",
            "did",
            "don't",
            "didn't"
        ],
        "answer": 3,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "Ken stopped. \u2192 ( ? ) Ken stop?",
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
        "question": "Did you ( left )? \u2192 ( ? )",
        "options": [
            "leave",
            "leaves",
            "left",
            "leaveing"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did they play baseball? (Yes) \u2192 ( ? )",
        "options": [
            "didn't",
            "don't",
            "did",
            "do"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "Emi tried. \u2192 ( ? ) Emi try?",
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
        "question": "Did he ( met )? \u2192 ( ? )",
        "options": [
            "met",
            "meet",
            "meeting",
            "meets"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did it snow? (No) \u2192 ( ? )",
        "options": [
            "do",
            "don't",
            "didn't",
            "did"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "You met. \u2192 ( ? ) you meet?",
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
        "question": "Did she ( sang )? \u2192 ( ? )",
        "options": [
            "sang",
            "sings",
            "singing",
            "sing"
        ],
        "answer": 3,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did Ken come? (Yes) \u2192 ( ? )",
        "options": [
            "didn't",
            "do",
            "did",
            "don't"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "He sang. \u2192 ( ? ) he sing?",
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
        "question": "Did it ( began )? \u2192 ( ? )",
        "options": [
            "begin",
            "begining",
            "began",
            "begins"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did Emi go? (No) \u2192 ( ? )",
        "options": [
            "don't",
            "did",
            "do",
            "didn't"
        ],
        "answer": 3,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "She swam. \u2192 ( ? ) she swim?",
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
        "question": "Did you ( drank )? \u2192 ( ? )",
        "options": [
            "drinks",
            "drank",
            "drink",
            "drinking"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you finish? (Yes) \u2192 ( ? )",
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
        "question": "They drank. \u2192 ( ? ) they drink?",
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
        "question": "Did he ( slept )? \u2192 ( ? )",
        "options": [
            "sleep",
            "slept",
            "sleeps",
            "sleeping"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Did you enjoy? (No) \u2192 ( ? )",
        "options": [
            "don't",
            "did",
            "didn't",
            "do"
        ],
        "answer": 2,
        "hint": "Short answer with Did -> did / didn't"
    },
    {
        "question": "You got. \u2192 ( ? ) you get?",
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
        "question": "\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you do?",
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
        "question": "( did / what / eat / you )? \u2192 ( ? )",
        "options": [
            "Did you eat what?",
            "What did you eat?",
            "What did eat you?",
            "What you did eat?"
        ],
        "answer": 1,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) you busy yesterday?",
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
        "question": "\u4f55\u3092\u898b\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you see?",
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
        "question": "( go / where / you / did )? \u2192 ( ? )",
        "options": [
            "Where did you go?",
            "Where did go you?",
            "Did you go where?",
            "Where you did go?"
        ],
        "answer": 0,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) you play soccer yesterday?",
        "options": [
            "Do",
            "Were",
            "Was",
            "Did"
        ],
        "answer": 3,
        "hint": "Action verb -> Did"
    },
    {
        "question": "\u4f55\u3092\u98df\u3079\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you eat?",
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
        "question": "( study / did / you / English )? \u2192 ( ? )",
        "options": [
            "Did you study?",
            "You study did?",
            "You did study?",
            "Did study you?"
        ],
        "answer": 0,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) you happy?",
        "options": [
            "Did",
            "Was",
            "Do",
            "Were"
        ],
        "answer": 3,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u4f55\u3092\u8cb7\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you buy?",
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
        "question": "( play / did / he / tennis )? \u2192 ( ? )",
        "options": [
            "Did play he?",
            "He did play?",
            "He play did?",
            "Did he play?"
        ],
        "answer": 3,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) you watch TV?",
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
        "question": "\u4f55\u3092\u4f5c\u308a\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you make?",
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
        "question": "( she / did / cook / dinner )? \u2192 ( ? )",
        "options": [
            "She cook did?",
            "Did she cook?",
            "Did cook she?",
            "She did cook?"
        ],
        "answer": 1,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) he a teacher?",
        "options": [
            "Did",
            "Was",
            "Do",
            "Were"
        ],
        "answer": 1,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u4f55\u3092\u8aad\u307f\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you read?",
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
        "question": "( they / did / come / here )? \u2192 ( ? )",
        "options": [
            "Did come they?",
            "They did come?",
            "They come did?",
            "Did they come?"
        ],
        "answer": 3,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) he go to school?",
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
        "question": "\u5f7c\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) he do?",
        "options": [
            "does",
            "do",
            "did",
            "was"
        ],
        "answer": 2,
        "hint": "Past tense question."
    },
    {
        "question": "( you / did / what / buy )? \u2192 ( ? )",
        "options": [
            "What did you buy?",
            "What you did buy?",
            "What did buy you?",
            "Did you buy what?"
        ],
        "answer": 0,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) she sad?",
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
        "question": "\u5f7c\u5973\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) she do?",
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
        "question": "( he / did / what / make )? \u2192 ( ? )",
        "options": [
            "What did he make?",
            "What he did make?",
            "Did he make what?",
            "What did make he?"
        ],
        "answer": 0,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) she cry?",
        "options": [
            "Do",
            "Were",
            "Did",
            "Was"
        ],
        "answer": 2,
        "hint": "Action verb -> Did"
    },
    {
        "question": "\u5f7c\u3089\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) they do?",
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
        "question": "( did / when / you / go )? \u2192 ( ? )",
        "options": [
            "When did go you?",
            "When you did go?",
            "When did you go?",
            "Did you go when?"
        ],
        "answer": 2,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) they students?",
        "options": [
            "Were",
            "Do",
            "Was",
            "Did"
        ],
        "answer": 0,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u30b1\u30f3\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) Ken do?",
        "options": [
            "did",
            "does",
            "do",
            "was"
        ],
        "answer": 0,
        "hint": "Past tense question."
    },
    {
        "question": "( did / where / he / live )? \u2192 ( ? )",
        "options": [
            "Where did live he?",
            "Where he did live?",
            "Did he live where?",
            "Where did he live?"
        ],
        "answer": 3,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) they study?",
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
        "question": "\u3069\u3053\u306b\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you go?",
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
        "question": "( do / what / you / did )? \u2192 ( ? )",
        "options": [
            "What did do you?",
            "What did you do?",
            "Did you do what?",
            "What you did do?"
        ],
        "answer": 1,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) it cold?",
        "options": [
            "Were",
            "Do",
            "Did",
            "Was"
        ],
        "answer": 3,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u3069\u3053\u3067\u898b\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you see?",
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
        "question": "( see / who / you / did )? \u2192 ( ? )",
        "options": [
            "Who did see you?",
            "Who did you see?",
            "Who you did see?",
            "Did you see who?"
        ],
        "answer": 1,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) it rain?",
        "options": [
            "Were",
            "Did",
            "Was",
            "Do"
        ],
        "answer": 1,
        "hint": "Action verb -> Did"
    },
    {
        "question": "\u3069\u3053\u3067\u8cb7\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you buy?",
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
        "question": "( did / you / enjoy / it )? \u2192 ( ? )",
        "options": [
            "Did enjoy you?",
            "You did enjoy?",
            "Did you enjoy?",
            "You enjoy did?"
        ],
        "answer": 2,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) you tired?",
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
        "question": "\u3069\u3053\u3067\u4f1a\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you meet?",
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
        "question": "( did / not / I / go ). \u2192 ( ? )",
        "options": [
            "Did I not go.",
            "I not did go.",
            "I did not go.",
            "I go did not."
        ],
        "answer": 2,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "( ? ) you run?",
        "options": [
            "Do",
            "Were",
            "Did",
            "Was"
        ],
        "answer": 2,
        "hint": "Action verb -> Did"
    },
    {
        "question": "\u5f7c\u306f\u3069\u3053\u3078\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) he go?",
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
        "question": "( did / not / he / eat ). \u2192 ( ? )",
        "options": [
            "He did not eat.",
            "He not did eat.",
            "Did he not eat.",
            "He eat did not."
        ],
        "answer": 0,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "What ( ? ) you do?",
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
        "question": "\u5f7c\u5973\u306f\u3069\u3053\u306b\u4f4f\u3093\u3067\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) she live?",
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
        "question": "( did / not / she / know ). \u2192 ( ? )",
        "options": [
            "She know did not.",
            "Did she not know.",
            "She did not know.",
            "She not did know."
        ],
        "answer": 2,
        "hint": "Order: Wh + did + Subject + Verb"
    },
    {
        "question": "Where ( ? ) you?",
        "options": [
            "were",
            "do",
            "was",
            "did"
        ],
        "answer": 0,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u3044\u3064\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you go?",
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
        "question": "Did you ( went )? \u2192 ( ? )",
        "options": [
            "gos",
            "go",
            "went",
            "going"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Where ( ? ) you go?",
        "options": [
            "did",
            "was",
            "do",
            "were"
        ],
        "answer": 0,
        "hint": "Action verb -> Did"
    },
    {
        "question": "\u3044\u3064\u6765\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you come?",
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
        "question": "Did he ( came )? \u2192 ( ? )",
        "options": [
            "comeing",
            "come",
            "came",
            "comes"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "What ( ? ) that?",
        "options": [
            "do",
            "were",
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
            "did",
            "does",
            "was"
        ],
        "answer": 1,
        "hint": "Past tense question."
    },
    {
        "question": "Did she ( plays )? \u2192 ( ? )",
        "options": [
            "plays",
            "playss",
            "plays",
            "playsing"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "What ( ? ) you eat?",
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
        "question": "\u3044\u3064\u5bdd\u307e\u3057\u305f\u304b\uff1f\u2192 When ( ? ) you sleep?",
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
        "question": "Did it ( rains )? \u2192 ( ? )",
        "options": [
            "rains",
            "rainsing",
            "rains",
            "rainss"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Who ( ? ) he?",
        "options": [
            "were",
            "did",
            "do",
            "was"
        ],
        "answer": 3,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u8ab0\u3092\u898b\u307e\u3057\u305f\u304b\uff1f\u2192 Who ( ? ) you see?",
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
        "question": "Did you ( watched )? \u2192 ( ? )",
        "options": [
            "watched",
            "watchs",
            "watch",
            "watching"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "Who ( ? ) you meet?",
        "options": [
            "were",
            "do",
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
            "did",
            "do",
            "was"
        ],
        "answer": 1,
        "hint": "Past tense question."
    },
    {
        "question": "Did they ( runs )? \u2192 ( ? )",
        "options": [
            "runs",
            "runsing",
            "runss",
            "runs"
        ],
        "answer": 0,
        "hint": "After Did, use the base form."
    },
    {
        "question": "How ( ? ) the weather?",
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
        "question": "\u3069\u306e\u3088\u3046\u306b\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 How ( ? ) you go?",
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
        "question": "Did Ken ( studied )? \u2192 ( ? )",
        "options": [
            "studying",
            "studys",
            "study",
            "studied"
        ],
        "answer": 2,
        "hint": "After Did, use the base form."
    },
    {
        "question": "How ( ? ) you go?",
        "options": [
            "did",
            "was",
            "were",
            "do"
        ],
        "answer": 0,
        "hint": "Action verb -> Did"
    },
    {
        "question": "\u3069\u3046\u3084\u3063\u3066\u4f5c\u308a\u307e\u3057\u305f\u304b\uff1f\u2192 How ( ? ) you make?",
        "options": [
            "does",
            "did",
            "was",
            "do"
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
            "Did",
            "Were",
            "Do",
            "Was"
        ],
        "answer": 3,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u4f55\u6642\u3067\u3057\u305f\u304b\uff1f\u2192 What time ( ? ) it?",
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
        "question": "Did you ( were ) busy? \u2192 ( ? )",
        "options": [
            "were",
            "weres",
            "wereing",
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
            "does",
            "did",
            "do",
            "was"
        ],
        "answer": 1,
        "hint": "Past tense question."
    },
    {
        "question": "Did you ( was ) sad? \u2192 ( ? )",
        "options": [
            "wass",
            "was",
            "wasing",
            "was"
        ],
        "answer": 1,
        "hint": "After Did, use the base form."
    },
    {
        "question": "( ? ) she busy?",
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
        "question": "\u4f55\u6642\u306b\u5bdd\u307e\u3057\u305f\u304b\uff1f\u2192 What time ( ? ) you sleep?",
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
        "question": "( Do ) you go yesterday? \u2192 ( ? )",
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
        "question": "( ? ) she look busy?",
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
        "question": "\u3069\u3061\u3089\u3092\u8cb7\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Which ( ? ) you buy?",
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
        "question": "( Do ) he come yesterday? \u2192 ( ? )",
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
        "question": "( ? ) they kind?",
        "options": [
            "Did",
            "Were",
            "Was",
            "Do"
        ],
        "answer": 1,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u3069\u3061\u3089\u3092\u98df\u3079\u307e\u3057\u305f\u304b\uff1f\u2192 Which ( ? ) you eat?",
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
        "question": "( Does ) she eat yesterday? \u2192 ( ? )",
        "options": [
            "Was",
            "Did",
            "Do",
            "Does"
        ],
        "answer": 1,
        "hint": "Past tense question -> Did"
    },
    {
        "question": "( ? ) they look kind?",
        "options": [
            "Was",
            "Had",
            "Were",
            "Did"
        ],
        "answer": 3,
        "hint": "Action verb 'look' -> Did"
    },
    {
        "question": "\u306a\u305c\u884c\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Why ( ? ) you go?",
        "options": [
            "does",
            "did",
            "was",
            "do"
        ],
        "answer": 1,
        "hint": "Past tense question."
    },
    {
        "question": "( Are ) you play yesterday? \u2192 ( ? )",
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
        "question": "( ? ) it nice?",
        "options": [
            "Were",
            "Was",
            "Do",
            "Did"
        ],
        "answer": 1,
        "hint": "State/Adjective -> Was/Were"
    },
    {
        "question": "\u306a\u305c\u6ce3\u304d\u307e\u3057\u305f\u304b\uff1f\u2192 Why ( ? ) you cry?",
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
        "question": "( Is ) he go yesterday? \u2192 ( ? )",
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
        "question": "( ? ) it look nice?",
        "options": [
            "Had",
            "Did",
            "Were",
            "Was"
        ],
        "answer": 1,
        "hint": "Action verb 'look' -> Did"
    },
    {
        "question": "\u3042\u306a\u305f\u306f\u4f55\u3092\u3057\u307e\u3057\u305f\u304b\uff1f\u2192 What ( ? ) you do?",
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
        "question": "( Were ) you play tennis? \u2192 ( ? )",
        "options": [
            "Did",
            "Was",
            "Does",
            "Do"
        ],
        "answer": 0,
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
        "question": "\u3042\u306a\u305f\u306f\u3069\u3053\u306b\u3044\u307e\u3057\u305f\u304b\uff1f\u2192 Where ( ? ) you? (\u203bbe\u52d5\u8a5e)",
        "options": [
            "are",
            "were",
            "did",
            "was"
        ],
        "answer": 1,
        "hint": "Past tense question."
    },
    {
        "question": "( Was ) he eat lunch? \u2192 ( ? )",
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
        "question": "That ( ? ) interesting.",
        "options": [
            "looked",
            "looks",
            "look",
            "looking"
        ],
        "answer": 1,
        "hint": "Subject 'That' -> looks"
    },
    {
        "question": "\u5f7c\u306f\u8ab0\u3067\u3057\u305f\u304b\uff1f\u2192 Who ( ? ) he? (\u203bbe\u52d5\u8a5e)",
        "options": [
            "were",
            "are",
            "did",
            "was"
        ],
        "answer": 3,
        "hint": "Past tense question."
    }
]
};
