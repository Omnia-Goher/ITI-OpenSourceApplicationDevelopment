let imageIndex = 1;
showSlides(imageIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { 
        imageIndex = 1 
    }
    if (n < 1) { 
        imageIndex = slides.length 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(imageIndex += n);
}

function currentSlide(n) {
    showSlides(imageIndex = n);
}