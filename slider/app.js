let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function runSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function prevSlide() {
  runSlide(currentSlide - 1);
}
function nextSlide() {
  runSlide(currentSlide + 1);
}
