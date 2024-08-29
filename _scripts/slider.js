let slideIndex = 0;

function changeSl(n) {
  const slides = document.querySelectorAll('.slider-item');
  const totalSlides = slides.length;
  const wrapper = document.querySelector('.slider-wrapper');
  const itemsToShow = 3; // 每次显示三张图片

  slideIndex += n;

  // 循环播放
  if (slideIndex < 0) {
    slideIndex = totalSlides - itemsToShow;
  } else if (slideIndex >= totalSlides - itemsToShow + 1) {
    slideIndex = 0;
  }

  const newTransform = `translateX(-${(slideIndex * 100) / itemsToShow}%)`;
  wrapper.style.transform = newTransform;
}
