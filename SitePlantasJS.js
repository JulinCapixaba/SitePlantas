const slides = document.getElementById("slides");
const carrossel = document.getElementById("carrossel");
const totalSlides = slides.children.length;
let index = 0;
let isPaused = false;

function moveCarousel() {
  if (!isPaused) {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 600}px)`;
  }
}

const interval = setInterval(moveCarousel, 3000);

// Pausar ao passar o mouse, retomar ao sair
carrossel.addEventListener("mouseenter", () => isPaused = true);
carrossel.addEventListener("mouseleave", () => isPaused = false);
