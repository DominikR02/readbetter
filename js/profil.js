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
            book.style.display = 'block';
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
            book.style.display = 'block';
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

function openUebergabeModal() {
    document.getElementById('uebergabeModal').style.display = "block";
    document.getElementById('uebergabeText').style.display = "block";
    document.getElementById('rueckgabeText').style.display = "none";
    document.getElementById('uebregabeButton').style.display = "block";
    document.getElementById('rueckgabeButton').style.display = "none";
}

function openRueckgabeModal() {
    document.getElementById('uebergabeModal').style.display = "block";
    document.getElementById('uebergabeText').style.display = "none";
    document.getElementById('rueckgabeText').style.display = "block";
    document.getElementById('uebregabeButton').style.display = "none";
    document.getElementById('rueckgabeButton').style.display = "block";
}

function closeUebergabeModal() {
    document.getElementById('uebergabeModal').style.display = "none";
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}

function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
}

function handleFiles(files) {
    const uploadedImages = document.getElementById('uploaded-images');

    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.src = e.target.result;
                img.className = 'uploaded-image';

                // Füge das Bild direkt zum Container hinzu
                uploadedImages.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
}