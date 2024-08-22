// assets/js/carousel.js
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Optional: Automatic slide change every 3 seconds
setInterval(() => changeSlide(1), 3000);
