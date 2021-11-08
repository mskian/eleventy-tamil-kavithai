document.addEventListener('DOMContentLoaded', init, false);

function init() {
    if (!navigator.onLine) {
        const statusElem = document.querySelector('.page-status')

        statusElem.innerHTML = 'offline'
    }
}

let pwaInstalled = localStorage.getItem('pwaInstalled') == 'yes'
if (window.matchMedia('(display-mode: standalone)').matches) {
    localStorage.setItem('pwaInstalled', 'yes')
    pwaInstalled = true
}
if (window.navigator.standalone === true) {
    localStorage.setItem('pwaInstalled', 'yes')
    pwaInstalled = true
}
if (pwaInstalled) {
    document.getElementById('installPWA').style.display = 'none'
} else {
    document.getElementById('installPWA').style.display = 'inline-flex'
}
let deferredPrompt = null
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e
})
async function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then(({
            outcome
        }) => {
            if (outcome === 'accepted') {
                console.log('Your PWA has been installed')
            } else {
                console.log('User choose to not install your PWA')
            }
            deferredPrompt = null
        })
    }
}
window.addEventListener('appinstalled', (evt) => {
    localStorage.setItem('pwaInstalled', 'yes')
    pwaInstalled = true
    document.getElementById('installPWA').style.display = 'none'
})