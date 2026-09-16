/* =========================================================
   DEVISTIO | Cloud · DevOps · Platform Engineering
   main.js: Snappy, lightweight interactions
   ========================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNav();
    initArchitectureControls();
    initContactForm();
    initSmoothScroll();
  });

  // 0. Light / Dark Theme Toggle
  function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    function applyTheme(theme) {
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleBtn.setAttribute('title', 'Switch to Dark Theme');
        toggleBtn.setAttribute('aria-label', 'Switch to Dark Theme');
      } else {
        document.documentElement.removeAttribute('data-theme');
        toggleBtn.setAttribute('title', 'Switch to Light Theme');
        toggleBtn.setAttribute('aria-label', 'Switch to Light Theme');
      }
      try {
        localStorage.setItem('devistio-theme', theme);
      } catch (e) {}
    }

    // Initialize state: check stored preference, default to dark Burgundy
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem('devistio-theme');
    } catch (e) {}
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  // 1. Navbar Scroll State & Mobile Toggle
  function initNav() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const menu   = document.getElementById('nav-menu');

    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });
    }

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('mobile-open');
      });

      // Close menu on click outside or on link click
      document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.remove('mobile-open');
        }
      });

      menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('mobile-open');
        });
      });
    }
  }

  // 2. Interactive Architecture Diagram Layer Toggles
  function initArchitectureControls() {
    const buttons = document.querySelectorAll('.arch-btn');
    const archCanvas = document.getElementById('arch-canvas');
    if (!buttons.length || !archCanvas) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const layer = btn.getAttribute('data-layer');
        const boxes = archCanvas.querySelectorAll('.arch-box, .arch-cluster-center');

        boxes.forEach(box => {
          if (layer === 'all') {
            box.style.opacity = '1';
            box.style.filter = 'none';
          } else if (layer === 'k8s') {
            const isK8s = box.classList.contains('arch-cluster-center');
            box.style.opacity = isK8s ? '1' : '0.35';
            box.style.filter = isK8s ? 'none' : 'grayscale(60%)';
          } else if (layer === 'sec') {
            const text = box.innerText.toLowerCase();
            const isSec = text.includes('security') || text.includes('admission') || text.includes('identity') || text.includes('kms');
            box.style.opacity = isSec ? '1' : '0.35';
            box.style.filter = isSec ? 'none' : 'grayscale(60%)';
          } else if (layer === 'obs') {
            const text = box.innerText.toLowerCase();
            const isObs = text.includes('telemetry') || text.includes('loki') || text.includes('tempo') || text.includes('alloy') || text.includes('mimir');
            box.style.opacity = isObs ? '1' : '0.35';
            box.style.filter = isObs ? 'none' : 'grayscale(60%)';
          }
        });
      });
    });
  }

  // 3. Contact Form Submission Handler
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form || !feedback) return;

    window.handleFormSubmit = function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Processing...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Engineering Inquiry</span>';
        }
        form.reset();
        feedback.style.display = 'block';
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 6000);
      }, 700);
    };
  }

  // 4. Smooth Anchor Scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

})();
