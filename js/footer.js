// JavaScript-Funktion zum Scrollen nach oben
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// JavaScript-Funktion zum Einblenden des "nach oben"-Buttons beim Scrollen
window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});