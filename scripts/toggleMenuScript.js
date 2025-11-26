// Toggle the mobile menu when icon is clicked
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');

  if (!mobileMenu || !menuIcon) return;

  // Toggle visibility (CSS uses `.mobile-menu.show`)
  mobileMenu.classList.toggle('show');

  // Change icon between bars and close
  if (mobileMenu.classList.contains('show')) {
    menuIcon.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');

  if (!mobileMenu || !menuIcon) return;

  if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    if (mobileMenu.classList.contains('show')) {
      mobileMenu.classList.remove('show');
      menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
  }
});

// Close menu when a link inside the mobile menu is clicked
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');

  if (!mobileMenu || !menuIcon) return;

  const links = mobileMenu.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
});
