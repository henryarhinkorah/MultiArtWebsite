// Scroll animation - fade in and slide up from bottom
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements to animate (excluding the first pictureContainer which is the hero)
    const allPictureContainers = document.querySelectorAll('.pictureContainer');
    const dealParaContainer = document.querySelectorAll('.dealParaContainer');
    const missionContainers = document.querySelectorAll('.missionContainer');
    
    // Combine all elements to animate (skip first pictureContainer - the hero image)
    const elementsToAnimate = [
        ...dealParaContainer,
        ...missionContainers,
        ...Array.from(allPictureContainers).slice(1) // Skip first one (hero image)
    ];

    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -80px 0px' // Start animation slightly before element enters viewport
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animated class when element comes into view
                entry.target.classList.add('animated');
                // Stop observing this element after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add scroll-fade-in class and observe each element
    elementsToAnimate.forEach(element => {
        if (element) {
            element.classList.add('scroll-fade-in');
            observer.observe(element);
        }
    });
});

