const CACHE_NAME = 'kgm-expert-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});
self.addEventListener('install', (e) => {
  console.log('SW installé');
});

self.addEventListener('fetch', (e) => {
  // Vide pour l'instant
});
