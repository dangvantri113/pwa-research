const myStaticDevCoffee = "my-pwa-site-v1";
const assets = [
  "/",
  "/index.php",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
    "/offline.html"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(myStaticDevCoffee).then(cache => {
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
                    return caches.open(myStaticDevCoffee)
                        .then(function(cache) {
                          cache.put(event.request.url, res.clone());    //save the response for future
                          return res;   // return the fetched data
                        })
                  })
                  .catch(function(err) {       // fallback mechanism

                          return cache.match('/offline.html');
                       
                  });
            }
          })
  );
});
