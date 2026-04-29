const CACHE_NAME = 'kgm-expert-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/blog.html',
  '/article-gestion-dechets-agoe.html',
  '/article-pdc-communal.html',
  '/article-sig-gestion.html',
  '/article-loi-2019.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
