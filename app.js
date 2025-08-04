const hamburger = document.querySelector('.hamburger');
const sideMenu = document.getElementById('sideMenu');
const menuLinks = document.querySelectorAll('#sideMenu ul li a');
const header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  header.style.backgroundColor = scrollY > 10 ? '#333232' : 'transparent';
});

// (opcional) Cards clicáveis
const cards = document.querySelectorAll('.carousel .card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show-link');
  });
});
