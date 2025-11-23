// ============================================
// CHADDYTWICEOVER DESIGN SYSTEM - INTERACTIONS
// Version 1.0 - November 2025
// ============================================

// --- Cursor Trail Effect ---
(function() {
  const trail = document.getElementById('cursor-trail');
  if (!trail) return;
  
  // Check if device supports hover (not mobile)
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (isMobile || prefersReducedMotion) {
    trail.style.display = 'none';
    return;
  }
  
  let mouseX = 0;
  let mouseY = 0;
  let trailX = 0;
  let trailY = 0;
  
  // Update mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Animate trail with smooth following
  function animateTrail() {
    // Ease towards mouse position
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';
    
    requestAnimationFrame(animateTrail);
  }
  
  animateTrail();
})();

// --- Footer Year Auto-Fill ---
(function() {
  const yearEl = document.getElementById('year');
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
})();

// --- Smooth Scroll for Internal Links ---
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
