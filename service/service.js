AOS.init();

const animations = [
  {
    id: 'icon1',
    src: 'https://assets6.lottiefiles.com/private_files/lf30_cgfdhxgx.json' // structural design
  },
  {
    id: 'icon2',
    src: 'https://assets3.lottiefiles.com/private_files/lf30_editor_0aomk1un.json' // Tools
  },
  {
    id: 'icon3',
    src: 'https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json' // construction site
  }
];

animations.forEach(item => {
  const container = document.getElementById(item.id);
  if (container) {
    container.innerHTML = `
      <lottie-player src="${item.src}" background="transparent" speed="1" loop autoplay></lottie-player>
    `;
  }
});

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