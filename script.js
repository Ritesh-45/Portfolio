const spotlight = document.getElementById('spotlight');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.maskImage = `radial-gradient(circle 250px at ${x}px ${y}px, transparent 0%, black 100%)`;
  spotlight.style.webkitMaskImage = `radial-gradient(circle 250px at ${x}px ${y}px, transparent 0%, black 100%)`;
});
