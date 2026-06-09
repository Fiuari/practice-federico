const burger = document.querySelector(".burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("open");
  burger.classList.toggle("active");
});

const wrappers = document.querySelectorAll(".rooms-wrapper");
const arrows = document.querySelectorAll(".poly-arrow"); // кнопки зі стрілкою
let currentIndex = 0;

// функція показу потрібного слайду
function showSlide(index) {
  wrappers.forEach((wrapper, i) => {
    wrapper.style.opacity = i === index ? "1" : "0";
    wrapper.style.transform = i === index ? "translateX(0)" : "translateX(100%)";
    wrapper.style.zIndex = i === index ? "1" : "0";
  });
}

// початковий стан
showSlide(currentIndex);

// при кліку на стрілку
arrows.forEach(arrow => {
  arrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % wrappers.length; // зациклення
    showSlide(currentIndex);
  });
});
