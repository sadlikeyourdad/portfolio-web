AOS.init({
    startEvent: 'DOMContentLoaded', // Name of the event dispatched on the document, that AOS should initialize on
    once: true,  // Whether animation should happen only once - while scrolling down
});

// Initialize the container with a fade-in effect
document.querySelector('.container').setAttribute('data-aos', 'fade-up');
