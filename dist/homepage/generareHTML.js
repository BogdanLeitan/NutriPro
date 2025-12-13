"use strict";
let url = window.location.href;
let countBars = 0;
let isWriting = false;
let x = "";
for (let i = 0; i < url.length; i++) {
    if (url[i] == "%") {
        countBars += 1;
    }
    if (countBars == 2) {
        isWriting = true;
    }
    if (isWriting) {
        x += url[i];
    }
}
let produsImg = document.getElementById("produsImg");
let imgPath = [
    "mancare1", "mancare2", "mancare3", "mancare4", "mancare5", "mancare6",
    "mancare7", "mancare8", "mancare9", "mancare10", "baton1", "baton2", "baton3",
    "baton4", "shake1", "shake2", "shake3", "shake4"
];
for (let i = 0; i < 18; i++) {
    if (x == `%2F${imgPath[i]}.webp`) {
        produsImg.src = `../../assets/poze mancare/${imgPath[i]}.webp`;
    }
}
