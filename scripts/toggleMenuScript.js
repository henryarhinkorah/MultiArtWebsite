// Toggle menu display and make it work consistently on all pages
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuIcon || !mobileMenu) {
    console.error('Mobile menu elements not found');
    return;
  }

  // Function to toggle menu (CSS uses `.mobile-menu.show`)
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('show'); // Toggle menu visibility

    // Change icon to "X" when menu is open
    if (mobileMenu.classList.contains('show')) {
      menuIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
  }

  // Expose globally for any inline onclick handlers
  window.toggleMobileMenu = toggleMobileMenu;

  // Add click event listener on the icon
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

  // Close menu when a link inside the mobile menu is clicked
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenu.classList.contains('show')) {
        toggleMobileMenu();
      }
    });
  });
});
