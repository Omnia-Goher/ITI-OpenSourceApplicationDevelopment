var red=document.getElementById("red")
    green=document.getElementById("green"),
    blue=document.getElementById("blue"),
    text=document.getElementById("text"),


red.onchange = function () {
    text.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
green.onchange = function(){
    text.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
blue.onchange = function(){
    text.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
