// Nav menu slide down
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.fas.fa-bars');

menuBtn.addEventListener('click', () => {
  if (menu.style.left === '-16rem' || menu.style.left === '') {
    menu.style.left = '0';
    menuBtn.style.transform = 'rotateY(75deg)';
  } else {
    console.log('click');
    menu.style.left = '-16rem';
    menuBtn.style.transform = 'rotateY(0)';
  }
});
