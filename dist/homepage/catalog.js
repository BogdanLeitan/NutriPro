"use strict";
let a = document.querySelectorAll(".mancare");
let isDebugg = false;
a.forEach(function (elem) {
    elem.addEventListener("click", () => {
        const img = elem.children[0];
        let path = img.src;
        extragereDinPath(path);
    });
});
function extragereDinPath(path) {
    const newPath = decodeURIComponent(path);
    if (isDebugg) {
        window.location.href = `produs.html?${newPath}`;
    }
    else {
        window.location.href = `/nutripro/dist/explore/produs.html?${newPath}`;
    }
}
