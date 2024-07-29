let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const splashScreen = document.getElementById('splashScreen');
const mainContent = document.getElementById('mainContent');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';

    installBtn.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Show splash screen for 3 seconds
});

window.addEventListener('appinstalled', (evt) => {
    console.log('a2hs', 'installed');
});
