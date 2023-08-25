// Typing animation for the name
const text = 'Samuel Bujňák';
let index = 0;

setInterval(() => {
    if (index < text.length) {
        document.querySelector('.typing').textContent += text.charAt(index);
        index++;
    }
}, 150);  // Adjust speed as needed
