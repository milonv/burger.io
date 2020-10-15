const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');


burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  body.classList.toggle("active");
});