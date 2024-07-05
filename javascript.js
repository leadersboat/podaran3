let currentIndex = 0;

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = totalSlides;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex - 1].style.display = 'block';
}

showSlides(); // Start the slideshow automatically


    

function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

setInterval(autoSlide, 3000);