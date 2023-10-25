function openMyProfil () {
    document.getElementById('profilSite').style.display = "block";
    document.getElementById('ausgeliehenSite').style.display = "none";
    document.getElementById('meineBuecherSite').style.display = "none";
    document.getElementById('transaktionSite').style.display = "none";
    closeNav();
}

function openAusgeliehen() {
    document.getElementById('profilSite').style.display = "none";
    document.getElementById('ausgeliehenSite').style.display = "block";
    document.getElementById('meineBuecherSite').style.display = "none";
    document.getElementById('transaktionSite').style.display = "none";
    closeNav();
}

function openMyBooks() {
    document.getElementById('profilSite').style.display = "none";
    document.getElementById('ausgeliehenSite').style.display = "none";
    document.getElementById('meineBuecherSite').style.display = "block ";
    document.getElementById('transaktionSite').style.display = "none";
    closeNav();
}

function openTransaction() {
    document.getElementById('profilSite').style.display = "none";
    document.getElementById('ausgeliehenSite').style.display = "none";
    document.getElementById('meineBuecherSite').style.display = "none";
    document.getElementById('transaktionSite').style.display = "block";
    closeNav();
}

function filterAusgeliehenBuecher(status) {
    const books = document.querySelectorAll('.book');
    const buttons = document.querySelectorAll('#ausgeliehenFilter button');

    // Entferne die 'selected'-Klasse von allen Buttons
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    books.forEach(book => {
        if (status === 'all' || book.classList.contains(status)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });

    // Füge die 'selected'-Klasse zum ausgewählten Button hinzu
    const selectedButton = document.querySelector(`#ausgeliehenFilter button[data-genre="${status}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function filterMeineBuecher(status) {
    const books = document.querySelectorAll('.book');
    const buttons = document.querySelectorAll('#meineFilter button');

    // Entferne die 'selected'-Klasse von allen Buttons
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    books.forEach(book => {
        if (status === 'all' || book.classList.contains(status)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });

    // Füge die 'selected'-Klasse zum ausgewählten Button hinzu
    const selectedButton = document.querySelector(`#meineFilter button[data-genre="${status}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}
