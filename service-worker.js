const CACHE_NAME = 'clean-portal-v3';
const OFFLINE_URL = '/offline.html';
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.webmanifest',
  '/miami-bg.jpg',
  OFFLINE_URL
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return null;
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Let Google Fonts load normally (don't intercept)
  const url = new URL(event.request.url);
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Only cache same-origin or successful responses (avoid opaque 0-byte entries)
        if (response.status === 200 && response.type !== 'opaque') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
          return new Response('', { status: 503, statusText: 'Offline' });
        })
      )
  );
});
