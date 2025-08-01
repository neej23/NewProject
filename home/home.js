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
 const text = document.getElementById('services');
    const switchHeight = 960; // the scroll height in px to trigger color switch

    window.addEventListener('scroll', () => {
      if (window.scrollY > switchHeight) {
        document.body.style.backgroundColor = '#284160';
        text.style.color = '#ccc';
      } else {
        document.body.style.backgroundColor = 'white';
        text.style.color = 'black';
      }
    });

    toggleIcon.addEventListener('click', () => {
      const isOpen = menuOverlay.classList.toggle('show');

      toggleIcon.classList.toggle('fa-chevron-down', !isOpen);
      toggleIcon.classList.toggle('fa-angle-up', isOpen);
    
      toggleIcon.style.color = '#333';
    
      if (isOpen) {
        menuItems.forEach((item) => {

          item.classList.remove('animate');
          void item.offsetWidth; // force reflow
          setTimeout(() => item.classList.add('animate'), 50);
        });
      } 
    });