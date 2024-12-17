//netlify triggers a reload?

function openDetailsIfHashPresent() {
    if (location.hash === '#problem-bank') {
        document.querySelector('details#problem-bank')?.open = true;
    }
}

openDetailsIfHashPresent();
document.addEventListener('DOMContentLoaded', openDetailsIfHashPresent);
window.addEventListener('hashchange', openDetailsIfHashPresent);