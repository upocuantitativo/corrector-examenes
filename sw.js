/* Service worker: red primero para el HTML (así siempre llega la última versión
   cuando hay internet) y caché de respaldo para uso sin conexión. */
const CACHE = 'corrector-v12';
const ASSETS = ['./', 'index.html', 'factory.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const accept = req.headers.get('accept') || '';
  const isHTML = req.mode === 'navigate' || accept.includes('text/html');

  if (isHTML) {
    // Red primero: trae la versión nueva; si no hay red, usa la caché.
    e.respondWith(
      fetch(req)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
    );
  } else {
    // Estáticos: caché primero, y actualiza en segundo plano.
    e.respondWith(
      caches.match(req).then(cached => {
        const net = fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; }).catch(() => cached);
        return cached || net;
      })
    );
  }
});
