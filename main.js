document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    
    const nav = document.querySelector("nav");
    let scrolled = false;

    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            nav.classList.add('scrolled');
            scrolled = true;
        } else {
            nav.classList.remove('scrolled');
            scrolled = false;
        }
    };
});

