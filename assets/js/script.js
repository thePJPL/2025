// toggle mobile nav
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// auto-scale standings sheet to fit mobile width
function fitStandingsSheet() {
  const iframe = document.querySelector('.full-embed');
  if (!iframe) return;

  const sheetWidth = 1200;  // tweak if your sheet is wider/narrower
  const viewportWidth = window.innerWidth;
  const scale = viewportWidth / sheetWidth;

  iframe.style.transform = `scale(${scale})`;
  iframe.style.transformOrigin = 'top left';
  iframe.style.width  = `${sheetWidth / scale}px`;

  const navbarH = document.querySelector('.navbar').offsetHeight;
  const footerH = document.querySelector('.footer').offsetHeight;
  const availableH = window.innerHeight - navbarH - footerH;
  iframe.style.height = `${availableH / scale}px`;
}

window.addEventListener('load',   fitStandingsSheet);
window.addEventListener('resize', fitStandingsSheet);
