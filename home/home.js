document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap collapse
  const navbarCollapse = new bootstrap.Collapse(
    document.getElementById("navbarNav"),
    {
      toggle: false,
    }
  );

  const fullscreenMenuToggle = document.getElementById("fullscreenMenuToggle");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");

  // ✅ Open fullscreen menu
  if (fullscreenMenuToggle && fullscreenMenu) {
    fullscreenMenuToggle.addEventListener("click", function () {
      console.log("Fullscreen menu toggle clicked ✅");
      fullscreenMenu.classList.add("show");
      document.body.style.overflow = "hidden";
      navbarCollapse.hide();
    });
  }

  // ✅ Close on "X" button
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", function () {
      fullscreenMenu.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

  // ✅ Close on nav link click
  const menuLinks = document.querySelectorAll(".fullscreen-menu a");
  if (menuLinks.length) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        fullscreenMenu.classList.remove("show");
        document.body.style.overflow = "";
      });
    });
  }
});

// ✅ Dark mode toggle
const text = document.getElementById("services");
const switchHeight = 1000; // the scroll height in px to trigger color switch
const section = document.getElementById("services");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top * 2.6 + window.scrollY;
  const sectionBottom = sectionTop / 2 + section.offsetHeight;

  if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
    document.body.style.backgroundColor = "#284160";
    text.style.color = "#ccc";
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
  }
});

toggleIcon.addEventListener("click", () => {
  const isOpen = menuOverlay.classList.toggle("show");

  toggleIcon.classList.toggle("fa-chevron-down", !isOpen);
  toggleIcon.classList.toggle("fa-angle-up", isOpen);

  toggleIcon.style.color = "#333";

  if (isOpen) {
    menuItems.forEach((item) => {
      item.classList.remove("animate");
      void item.offsetWidth; // force reflow
      setTimeout(() => item.classList.add("animate"), 50);
    });
  }
});

gsap.fromTo(
  ".segment",
  {
    scale: 0.5,
    opacity: 0,
    rotation: -15,
  },
  {
    scale: 1,
    opacity: 1,
    rotation: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2,
  }
);

// Popup logic
const segments = document.querySelectorAll(".segment");
const modal = new bootstrap.Modal(document.getElementById("serviceModal"));
const modalTitle = document.getElementById("serviceModalLabel");
const modalDesc = document.getElementById("serviceDescription");

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    const title = segment.getAttribute("data-title");
    const desc = segment.getAttribute("data-description");
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.show();
  });
});

const modalIcon = document.querySelector(".icon-img");

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    const title = segment.getAttribute("data-title");
    const desc = segment.getAttribute("data-description");

    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    // Optional: set a different icon per service (static fallback used now)
    // modalIcon.src = '...based-on-title...';

    modal.show();
  });
});

// Animate segments on hover using GSAP
document.querySelectorAll(".segment").forEach((segment) => {
  segment.addEventListener("mouseenter", () => {
    gsap.to(segment, {
      scale: 1.15,
      rotate: 5,
      boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  });

  segment.addEventListener("mouseleave", () => {
    gsap.to(segment, {
      scale: 1,
      rotate: 0,
      boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Animate in
gsap.fromTo(
  ".segment",
  {
    scale: 0.5,
    opacity: 0,
    rotation: -15,
  },
  {
    scale: 1,
    opacity: 1,
    rotation: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2,
  }
);

document.querySelectorAll(".segment").forEach((segment) => {
  segment.addEventListener("click", () => {
    modalTitle.textContent = segment.getAttribute("data-title");
    modalDesc.textContent = segment.getAttribute("data-description");
    modal.show();
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".service-wheel", {
  rotation: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".service-wheel",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const angle = self.progress * 360;

      // Rotate the entire wheel
      gsap.set(".service-wheel", { rotation: angle });

      // Counter-rotate each segment's content to stay upright
      document.querySelectorAll(".segment").forEach((segment) => {
        const content = segment.querySelector("p");
        const image = segment.querySelector("img");

        gsap.set(content, { rotation: -angle });
        gsap.set(image, { rotation: -angle });
      });

      // ⛔ Fix: Center circle should not rotate — keep upright
      gsap.set(".center-circle", { rotation: -angle });
    },
  },
});
