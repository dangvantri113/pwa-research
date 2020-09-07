const myStaticDev = "my-pwa-site-v1";
const assets = [
  "/",
  "/index.php",
  "/css/style.css",
  "/js/app.js",
  "/offline.html"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(myStaticDev).then(cache => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
          .then(function(response) {
            if (response) {
              return response;     // if valid response is found in cache return it
            } else {
              return fetch(event.request)     //fetch from internet
                  .then(function(res) {
                    return caches.open(myStaticDev)
                        .then(function(cache) {
                          cache.put(event.request.url, res.clone());    //save the response for future
                          return res;   // return the fetched data
                        })
                  })
                  .catch(function(err) {       // fallback mechanism
                    return caches.open(myStaticDev)
                        .then(function(cache) {
                          return cache.match('/offline.html');
                        });
                  });
            }
          })
  );
});
