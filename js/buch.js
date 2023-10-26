function changeImage() {
    var img = document.getElementById('zuBib');
    if (img.src.endsWith('zuBib.svg')) {
        img.src = '../pic/inBib.svg';
        img.alt = 'zur Bibliothek hinzugefügt';
    } else {
        img.src = 'zuBib.svg';
        img.alt = 'zur Bibliothek hinzufügen';
    }
}

// JavaScript to show/hide the hidden text and toggle buttons
const weiterlesenButton = document.getElementById('weiterlesen-button');
const zuklappenButton = document.getElementById('zuklappen-button');
const hiddenText = document.getElementById('hidden-text');

weiterlesenButton.addEventListener('click', () => {
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
        weiterlesenButton.style.display = 'none';
        zuklappenButton.style.display = 'block';
    }
});

zuklappenButton.addEventListener('click', () => {
    if (hiddenText.style.display === 'block') {
        hiddenText.style.display = 'none';
        weiterlesenButton.style.display = 'block';
        zuklappenButton.style.display = 'none';
    }
});


function showTab(tabName) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('hidden');
    }
    document.getElementById(tabName + '-content').classList.remove('hidden');
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function sendComment() {
    modal.style.display = "none";
    document.getElementById('bewertung').innerText = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
}

function openVerleihModal() {
    document.getElementById('verleihModal').style.display = "block";
}

function closeVerleihModal() {
    document.getElementById('verleihModal').style.display = "none";
}

function toggleZeit(tag) {
    var zeitDiv = document.getElementById(tag + 'Zeit');
    var checkbox = document.getElementById(tag);

    if (checkbox.checked) {
        zeitDiv.style.display = 'block';
    } else {
        zeitDiv.style.display = 'none';
    }
}

function verleihModalWeiter(){
    document.getElementById('saveTime').style.display = "none";
    document.getElementById('verleihBestaetigung').style.display = "block";
}

function verleih(){
    var agb = document.getElementById('agb');
    var datenschutz = document.getElementById('datenschutz');

    if (agb.checked & datenschutz.checked) {
        closeVerleihModal();
        document.getElementById('rainerZufallVerleih').style.display="block";
    } else {
        document.getElementById('hint-checkboxes').style.display = "block";
    }
}