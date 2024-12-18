document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContent = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', () => {
      if (menuContent.style.transform === 'translateX(0%)') {
        menuContent.style.transform = 'translateX(-100%)';
      } else {
        menuContent.style.transform = 'translateX(0%)';
      }
    });
  });
  