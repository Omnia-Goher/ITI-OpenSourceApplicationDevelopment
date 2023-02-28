let imageIndex = 1;
var startInterval
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { 
        imageIndex = 1 
    }
    if (n < 1) { 
        imageIndex = slides.length 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[imageIndex - 1].style.display = "block";
}

function start(){
    startInterval = setInterval(function(){
        showSlides(imageIndex += 1)
    },3000)
}

function stop(){
    clearInterval(startInterval)
}

$(document).ready(function () {
    showSlides(imageIndex)
    start()
    $("#stop-slider").click(stop)
});
