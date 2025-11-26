// Scroll animation - fade in and slide up
document.addEventListener('DOMContentLoaded', function() {
    // Select every element that wants the scroll fade animation
    const elementsToAnimate = document.querySelectorAll('.scroll-fade-in');

    // Fast trigger options
    const observerOptions = {
        threshold: 0,               // trigger immediately when entering viewport
        rootMargin: '0px 0px -20px 0px' // slight early start
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each target so it animates when entering the viewport
    elementsToAnimate.forEach(element => observer.observe(element));
});
