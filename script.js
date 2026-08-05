const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const question = document.getElementById('question');

yesBtn.addEventListener('click', () => {
    question.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    message.textContent = "Yay! I knew you'd say yes! 🎉❤️";
    message.classList.add('show');
});

noBtn.addEventListener('mouseover', () => {
    // Move button to a random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// For mobile touch
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent click
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});   

const phrases = ["Are you sure?", "Really sure?", "Think again!", "Last chance!", "Okay fine, Yes!"];
let count = 0;

noBtn.addEventListener('click', () => {
    if (count < phrases.length - 1) {
        question.textContent = phrases[count];
        count++;
    } else {
        question.textContent = "I knew it! ❤️";
        noBtn.style.display = 'none';
    }
});   