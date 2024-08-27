let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");
let slideInterval;  // 定时器变量

// 初始化幻灯片
function initSlides() {
  showSlide(slideIndex);
  startAutoSlide();
}

// 显示指定的幻灯片
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // 隐藏所有幻灯片
  }
  slides[n].style.display = "block";  // 显示指定索引的幻灯片
}

// 自动轮播幻灯片
function startAutoSlide() {
  slideInterval = setInterval(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, 5000); // 每5秒切换一次
}

// 停止自动轮播
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// 手动切换幻灯片，并重启自动轮播
function changeSlide(n) {
  stopAutoSlide();
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  showSlide(slideIndex);
  startAutoSlide();
}

// 页面加载完成后初始化幻灯片
window.onload = initSlides;
