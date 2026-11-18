/* Service worker mínimo: só permite instalar a página como app.
   Não guarda nada em cache; a página sempre carrega a versão mais recente do GitHub. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
