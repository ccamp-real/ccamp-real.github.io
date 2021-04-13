var slideindex = 1;
showslides(slideindex);

function plusslides(n){
    showslides(slideindex += n);
}

function currentslide(n){
    showslides(slideindex = n);
}

function showslides(n){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideindex = 1}
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindex-1].style.display = block;
    dots[slideindex-1].className += " active";
}