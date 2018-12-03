// add the files you want cache (basic add to cache)
const urls = ['/', 'index.html', 'styles.css'];

self.addEventListener('install', e => {
    console.log("The SW is now installed");
    e.waitUntil(caches.open('mrVillasCache')
        .then(function (cache) {
            return cache.addAll(urls);
        })
    );
});

// register
self.addEventListener('fetch', e => {
    console.log('Fetch Event listener: ', e);
    console.log(`Registered: ${e.request.url}`); // list of all files being saved

    // cache
    e.respondWith(caches.match(e.request)
        .then(function (response) {
            if (response) {
                // The request is in the cache
                return response;
            } else {
                // Need to go to the network
                return fetch(e.request);
            }
        })
    );


});
