var text = document.querySelector("#text");
var count = document.querySelector(".counter");

var c=0;
setInterval(() => {
    if(c<1000){
    c++;
    count.innerText=c;
}
}, 5);

setTimeout(() => {
    text.innerText=c;
}, 5500);