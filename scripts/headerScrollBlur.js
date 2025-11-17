// Add blur effect to header container when scrolling
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.querySelector('.headerContainer');
    
    if (headerContainer) {
        window.addEventListener('scroll', function() {
            // Check if user has scrolled past a certain point (e.g., 50px)
            if (window.scrollY > 50) {
                headerContainer.classList.add('scrolled');
            } else {
                headerContainer.classList.remove('scrolled');
            }
        });
    }
});

