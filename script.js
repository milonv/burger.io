const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const card = document.querySelector('.flipper');
const back = document.querySelector('.back');
const front = document.querySelector('.front');
const video = document.querySelector('#myVideo');


burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
});

card.addEventListener('click',function(){
  this.classList.toggle("flipped");
});

front.addEventListener('click',function(){
  video.play();
});

back.addEventListener('mouseover',function(){
  video.play();
});

back.addEventListener('mouseout',function(){
  video.pause();
});

video.addEventListener('click',function(){
  video.pause();
});