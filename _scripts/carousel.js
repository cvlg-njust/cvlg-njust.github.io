let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // 隐藏所有幻灯片
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // 如果索引超过长度则重置
  slides[slideIndex - 1].style.display = "block";  // 显示当前幻灯片
}

// 初始显示第一张幻灯片
showSlides();

// 每5秒自动切换一次幻灯片
let slideInterval = setInterval(showSlides, 5000);

// 为了防止手动点击与自动轮播冲突，点击切换时可以清除自动轮播
function changeSlide(n) {
  clearInterval(slideInterval); // 清除定时器
  slideIndex += n;  // 更新幻灯片索引
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  showSlides();  // 显示更新后的幻灯片
  slideInterval = setInterval(showSlides, 5000); // 重启自动轮播
}
