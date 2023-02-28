var x = 0,
    y = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(x, y);
ctx.strokeStyle = "red";
var interval = setInterval(function () {
    if ((x == canvas.width && y == canvas.height)) {
        clearInterval(interval);
        alert("Animation End!");
    }
    else {
        x = x + canvas.width/4;
        y = y + canvas.height/4;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineTo( x, y);
        ctx.stroke();
    }
}, 200);
ctx.closePath();