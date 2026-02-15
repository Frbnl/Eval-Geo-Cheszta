const header = document.querySelector('header');
const logo = document.getElementById('logo');
const navLinks = document.querySelectorAll('nav ul li a');

const root = document.documentElement;

function setTextColor(colorVar) {
  navLinks.forEach(link => {
    link.style.color = getComputedStyle(root).getPropertyValue(colorVar);
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    logo.src = "Medias/sman3.png";
    setTextColor('--white');
  } else {
    header.classList.remove('scrolled');
    logo.src = "Medias/sman3.png";
    setTextColor('--white');
  }
});

header.addEventListener('mouseenter', () => {
  logo.src = "Medias/sman3.png";
  setTextColor(window.scrollY > 0 ? '--textrev' : '--textrev');
});

header.addEventListener('mouseleave', () => {
  if (window.scrollY === 0) {
    logo.src = "Medias/sman3.png";
    setTextColor('--white');
  } else {
    logo.src = "Medias/sman3.png";
    setTextColor('--white');
  }
});




