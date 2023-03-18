
const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerElem=document.querySelector(".header")
const navElem=document.querySelector(".navbar");

mobile_nav.addEventListener('click',() =>{
  headerElem.classList.toggle('active');
  navElem.classList.toggle('active');
})

var typed = new Typed(" .multiple-text", {
  strings: ["Frontend developer", "youtuber", "Bloger"], typeSpeed:
      100, backSpeed: 100, bacDelay: 1000, loop: true
})