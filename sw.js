const CACHE_NAME = 'porte-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './porte1.png',
  './porte2.png',
  './porte3.png',
  './porte4.png',
  './p1.mp4',
  './p1rev.mp4',
  './p2.mp4',
  './p3.mp4',
  './p4.mp4',
  './p5.mp4',
  './p6.mp4',
  './p7.mp4',
  './p8.mp4',
  './p9.mp4',
  './p10.mp4',
  './p11.mp4',
  './p12.mp4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
                  .map(name => caches.delete(name))
      )
    )
  );
});
