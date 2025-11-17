// Toggle menu display
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuIcon || !mobileMenu) {
    console.error('Mobile menu elements not found');
    return;
  }

  // Function to toggle menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('show'); // Toggle menu visibility
    menuIcon.classList.toggle('open');   // Toggle icon

    // Change icon to "X" when menu is open
    if (menuIcon.classList.contains('open')) {
      menuIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
  }

  // Make function globally available for onclick handler
  window.toggleMobileMenu = toggleMobileMenu;

  // Add event listener
  menuIcon.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMobileMenu();
  });

  // Add touch event for mobile devices
  menuIcon.addEventListener('touchend', function(e) {
    e.preventDefault();
    toggleMobileMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu.classList.contains('show')) {
      if (!mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        toggleMobileMenu();
      }
    }
  });
});