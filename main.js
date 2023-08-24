document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    
    let mainNav = document.getElementById('mainNav');

    window.onscroll = function() {
        // If we've scrolled 50px or more, add the "scrolled" class to the nav
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    };
});

});

