
let sliderIndex = 1;
showSlidesr(sliderIndex);

 function plusSlider() {
 showSlidesr(sliderIndex += 1);
}




function minusSlider() {
    showSlidesr(sliderIndex -= 1);  
}

function currentSlide(n) {
    showSlidesr(sliderIndex = n);
}

function showSlidesr(n) {
   
    let slides = document.getElementsByClassName("item-video");
    let dots = document.getElementsByClassName("slider-dots_item-video");
    if (n > slides.length) {
      sliderIndex = 1
    }
    if (n < 1) {
        sliderIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" _active-btns-video", "");
    }
    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].className += " _active-btns-video";
}

