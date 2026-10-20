// Bump CACHE on every index.html change, or installed apps keep the old form.
// Name is distinct from the refinery tracker's cache ("sucrocan-vN") so the two never clash.
const CACHE = "sucrocan-warehouse-v1";

// Cache everything except config.js — config must always load fresh
const STATIC = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  // Only clear this app's old caches — never touch other apps on the same domain
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith("sucrocan-warehouse-") && k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (e.request.url.includes("config.js") || e.request.url.includes("script.google")) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
