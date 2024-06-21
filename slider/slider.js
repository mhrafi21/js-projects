// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  console.log(slide);
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = currentIndex < slide.length - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slide.length - 1;
    showSlide(currentIndex);
  }

  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);

  // Swipe and touch events
  slides.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slides.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slides.addEventListener("touchend", (e) => {
    if (Math.abs(startX - endX) > 50) {
      if (endX < startX) {
        // Swipe left
        nextSlide();
      } else {
        // Swipe right
        prevSlide();
      }
    }
  });

  // Mouse events (for desktop)
  slides.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  slides.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    if (Math.abs(startX - endX) > 50) {
      if (endX < startX) {
        // Swipe left
        nextSlide();
      } else {
        // Swipe right
        prevSlide();
      }
    }
  });
});
