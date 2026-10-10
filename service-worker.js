const CACHE_NAME = "profissional-do-futuro-v146";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./assets/app/profissional-do-futuro-logo-final.png", "./assets/app/favicon-32.png", "./assets/app/apple-touch-icon.png", "./assets/app/icon-192.png", "./assets/app/icon-512.png", "./assets/app/icon-maskable-512.png"];
const SHELL_URLS = new Set(APP_SHELL.map(file => new URL(file, self.registration.scope).href));
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME && (key.startsWith("profissional-do-futuro-") || key.startsWith("start-area-"))).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if(request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  if(request.mode !== "navigate" && !SHELL_URLS.has(request.url)) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if(response.ok && SHELL_URLS.has(request.url)){
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch(error) {
      const cached = await caches.match(request);
      if(cached) return cached;
      if(request.mode === "navigate") return (await caches.match(new URL("./index.html",self.registration.scope).href)) || Response.error();
      return Response.error();
    }
  })());
});
