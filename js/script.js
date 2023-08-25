// Matrix rain animation
const canvas = document.getElementById("matrixCanvas");
const context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const binary = "01";
const columns = canvas.width / 20;
const drops = [];

for(let x = 0; x < columns; x++)
    drops[x] = 1;

function drawMatrix() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "#00FF41";
    context.font = "20px Courier New";

    for(let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        context.fillText(text, i * 20, drops[i] * 20);
        
        if(drops[i] * 20 > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Typing effect for name
let i = 0;
const name = "SAMUEL BUJŇÁK";
const typingSpeed = 100;

function typeWriter() {
  if (i < name.length) {
    document.getElementById("name").textContent += name.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  typeWriter();
  AOS.init();
});

// AOS (Animate On Scroll) initialization
AOS.init();
