document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.getElementById('flower-container');
    const floralItems = ['🌻', '🌸', '🌼', '🌷', '🍃', '✨', '❤️'];

    function createFloralItem() {
        const item = document.createElement('div');
        item.classList.add('floating-item');
        item.innerHTML = floralItems[Math.floor(Math.random() * floralItems.length)];

        const size = Math.random() * 25 + 15 + 'px';
        const left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 4 + 5 + 's';
        const delay = Math.random() * 3 + 's';

        item.style.fontSize = size;
        item.style.left = left;
        item.style.animationDuration = duration;
        item.style.animationDelay = delay;

        flowerContainer.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, (parseFloat(duration) + parseFloat(delay)) * 1000);
    }

    setInterval(createFloralItem, 400);

    for (let i = 0; i < 20; i++) {
        createFloralItem();
    }

    // Export function to global scope for onclick handlers
    window.nextStep = (stepNumber) => {
        // Hide all steps
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => step.classList.remove('active'));

        // Show target step
        const targetStep = document.getElementById(`step-${stepNumber}`);
        if (targetStep) {
            targetStep.classList.add('active');
        }

        // Burst of items when changing steps
        for (let i = 0; i < 20; i++) {
            setTimeout(createFloralItem, i * 40);
        }
    };
});
