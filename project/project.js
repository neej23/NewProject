    const toggleIcon = document.getElementById('toggleIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuItems = menuOverlay.querySelectorAll('li');

    

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

        // Sample project data
    const projects = [
      "Project Alpha","Project Beta","Project Gamma","Project Delta","Project Epsilon",
      "Project Zeta","Project Eta","Project Theta","Project Iota","Project Kappa",
      "Project Lambda","Project Mu","Project Nu","Project Xi","Project Omicron",
      "Project Pi","Project Rho","Project Sigma","Project Tau","Project Upsilon",
      "Project Phi","Project Chi","Project Psi","Project Omega","Project Horizon",
      "Project Nova","Project Orion","Project Phoenix","Project Quantum","Project Zenith"
    ];

    const grid = document.getElementById('projectGrid');

    // Generate cards dynamically
    projects.forEach((title, index) => {
      const col = document.createElement('div');
      col.className = "col-6 col-md-4 project-col";

      col.innerHTML = `
        <div class="project-card">
          <img src="https://picsum.photos/200/160?random=${index+1}" alt="${title}" class="project-img">
          <p class="project-title">${title}</p>
        </div>
      `;
      grid.appendChild(col);
    });

    // Search filter functionality
    document.getElementById('searchInput').addEventListener('keyup', function() {
      const filter = this.value.toLowerCase();
      const cards = grid.querySelectorAll('.project-card');

      cards.forEach(card => {
        const title = card.querySelector('.project-title').textContent.toLowerCase();
        card.parentElement.style.display = title.includes(filter) ? '' : 'none';
      });
    });