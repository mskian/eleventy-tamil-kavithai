document.addEventListener('DOMContentLoaded', init, false);

function init() {
    if ('serviceWorker' in navigator && navigator.onLine) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js')
                .then(function(registration) {
                    console.log('PWA service worker ready');
                    registration.update();
                })
                .catch(function(error) {
                    console.log('Registration failed with ' + error);
                });
        });
    }
}