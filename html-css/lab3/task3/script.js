var worker = new Worker("worker.js")
var sum = document.getElementById("sum");
var bg = document.getElementById("bg");

function calculate(){
    worker.postMessage(""); 
}

function changeBg() {
    document.body.style.background !== "green" ? document.body.style.background = "green" : document.body.style.background = "blue"
}