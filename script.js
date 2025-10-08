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

// --- Neural Network Animation ---
(function() {
  const canvas = document.getElementById('neural-network');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  const nodeCount = 50;
  const connectionDistance = 150;
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  }
  
  function initNodes() {
    nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: ['#00f0ff', '#ff00f0', '#fcee0a'][Math.floor(Math.random() * 3)]
      });
    }
  }
  
  function updateNodes() {
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    });
  }
  
  function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.3;
          ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function drawNodes() {
    nodes.forEach(node => {
      ctx.fillStyle = node.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = node.color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    updateNodes();
    drawConnections();
    drawNodes();
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', resize);
  resize();
  animate();
})();

  // --- Footer year auto-fill ---
  (function () {
    const yearEl = document.getElementById('year');
    if (!yearEl) return;
    yearEl.textContent = new Date().getFullYear();
  })();
