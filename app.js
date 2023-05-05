async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Path: app.js

async function openPopup(id, passData) {
    var popupContainer = document.getElementById("containerD");
    popupContainer.style.display = "flex";
    await sleep(100);
    popupContainer.style.opacity = 1;
    var popup = document.getElementById(id);
    popup.style.display = "flex";
    await sleep(100);
    popup.style.opacity = 1;
}
async function closePopup(id) {
    var popup = document.getElementById(id);
    popup.style.opacity = 0;
    await sleep(100);
    popup.style.display = "none";
    var popupContainer = document.getElementById("containerD");
    popupContainer.style.opacity = 0;
    await sleep(100);
    popupContainer.style.display = "none";
}


async function test() {
    openPopup("transactionConf");
}

function closeThis(e) {
    closePopup(e)
}