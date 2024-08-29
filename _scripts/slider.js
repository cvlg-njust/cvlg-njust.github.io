let currentSlideIndex = 0;

function changeSl(direction) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const sliderItems = document.querySelectorAll('.slider-item');
  const totalSlides = sliderItems.length;
  const itemsToShow = 3; // 每次显示三张图片
  const itemWidth = sliderItems[0].getBoundingClientRect().width + 10; // 获取每个图片项的宽度，加上margin

  currentSlideIndex += direction;

  // 确保在滑动到最后一张或第一张时，循环播放
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - itemsToShow;
  } else if (currentSlideIndex > totalSlides - itemsToShow) {
    currentSlideIndex = 0;
  }

  const newTransform = `translateX(-${currentSlideIndex * itemWidth}px)`;
  sliderWrapper.style.transform = newTransform;
}

document.querySelector('.prev').addEventListener('click', function() {
  changeSl(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  changeSl(1);
});

