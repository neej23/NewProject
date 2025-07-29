document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bootstrap collapse for navbar
  const navbarCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
    toggle: false
  });

  // Fullscreen menu functionality
  const fullscreenMenuToggle = document.getElementById('fullscreenMenuToggle');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  if (fullscreenMenuToggle && fullscreenMenu) {
    fullscreenMenuToggle.addEventListener('click', function() {
      fullscreenMenu.classList.add('show');
      document.body.style.overflow = 'hidden';
      navbarCollapse.hide();
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', function() {
      fullscreenMenu.classList.remove('show');
      document.body.style.overflow = '';
    });
  }

  // Close menu when clicking on links
  const menuLinks = document.querySelectorAll('.fullscreen-menu a');
  if (menuLinks) {
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        fullscreenMenu.classList.remove('show');
        document.body.style.overflow = '';
      });
    });
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const darkToggleIcon = document.querySelector('.dark-toggle i');
  if (darkToggleIcon) {
    if (document.body.classList.contains('dark-mode')) {
      darkToggleIcon.classList.remove('bi-moon-stars');
      darkToggleIcon.classList.add('bi-sun');
    } else {
      darkToggleIcon.classList.remove('bi-sun');
      darkToggleIcon.classList.add('bi-moon-stars');
    }
  }
}