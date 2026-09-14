/* =========================================================
   TALHA REHMAN — DEVOPS PORTFOLIO
   main.js — Home page (Boot + Three.js hero)
========================================================= */

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // 1. BOOT SEQUENCE
  // ─────────────────────────────────────────────────────────
  function runBootSequence() {
    const overlay = document.getElementById('boot-overlay');
    const fill    = document.getElementById('boot-fill');
    const pct     = document.getElementById('boot-percent');
    const checks  = ['bc-aws','bc-k8s','bc-cicd','bc-infra','bc-sec','bc-obs'];
    const ready   = document.getElementById('boot-ready');

    if (!overlay) return;

    let progress = 0;
    const duration = 1400;
    const interval = 16;
    const steps = duration / interval;
    let step = 0;

    const checkTimes = [0.15, 0.30, 0.45, 0.60, 0.75, 0.90];

    const timer = setInterval(() => {
      step++;
      progress = Math.min(100, Math.round((step / steps) * 100));
      fill.style.width = progress + '%';
      pct.textContent = progress + '%';

      checkTimes.forEach((threshold, i) => {
        if (progress / 100 >= threshold) {
          const el = document.getElementById(checks[i]);
          if (el) el.classList.add('visible');
        }
      });

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          ready.classList.add('visible');
          setTimeout(() => {
            overlay.classList.add('done');
            initHero();
          }, 400);
        }, 200);
      }
    }, interval);
  }

  // ─────────────────────────────────────────────────────────
  // 2. THREE.JS HERO BACKGROUND
  // ─────────────────────────────────────────────────────────
  function initHero() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene    = new THREE.Scene();
    const W        = canvas.parentElement.clientWidth;
    const H        = canvas.parentElement.clientHeight;
    const camera   = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);

    // Nodes
    const nodePositions = [];
    const nodeCount = 50;
    const nodeGeo   = new THREE.SphereGeometry(0.12, 8, 8);
    const nodeMat   = new THREE.MeshBasicMaterial({ color: 0x0066FF });
    const nodeGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat.clone());
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 26;
      const z = (Math.random() - 0.5) * 22;
      mesh.position.set(x, y, z);
      mesh.material.opacity = 0.4 + Math.random() * 0.5;
      mesh.material.transparent = true;
      nodePositions.push(mesh.position);
      nodeGroup.add(mesh);
    }

    // Connection lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3399FF,
      transparent: true,
      opacity: 0.07
    });

    const maxDist = 12;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxDist && Math.random() > 0.6) {
          const pts = [nodePositions[i], nodePositions[j]];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
          nodeGroup.add(new THREE.Line(lineGeo, lineMat));
        }
      }
    }

    scene.add(nodeGroup);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    let frame = 0;
    function animate() {
      requestAnimationFrame(animate);
      frame++;

      nodeGroup.rotation.y += 0.0008;
      nodeGroup.rotation.x += 0.0003;
      camera.position.x += (mouseX * 2  - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 1 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      if (frame % 3 === 0) {
        nodeGroup.children.forEach((child, i) => {
          if (child.isMesh && child.material) {
            child.material.opacity = 0.3 + 0.5 * (0.5 + 0.5 * Math.sin(frame * 0.02 + i));
          }
        });
      }

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      const nW = canvas.parentElement.clientWidth;
      const nH = canvas.parentElement.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    });
  }

  // ─────────────────────────────────────────────────────────
  // NAV scroll state
  // ─────────────────────────────────────────────────────────
  function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ─────────────────────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    runBootSequence();
  });

})();
