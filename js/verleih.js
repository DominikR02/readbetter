function showNothing () {
    document.getElementById('zusatz-paypal').style.display = "none";
    document.getElementById('zusatz-lastschrift').style.display = "none";
    document.getElementById('zusatz-visa').style.display = "none";
}

function showPaypal() {
    document.getElementById('zusatz-paypal').style.display = "block";
    document.getElementById('zusatz-lastschrift').style.display = "none";
    document.getElementById('zusatz-visa').style.display = "none";
}

function showLastschrift(){
    document.getElementById('zusatz-paypal').style.display = "none";
    document.getElementById('zusatz-lastschrift').style.display = "block";
    document.getElementById('zusatz-visa').style.display = "none";
}

function showVisa() {
    document.getElementById('zusatz-paypal').style.display = "none";
    document.getElementById('zusatz-lastschrift').style.display = "none";
    document.getElementById('zusatz-visa').style.display = "block";
}

function showNothingAdress () {
    document.getElementById('zusatz-newAdress').style.display = "none";
}

function showNewAdress () {
    document.getElementById('zusatz-newAdress').style.display = "block";
}