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