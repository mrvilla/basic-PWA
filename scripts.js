if ('serviceWorker' in navigator) {
    // if you want your service worker to be in a subFolder, specify folder after /
    navigator.serviceWorker.register('service-worker.js', {scope: '/'})
        .then(function(registration) {
        // Worker is registered
        }).catch(function(error) {
        // There was an error registering the SW
        });
}