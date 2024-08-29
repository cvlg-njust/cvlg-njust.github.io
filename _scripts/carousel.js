let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");
let dots = document.getElementsByClassName("dot");
let slideInterval;

function initSlides() {
  showSlide(slideIndex);
  startAutoSlide();
}

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "flex";
  dots[n].className += " active";
}

function startAutoSlide() {
  slideInterval = setInterval(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, 5000); 
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

function changeSlide(n) {
  stopAutoSlide();
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  showSlide(slideIndex);
  startAutoSlide();
}

function currentSlide(n) {
  stopAutoSlide();
  slideIndex = n;
  showSlide(slideIndex);
  startAutoSlide();
}

window.onload = initSlides;
