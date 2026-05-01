const CACHE_NAME = 'kgm-expert-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png'
];

// Installation et mise en cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (e) => {
  console.log('Service Worker activé');
});

// Interception des requêtes (Obligatoire pour le bouton d'installation)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
