// Service Worker để cache resources và giảm third-party requests
const CACHE_NAME = 'baby-bliss-v1';
const CLOUDINARY_CACHE = 'cloudinary-images-v1';

// Resources cần cache
const urlsToCache = [
  '/',
  '/src/main.tsx',
  '/src/index.css'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event - handle Cloudinary images
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Cache Cloudinary images
  if (url.hostname === 'res.cloudinary.com') {
    event.respondWith(
      caches.open(CLOUDINARY_CACHE)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              return fetch(request, {
                mode: 'cors',
                credentials: 'omit' // Không gửi cookies
              })
              .then((response) => {
                // Clone response để cache
                const responseToCache = response.clone();
                cache.put(request, responseToCache);
                return response;
              });
            });
        })
    );
    return;
  }

  // Cache other resources
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(request);
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== CLOUDINARY_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
