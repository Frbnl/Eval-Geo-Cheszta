const heroRoot = document.querySelector(".hero");

if (heroRoot) {
  const slides = heroRoot.querySelectorAll(".video-slide");
  const nextBtn = heroRoot.querySelector(".controls .next");
  const prevBtn = heroRoot.querySelector(".controls .prev");
  let current = 0;
  let heroTimer = null;

  const showSlide = (index) => {
    if (!slides.length) return;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  };

  const nextSlide = () => {
    if (!slides.length) return;
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prevSlide = () => {
    if (!slides.length) return;
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  const startHeroAutoplay = () => {
    if (!slides.length) return;
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide, 10000);
  };

  showSlide(0);
  startHeroAutoplay();

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startHeroAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startHeroAutoplay();
    });
  }
}

const spotCards = document.querySelectorAll(".spotlight-card");
const progressBar = document.querySelector(".progress-bar");
const totalEl = document.getElementById("total");
const currentEl = document.getElementById("current");
const spotNext = document.getElementById("spot-next");
const spotPrev = document.getElementById("spot-prev");

let spotIndex = 0;
const spotMax = spotCards.length || 1;
let spotTimer = null;

if (totalEl) totalEl.textContent = spotMax < 10 ? `0${spotMax}` : `${spotMax}`;

function showSpotlightSlide(i) {
  if (!spotCards.length) return;
  spotCards.forEach((c) => c.classList.remove("active"));
  spotCards[i].classList.add("active");
  if (currentEl) currentEl.textContent = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
  if (progressBar) progressBar.style.width = `${((i + 1) / spotMax) * 100}%`;
}

function startSpotAutoplay() {
  if (!spotCards.length) return;
  if (spotTimer) clearInterval(spotTimer);
  spotTimer = setInterval(() => {
    spotIndex = (spotIndex + 1) % spotMax;
    showSpotlightSlide(spotIndex);
  }, 6000);
}

if (spotCards.length) {
  if (spotNext) {
    spotNext.addEventListener("click", () => {
      spotIndex = (spotIndex + 1) % spotMax;
      showSpotlightSlide(spotIndex);
      startSpotAutoplay();
    });
  }

  if (spotPrev) {
    spotPrev.addEventListener("click", () => {
      spotIndex = (spotIndex - 1 + spotMax) % spotMax;
      showSpotlightSlide(spotIndex);
      startSpotAutoplay();
    });
  }

  showSpotlightSlide(0);
  startSpotAutoplay();
}

  
