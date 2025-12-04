document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.subject-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.dataset.subject;
            if (subject === 'english') {
                window.location.href = 'topics.html';
            } else if (subject === 'history') {
                window.location.href = 'history_topics.html';
            } else if (subject === 'science') {
                window.location.href = 'science_topics.html';
            } else {
                window.location.href = `game.html?subject=${subject}`;
            }

            // Add a simple animation effect
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
});
