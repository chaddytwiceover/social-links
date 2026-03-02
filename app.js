/* app.js – minimal interactions */

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(() => {});
}

// Release compositing layers claimed by .fade-up once each entrance
// animation finishes, so the browser can free GPU memory.
document.querySelectorAll('.fade-up').forEach((el) => {
  el.addEventListener('animationend', () => {
    el.style.willChange = 'auto';
  }, { once: true });
});
