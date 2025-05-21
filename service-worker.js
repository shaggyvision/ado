
self.addEventListener('install', function(e) {
    console.log('Service Worker instalado');
});
self.addEventListener('fetch', function(e) {
    console.log('Interceptando petición: ', e.request.url);
});
