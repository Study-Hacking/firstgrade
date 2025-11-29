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
            nextBtn: document.getElementById('next-btn'),
            // Results Screen DOM
            resultsScreen: document.getElementById('results-screen'),
            resultScore: document.getElementById('result-score'),
            resultTotal: document.getElementById('result-total'),
            resultMessage: document.getElementById('result-message'),
            celebration: document.getElementById('celebration'),
            retryMistakesBtn: document.getElementById('retry-mistakes-btn'),
            nextChallengeBtn: document.getElementById('next-challenge-btn'),
            homeBtn: document.getElementById('home-btn'),
            reviewSection: document.getElementById('review-section'),
            reviewList: document.getElementById('review-list')
        };

        // Set Title
        document.title = `${this.data.title} - Study Hacker`;

        // Bind Events
        this.dom.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.dom.hintToggle.addEventListener('click', () => this.toggleHint());

        // Result Events
        this.dom.retryMistakesBtn.addEventListener('click', () => this.retryMistakes());
        this.dom.nextChallengeBtn.addEventListener('click', () => this.startNewGame());
        this.dom.homeBtn.addEventListener('click', () => window.location.href = 'index.html');
    }

    initGame() {
        this.incorrectQuestions = [];
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
            // Track mistake
            this.incorrectQuestions.push(q);
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
        // Show Results Screen
        this.dom.resultsScreen.classList.remove('hidden');

        // Update Score
        this.dom.resultScore.textContent = this.correctCount;
        this.dom.resultTotal.textContent = this.questions.length;

        // Message & Celebration & Buttons
        const percentage = (this.correctCount / this.questions.length) * 100;

        // Reset visibility
        this.dom.celebration.classList.add('hidden');
        this.dom.nextChallengeBtn.classList.add('hidden');
        this.dom.retryMistakesBtn.classList.add('hidden');
        this.dom.reviewSection.classList.add('hidden');

        if (percentage === 100) {
            // Perfect Case
            this.dom.resultMessage.textContent = "Amazing! Perfect Score! 🏆";
            this.dom.celebration.classList.remove('hidden');
            this.dom.nextChallengeBtn.classList.remove('hidden');
        } else {
            // Imperfect Case
            if (percentage >= 80) {
                this.dom.resultMessage.textContent = "Great job! But let's fix those mistakes! 🌟";
            } else {
                this.dom.resultMessage.textContent = "Don't give up! Review and try again! 💪";
            }

            this.dom.retryMistakesBtn.classList.remove('hidden');
            this.showReview();
        }
    }

    showReview() {
        this.dom.reviewSection.classList.remove('hidden');
        this.dom.reviewList.innerHTML = '';

        this.incorrectQuestions.forEach((q, index) => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `
                <div class="review-q">Q. ${q.question}</div>
                <div class="review-ans">Correct: ${q.options[q.answer]}</div>
                <div class="review-hint">💡 ${q.hint}</div>
            `;
            this.dom.reviewList.appendChild(div);
        });
    }

    retryMistakes() {
        if (this.incorrectQuestions.length === 0) return;

        // Setup game with only incorrect questions
        this.questions = [...this.incorrectQuestions];
        this.resetGameLoop();
    }

    startNewGame() {
        // Reload fresh random questions
        this.questions = this.getRandomQuestions(this.data.questions, 10);
        this.resetGameLoop();
    }

    resetGameLoop() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.hasAnswered = false;
        this.incorrectQuestions = []; // Reset mistakes for the new run

        this.dom.resultsScreen.classList.add('hidden');
        this.initGame();
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
