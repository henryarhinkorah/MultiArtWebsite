// Scroll animation - fade in and slide up
document.addEventListener('DOMContentLoaded', function() {
    // Select elements (skip first pictureContainer = hero)
    const allPictureContainers = document.querySelectorAll('.pictureContainer');
    const dealParaContainer = document.querySelectorAll('.dealParaContainer');
    const missionContainers = document.querySelectorAll('.missionContainer');
    
    const elementsToAnimate = [
        ...dealParaContainer,
        ...missionContainers,
        ...Array.from(allPictureContainers).slice(1) // skip the first one
    ];

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

    // Apply initial class + observe
    elementsToAnimate.forEach(element => {
        if (element) {
            element.classList.add('scroll-fade-in');
            observer.observe(element);
        }
    });
});
