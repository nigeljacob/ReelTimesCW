let loading = document.getElementById("main");
let frame = document.getElementById("loading");
let number = document.getElementById("number");
const button  =document.querySelector("btn");
let movienamee = document.getElementById("movieName");
let moviedescr = document.getElementById("movieDesc");

document.querySelector("body").classList.add("no-scroll");
let count = 6;

setInterval(function() {
    count = count - 1;
    number.innerHTML = count;
    }, 1000);

setTimeout(function() {
    loading.style.opacity = "0";
    document.querySelector("body").classList.remove("no-scroll");
}, 2300);

setTimeout(function() {
    frame.hidden = true;
}, 7000);

