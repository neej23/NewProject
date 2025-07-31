document.addEventListener('DOMContentLoaded', function () {
  // Initialize Bootstrap collapse
  const navbarCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
    toggle: false
  });

  const fullscreenMenuToggle = document.getElementById('fullscreenMenuToggle');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  // ✅ Open fullscreen menu
  if (fullscreenMenuToggle && fullscreenMenu) {
    fullscreenMenuToggle.addEventListener('click', function () {
      console.log('Fullscreen menu toggle clicked ✅');
      fullscreenMenu.classList.add('show');
      document.body.style.overflow = 'hidden';
      navbarCollapse.hide();
    });
  }

  // ✅ Close on "X" button
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', function () {
      fullscreenMenu.classList.remove('show');
      document.body.style.overflow = '';
    });
  }

  // ✅ Close on nav link click
  const menuLinks = document.querySelectorAll('.fullscreen-menu a');
  if (menuLinks.length) {
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        fullscreenMenu.classList.remove('show');
        document.body.style.overflow = '';
      });
    });
  }
});

// ✅ Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const darkToggleIcon = document.querySelector('.dark-toggle i');
  if (darkToggleIcon) {
    darkToggleIcon.classList.toggle('bi-moon-stars');
    darkToggleIcon.classList.toggle('bi-sun');
  }
}