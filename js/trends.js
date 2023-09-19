function showMoreComics() {
    // Elemente für die weiteren Comics anzeigen
    var weiterComics = document.getElementById("weiterComics");
    weiterComics.style.display = "flex";

    // Mehr Button ausblenden
    var mehrButtonComics = document.getElementById("mehrButtonComics");
    mehrButtonComics.style.display = "none";

    // Weniger Button einblenden
    var wenigerButtonComics = document.getElementById("wenigerButtonComics");
    wenigerButtonComics.style.display = "block";
}

function showLessComics() {
    // Elemente für die weiteren Comics anzeigen
    var weiterComics = document.getElementById("weiterComics");
    weiterComics.style.display = "none";

    // Mehr Button ausblenden
    var mehrButtonComics = document.getElementById("mehrButtonComics");
    mehrButtonComics.style.display = "block";

    // Weniger Button einblenden
    var wenigerButtonComics = document.getElementById("wenigerButtonComics");
    wenigerButtonComics.style.display = "none";
}