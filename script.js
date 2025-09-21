// --- Responsive No-Wrap Auto-Fit for the Header ---
(function () {
  const heading = document.querySelector('.glitch');
  if (!heading) return;

  const MIN = 24;   // px
  const MAX = 120;  // px (you can bump this higher for wide desktops)

  function fits() {
    const container = heading.parentElement; // header or container
    const maxWidth = Math.floor(container.clientWidth - 24); // padding safety
    return heading.scrollWidth <= maxWidth;
  }

  function fitHeading() {
    // Start optimistic, then binary search to the perfect size.
    let low = MIN, high = MAX, best = MIN;

    // Prevent wrapping while measuring
    heading.style.whiteSpace = 'nowrap';
    heading.style.overflow = 'hidden';

    for (let i = 0; i < 12; i++) { // ~4096 precision with 12 iters
      const mid = (low + high) / 2;
      heading.style.fontSize = mid + 'px';
      if (fits()) {
        best = mid;
        low = mid;
      } else {
        high = mid;
      }
    }

    heading.style.fontSize = best + 'px';

    // Optional: tweak letter-spacing a touch based on size
    // Slightly tighter tracking at small sizes, looser at large
    const track = Math.max(0.02, Math.min(0.12, (best - MIN) / (MAX - MIN) * 0.1 + 0.02));
    heading.style.letterSpacing = track + 'em';
  }

  // Run on load and whenever layout changes
  window.addEventListener('load', fitHeading);
  window.addEventListener('resize', fitHeading);
  // Helpful when fonts finish loading
  document.fonts && document.fonts.ready && document.fonts.ready.then(fitHeading);
})();

  // --- Footer year auto-fill ---
  (function () {
    const yearEl = document.getElementById('year');
    if (!yearEl) return;
    yearEl.textContent = new Date().getFullYear();
  })();
