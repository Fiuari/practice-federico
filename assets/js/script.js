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



// Accordion toggle (adds .open to the clicked .accordion-item)
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const toggle = item.querySelector('.accordion-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    // close others
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('open');
        const otherToggle = otherItem.querySelector('.accordion-toggle');
        if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');

        const otherContent = otherItem.querySelector('.accordion-content');
        if (otherContent) otherContent.style.maxHeight = null;
      }
    });

    const isOpen = item.classList.contains('open');
    const content = item.querySelector('.accordion-content');

    if (isOpen) {
      item.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      if (content) content.style.maxHeight = null;
    } else {
      item.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      if (content) content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});


const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));
