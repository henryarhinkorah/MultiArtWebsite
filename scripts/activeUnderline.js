// Handle active link state for both desktop and mobile menus
document.addEventListener('DOMContentLoaded', function () {
  const desktopLinks = document.querySelectorAll('.pages a');
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  const allLinks = [...desktopLinks, ...mobileLinks];

  // When any nav link is clicked, update active class everywhere
  allLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetHref = event.currentTarget.getAttribute('href');

      // Remove 'active' from all nav links
      allLinks.forEach(l => l.classList.remove('active'));

      // Add 'active' to all links that point to the same href
      allLinks.forEach(l => {
        if (l.getAttribute('href') === targetHref) {
          l.classList.add('active');
        }
      });
    });
  });

  // On page load, set the active link based on current URL
  const currentUrl = window.location.href;
  allLinks.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add('active');
    }
  });
});