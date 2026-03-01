const chips = document.querySelectorAll('.chip');
const linkButtons = document.querySelectorAll('.link-button[data-category]');
const mesh = document.querySelector('.mesh');
const copyEmailButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');

function setFilter(filter) {
  chips.forEach((chip) => {
    const isActive = chip.dataset.filter === filter;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });

  linkButtons.forEach((link) => {
    const category = link.dataset.category;
    const shouldShow = filter === 'all' || category === filter;
    link.classList.toggle('hidden', !shouldShow);
  });
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    setFilter(chip.dataset.filter || 'all');
  });
});

if (mesh) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    mesh.style.setProperty('--mx', `${x}%`);
    mesh.style.setProperty('--my', `${y}%`);
  });
}

if (copyEmailButton && copyStatus) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.email || '';

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Email copied to clipboard.';
    } catch {
      copyStatus.textContent = 'Clipboard unavailable. Use contact@chaddytwiceover.com.';
    }

    window.setTimeout(() => {
      copyStatus.textContent = '';
    }, 2500);
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
