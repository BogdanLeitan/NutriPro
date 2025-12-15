"use strict";
let a = document.querySelectorAll(".mancare");
let isDebugg = true;
a.forEach(function (elem) {
    elem.addEventListener("click", () => {
        const img = elem.children[0];
        let path = img.src;
        extragereDinPath(path);
    });
});
function extragereDinPath(path) {
    const fileName = path.split("/").pop();
    window.location.href = `/nutripro/dist/Catalog/produs.html?produs=${fileName}`;
}
