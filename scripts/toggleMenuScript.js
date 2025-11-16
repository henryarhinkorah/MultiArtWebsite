
  // Toggle menu display
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('show'); // Toggle menu visibility
    menuIcon.classList.toggle('open');   // Toggle icon

    // Change icon to "X" when menu is open
    if (menuIcon.classList.contains('open')) {
      menuIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });