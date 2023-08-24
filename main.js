AOS.init({
    startEvent: 'DOMContentLoaded', // Name of the event dispatched on the document, that AOS should initialize on
    once: true,  // Whether animation should happen only once - while scrolling down
});

// Initialize the container with a fade-in effect
document.querySelector('.container').setAttribute('data-aos', 'fade-up');
// ... existing AOS and other script ...

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Check local storage for dark mode setting
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
