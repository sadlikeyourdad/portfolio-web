document.addEventListener('DOMContentLoaded', function() {
    // Cache selectors
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    
    // Check for scroll event
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // On scroll down, we'll shrink the nav
            nav.classList.add('nav-shrink');
        } else {
            // On scroll up, we'll expand the nav
            nav.classList.remove('nav-shrink');
        }
        
        lastScrollTop = scrollTop;
    });
});


