document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.subject-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.dataset.subject;
            // For now, just alert or log. In the future, this will navigate to the subject page.
            console.log(`Navigating to ${subject}...`);
            // alert(`${subject}のページへ移動します（準備中）`);
            
            // Add a simple animation effect
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
});
