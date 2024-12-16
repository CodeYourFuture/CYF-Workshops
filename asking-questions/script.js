//netlify triggers a reload?

function openDetailsIfHashPresent() {
    if (location.hash === '#problem-bank') {
        document.querySelector('details#problem-bank')?.open = true;
    }
}

openDetailsIfHashPresent();
window.addEventListener('load', openDetailsIfHashPresent);