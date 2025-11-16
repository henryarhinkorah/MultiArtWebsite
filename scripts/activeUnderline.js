// script.js
document.querySelectorAll('.pages a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Remove 'active' class from all links
        document.querySelectorAll('.pages a').forEach(link => link.classList.remove('active'));
  
        // Add 'active' class to the clicked link
        event.target.classList.add('active');
    });
  });
  
  // Function to set the active link on page load
  function setActiveLink() {
    const links = document.querySelectorAll('.pages a');
    const currentUrl = window.location.href;
  
    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active'); // Highlight the active link
        }
    });
  }
  
  // Call the function on page load
  document.addEventListener('DOMContentLoaded', setActiveLink);