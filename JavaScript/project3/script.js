var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var voilet = document.querySelector(".voilet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

const getBGColor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

const changeColor = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

changeColor(red, getBGColor(red));
changeColor(blue, getBGColor(blue));
changeColor(voilet, getBGColor(voilet));
changeColor(orange, getBGColor(orange));
changeColor(pink, getBGColor(pink));