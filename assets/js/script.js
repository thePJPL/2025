// auto-scale the standings iframe so the full sheet always fits
function fitStandingsSheet() {
  const container = document.querySelector('.iframe-container');
  const iframe    = container.querySelector('iframe');
  if (!iframe) return;

  // 1. The real-pixel width of your published sheet.
  //    Tweak this to exactly match your sheet's total column span.
  const sheetWidth = 1200;

  // 2. Compute our scale factor.
  const scale = window.innerWidth / sheetWidth;

  // 3. Figure out how much vertical space we have.
  const navH    = document.querySelector('.navbar').offsetHeight;
  const footH   = document.querySelector('.footer').offsetHeight;
  const availH  = window.innerHeight - navH - footH;

  // 4. Size the container
  container.style.height = `${availH}px`;

  // 5. Apply scale + sizing to the iframe
  iframe.style.transform = `scale(${scale})`;
  iframe.style.width     = `${sheetWidth}px`;
  iframe.style.height    = `${availH / scale}px`;
}

// run on load & resize
window.addEventListener('load',   fitStandingsSheet);
window.addEventListener('resize', fitStandingsSheet);
