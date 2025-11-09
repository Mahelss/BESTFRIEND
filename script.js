// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 4000);
}

// SCROLL FADE-IN FOR VIDEOS
const items = document.querySelectorAll('.gallery video');

function checkPosition() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);

const audio = document.getElementById("myAudio");
const button = document.getElementById("playButton");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    button.textContent = "Pause";
  } else {
    audio.pause();
    button.textContent = "Play to Listen";
  }
});
