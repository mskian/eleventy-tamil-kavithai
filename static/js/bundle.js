const ham = document.querySelector('.navbar__hamburger')
const menu = document.querySelector('.navbar__mobile-links')
const darkToggleButtons = document.querySelectorAll('.dark-toggle')

function changeDarkToggleBtnIcon() {
    darkToggleButtons.forEach(btn => {
        if (btn.querySelector('img').src.indexOf('/img/moon.svg') !== -1) {
            btn.querySelector('img').src = '/img/sun.svg';
        } else {
            btn.querySelector('img').src = '/img/moon.svg';
        }
    })
}

if (
    localStorage.prefsDark === 'true' ||
    (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        localStorage.prefsDark !== 'false')
) {
    document.body.classList.add('dark')
    changeDarkToggleBtnIcon()
}

ham.addEventListener('click', () => {
    menu.classList.toggle('navbar__mobile-links--open')

    let prevState = JSON.parse(ham.getAttribute('aria-expanded'))
    ham.setAttribute('aria-expanded', !prevState)
})

darkToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeDarkToggleBtnIcon()

        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
            localStorage.prefsDark = 'false'
        } else {
            document.body.classList.add('dark')
            localStorage.prefsDark = 'true'
        }

    })
})

document.addEventListener('DOMContentLoaded', pwastatus, false);
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

function pwastatus() {
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