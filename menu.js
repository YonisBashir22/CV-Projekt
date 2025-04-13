const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.off-screen-menu a');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  
  if (menu.classList.contains('active')) {
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    menu.style.backgroundColor = 'transparent';
  }
});


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menu.style.backgroundColor = 'transparent'; 
  });
});


document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('active');
    menu.style.backgroundColor = 'transparent'; 
  }
});
