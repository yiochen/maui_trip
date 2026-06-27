// Service Worker for offline caching
const CACHE_NAME = "maui-trip-v2";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/manifest.json",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
];

// Install: cache all core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve from cache first, then network (stale-while-revalidate for images/tiles)
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // For navigation requests, serve index.html from cache
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html").then((cached) => {
        return cached || fetch(request);
      })
    );
    return;
  }

  // For map tiles and images: cache-first with network fallback
  if (
    url.hostname.includes("tile.openstreetmap.org") ||
    url.hostname.includes("unsplash.com") ||
    url.hostname.includes("images.unsplash.com")
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;

        return fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, clone);
              });
            }
            return response;
          })
          .catch(() => {
            // Return a placeholder for images when offline
            if (request.url.includes("unsplash")) {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><rect fill="#e8f5f0" width="600" height="300"/><text x="300" y="150" text-anchor="middle" fill="#1a7a5c" font-size="16" font-family="sans-serif">Image unavailable offline</text></svg>',
                { headers: { "Content-Type": "image/svg+xml" } }
              );
            }
            return new Response("", { status: 404 });
          });
      })
    );
    return;
  }

  // For all other requests: cache-first, then network
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
        }
        return response;
      });
    })
  );
});
