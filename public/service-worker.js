// Simple service worker for PWA installability
const CACHE_NAME = "astro-pwa-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/manifest.webmanifest",
  "/assets/images/favicon.ico",
  "/assets/images/favicon-16x16.png",
  "/assets/images/favicon-32x32.png",
  "/assets/images/48x48.png",
  "/assets/images/apple-touch-icon.png"
  // Add more static assets or generated Astro routes as needed
];

// Dynamically cache all files under /assets/
async function cacheAssets(cache) {
  try {
    const response = await fetch("/assets/");
    if (response.ok) {
      // If you have a directory listing or an API that returns asset files, parse and cache them here
      // For static Astro, you may need to manually add asset paths or use a build script to generate the list
    }
  } catch (e) {
    // Ignore if directory listing is not available
  }
  // Fallback: cache common asset types
  const assetTypes = ["fonts", "images", "json", "media"];
  for (const type of assetTypes) {
    try {
      const req = await fetch(`/assets/${type}/`);
      // If you have a directory listing, parse and cache files here
    } catch (e) {
      // Ignore
    }
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(ASSETS_TO_CACHE);
      // Optionally call cacheAssets(cache) if you have a way to enumerate all asset files
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then((response) => {
          // Optionally cache new requests here
          return response;
        })
        .catch(() => {
          // Optionally return a fallback page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }
        });
    })
  );
});
