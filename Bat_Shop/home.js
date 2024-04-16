function displayAbout() {
    event.preventDefault();
    var popupElement = document.querySelector(".popup-container");
    var blurElement = document.querySelector(".blur");
    popupElement.style.visibility = "visible";
    blurElement.style.visibility = "visible";
}

function closeAbout() {
    event.preventDefault();
    var popupElement = document.querySelector(".popup-container");
    var blurElement = document.querySelector(".blur");
    popupElement.style.visibility = "hidden";
    blurElement.style.visibility = "hidden";
}

function displayCart() {
    event.preventDefault();
    var cartElement = document.querySelector(".cart-container");
    var blurElement = document.querySelector(".blur");
    cartElement.style.visibility = "visible";
    blurElement.style.visibility = "visible";
}

function closeCart() {
    event.preventDefault();
    var cartElement = document.querySelector(".cart-container");
    var blurElement = document.querySelector(".blur");
    cartElement.style.visibility = "hidden";
    blurElement.style.visibility = "hidden";
}