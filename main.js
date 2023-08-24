document.addEventListener("DOMContentLoaded", function() {
    // Initialising AOS library
    AOS.init();

    const navbar = document.getElementById('navbar');
    let scrolled = false;

    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
            if (!scrolled) {
                navbar.style.transform = 'translateY(-70px)';
            }
            setTimeout(function() {
                navbar.style.transform = 'translateY(0)';
                scrolled = true;
            }, 200);
        } else {
            navbar.classList.remove('scrolled');
            scrolled = false;
        }
    }
});

// If you have any other JS functions or interactions you'd like to add, you can include them below



