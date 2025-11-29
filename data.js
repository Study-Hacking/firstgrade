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
    }
};
