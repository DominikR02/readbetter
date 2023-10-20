function filterBooks(genre) {
    const books = document.querySelectorAll('.book');
    const buttons = document.querySelectorAll('#genreFilter button');

    // Entferne die 'selected'-Klasse von allen Buttons
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    books.forEach(book => {
        if (genre === 'all' || book.classList.contains(genre)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });

    // Füge die 'selected'-Klasse zum ausgewählten Button hinzu
    const selectedButton = document.querySelector(`#genreFilter button[data-genre="${genre}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}
