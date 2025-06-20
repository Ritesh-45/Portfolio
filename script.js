const spotlight = document.getElementById('spotlight');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.maskImage = `radial-gradient(circle 250px at ${x}px ${y}px, transparent 0%, black 100%)`;
  spotlight.style.webkitMaskImage = `radial-gradient(circle 250px at ${x}px ${y}px, transparent 0%, black 100%)`;
});

let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  })
}
