// import { quizData } from './data.js'; // Removed for local file compatibility

class QuizGame {
    constructor(subject) {
        this.subject = subject;
        this.data = quizData[subject];

        if (!this.data) {
            alert('Subject not found or coming soon!');
            window.location.href = 'index.html';
            return;
        }

        this.questions = this.getRandomQuestions(this.data.questions, 10);
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.hasAnswered = false;

        this.initDOM();
        this.initGame();
    }

    getRandomQuestions(allQuestions, count) {
        if (allQuestions.length <= count) return allQuestions;

        // Fisher-Yates Shuffle
        const shuffled = [...allQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled.slice(0, count);
    }

    initDOM() {
        this.dom = {
            title: document.title,
            progressBar: document.getElementById('progress-bar'),
            qCounter: document.getElementById('question-counter'),
            correctCount: document.getElementById('correct-count'),
            incorrectCount: document.getElementById('incorrect-count'),
            qNum: document.getElementById('q-num'),
            qContent: document.getElementById('question-content'),
            optionsList: document.getElementById('options-list'),
            hintToggle: document.getElementById('hint-toggle'),
            hintContent: document.getElementById('hint-content'),
            nextBtn: document.getElementById('next-btn')
        };

        // Set Title
        document.title = `${this.data.title} - Study Hacker`;

        // Bind Events
        this.dom.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.dom.hintToggle.addEventListener('click', () => this.toggleHint());
    }

    initGame() {
        this.loadQuestion();
        this.updateStats();
    }

    loadQuestion() {
        const q = this.questions[this.currentIndex];

        // Update Text
        this.dom.qNum.textContent = `${this.currentIndex + 1}.`;
        this.dom.qContent.textContent = q.question;

        // Reset Hint
        this.dom.hintContent.textContent = q.hint;
        this.dom.hintContent.classList.add('hidden');
        this.dom.hintToggle.textContent = 'Show hint ⌄';

        // Generate Options
        this.dom.optionsList.innerHTML = '';
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="opt-label">${String.fromCharCode(65 + index)}.</span> ${opt}`;
            btn.onclick = () => this.checkAnswer(index, btn);
            this.dom.optionsList.appendChild(btn);
        });

        // Reset State
        this.hasAnswered = false;
        this.dom.nextBtn.disabled = true;
        this.updateProgressBar();
    }

    checkAnswer(selectedIndex, btnElement) {
        if (this.hasAnswered) return;
        this.hasAnswered = true;

        const q = this.questions[this.currentIndex];
        const isCorrect = selectedIndex === q.answer;
        const options = this.dom.optionsList.querySelectorAll('.option-btn');

        if (isCorrect) {
            btnElement.classList.add('correct');
            this.correctCount++;
        } else {
            btnElement.classList.add('incorrect');
            options[q.answer].classList.add('correct');
            this.incorrectCount++;
        }

        this.updateStats();
        this.dom.nextBtn.disabled = false;
    }

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex < this.questions.length) {
            this.loadQuestion();
        } else {
            this.endGame();
        }
    }

    toggleHint() {
        if (this.dom.hintContent.classList.contains('hidden')) {
            this.dom.hintContent.classList.remove('hidden');
            this.dom.hintToggle.textContent = 'Hide hint ⌃';
        } else {
            this.dom.hintContent.classList.add('hidden');
            this.dom.hintToggle.textContent = 'Show hint ⌄';
        }
    }

    updateStats() {
        this.dom.qCounter.textContent = `${this.currentIndex + 1} / ${this.questions.length}`;
        this.dom.correctCount.textContent = this.correctCount;
        this.dom.incorrectCount.textContent = this.incorrectCount;
    }

    updateProgressBar() {
        const progress = ((this.currentIndex) / this.questions.length) * 100;
        this.dom.progressBar.style.width = `${progress}%`;
    }

    endGame() {
        alert(`Game Over! Correct: ${this.correctCount}, Incorrect: ${this.incorrectCount}`);
        window.location.href = 'index.html';
    }
}

// Initialize
const init = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject') || 'english'; // Default to english
    new QuizGame(subject);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
