let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// 自动轮播功能
function autoSlides() {
  slideIndex++;
  if (slideIndex >= document.getElementsByClassName("carousel-item").length) {
    slideIndex = 0;
  }
  showSlides(slideIndex);
  setTimeout(autoSlides, 5000); // 每5秒切换一次
}

autoSlides(); // 启动自动轮播