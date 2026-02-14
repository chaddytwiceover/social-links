document.addEventListener('DOMContentLoaded', () => {
    activateHeartTrail();
});

function activateHeartTrail() {
    const trailLayer = getHeartLayer();
    if (!trailLayer) return;

    let lastTrailTime = 0;
    document.addEventListener('pointermove', (evt) => {
        if (evt.pointerType && evt.pointerType !== 'mouse' && evt.pointerType !== 'pen') return;
        const now = Date.now();
        if (now - lastTrailTime < 70) return;
        lastTrailTime = now;
        spawnHeart(evt.clientX, evt.clientY, 1500, trailLayer);
    });
}

function spawnHeart(x, y, duration = 1500, layer = document.body) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    const size = 10 + Math.random() * 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${x - size / 2}px`;
    heart.style.top = `${y - size / 2}px`;
    heart.style.animationDuration = `${duration}ms`;
    heart.style.opacity = String(0.55 + Math.random() * 0.4);
    layer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration);
}

function getHeartLayer() {
    return document.getElementById('heart-trail') || document.body;
}
