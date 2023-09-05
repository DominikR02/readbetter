// JavaScript-Funktion zum Ein- und Ausblenden des Pop-up-Menüs
function toggleBurgerMenu() {
    var popupMenu = document.getElementById('popupMenu');
    var popupOverlay = document.getElementById('popupOverlay');

    // Wenn das Pop-up-Menü ausgeblendet ist, öffne es und zeige das Overlay
    if (popupMenu.style.right === '-300px' || popupMenu.style.right === '') {
        popupMenu.style.right = '0';
        popupOverlay.style.display = 'block';
    } else {
        // Andernfalls, wenn das Pop-up-Menü sichtbar ist, schließe es und verberge das Overlay
        popupMenu.style.right = '-300px';
        popupOverlay.style.display = 'none';
    }
}

// JavaScript-Funktion zum Schließen des Pop-up-Menüs
function closePopupMenu() {
    var popupMenu = document.getElementById('popupMenu');
    var popupOverlay = document.getElementById('popupOverlay');

    // Schließe das Pop-up-Menü und verberge das Overlay
    popupMenu.style.right = '-300px';
    popupOverlay.style.display = 'none';
}

// JavaScript-Funktion zum Ein- und Ausblenden des Pop-up-Menüs
function toggleSearchMenu() {
    var popupMenu = document.getElementById('popupMenuSearch');
    var popupOverlay = document.getElementById('popupOverlaySearch');

    // Wenn das Pop-up-Menü ausgeblendet ist, öffne es und zeige das Overlay
    if (popupMenu.style.right === '-300px' || popupMenu.style.right === '') {
        popupMenu.style.right = '0';
        popupOverlay.style.display = 'block';
    } else {
        // Andernfalls, wenn das Pop-up-Menü sichtbar ist, schließe es und verberge das Overlay
        popupMenu.style.right = '-300px';
        popupOverlay.style.display = 'none';
    }
}

// JavaScript-Funktion zum Schließen des Pop-up-Menüs
function closePopupMenuSearch() {
    var popupMenu = document.getElementById('popupMenuSearch');
    var popupOverlay = document.getElementById('popupOverlaySearch');

    // Schließe das Pop-up-Menü und verberge das Overlay
    popupMenu.style.right = '-300px';
    popupOverlay.style.display = 'none';
}