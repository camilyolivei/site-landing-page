const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');

const open = document.querySelector('.open__icon');
const close = document.querySelector('.close__icon');


const open2 = document.querySelector('.open__icon2');
const close2 = document.querySelector('.close__icon2');



open2.addEventListener('click', () => {
  document.querySelector('.open__icon2').style.display = 'none';
  document.querySelector('.close__icon2').style.display = 'inline';
  document.querySelector('.box2').style.display = 'block';
});

close2.addEventListener('click', () => {
  document.querySelector('.open__icon2').style.display = 'inline';
  document.querySelector('.close__icon2').style.display = 'none';
  document.querySelector('.box2').style.display = 'none';
});




open.addEventListener('click', () => {
  document.querySelector('.open__icon').style.display = 'none';
  document.querySelector('.close__icon').style.display = 'inline';
  document.querySelector('.box1').style.display = 'block';
});

close.addEventListener('click', () => {
  document.querySelector('.open__icon').style.display = 'inline';
  document.querySelector('.close__icon').style.display = 'none';
  document.querySelector('.box1').style.display = 'none';
});



open_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'none';
  document.querySelector('.close').style.display = 'inline';
  document.querySelector('.mobile__nav').style.display = 'block';
});

close_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'inline';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.mobile__nav').style.display = 'none';
});