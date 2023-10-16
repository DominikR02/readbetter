function closeUpgradeModal(){
    document.getElementById('abo-upgrade').style.display = "none";
    document.getElementById('basic-upgrade').style.display = "none";
    document.getElementById('pro-upgrade').style.display = "none";
    document.getElementById('payment-info').style.display = "block";
    document.getElementById('abo-confirm').style.display = "none";
}

function openUpgradeModalBasic() {
    document.getElementById('abo-upgrade').style.display = "block";
    document.getElementById('basic-upgrade').style.display = "block";
    document.getElementById('payment-info').style.display = "none";
    document.getElementById('abo-confirm').style.display = "block";
}

function openUpgradeModalPro() {
    document.getElementById('abo-upgrade').style.display = "block";
    document.getElementById('pro-upgrade').style.display = "block";
}

function openUpgradeModalProReader() {
    document.getElementById('abo-upgrade').style.display = "block";
    document.getElementById('proReader-upgrade').style.display = "block";
}

function savePayment() {
    document.getElementById('payment-info').style.display = "none";
    document.getElementById('abo-confirm').style.display = "block";
}