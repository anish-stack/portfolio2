// =========typing 
var typed = new Typed(" .multiple-text", {
  strings: ["Frontend developer", "youtuber", "Bloger"], typeSpeed:
      100, backSpeed: 100, bacDelay: 1000, loop: true
})
// =============timer
        let valueDisplay=document.querySelectorAll('.num')
let interval =1000;


valueDisplay.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
   let duration = Math.floor(interval
   / endValue);
   let counter= setInterval(function(){
    startValue += 1;
    valueDisplay.textContent=startValue
    if(startValue==endValue)
    clearInterval(counter)
   })
});
// image changer====================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click',(e)=>{
const p_btn_clicked = e.target;
console.log(p_btn_clicked);

p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"));

p_btn_clicked.classList.add("p-btn-active");

// to find number in  data aatr

const btn_num= p_btn_clicked.dataset.btnNum;
console.log(btn_num)

const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
p_img_elem.forEach((curElem)=> curElem.classList.add("p-img-not"));

img_active.forEach((curElem)=>curElem.classList.remove('p-img-not'))




})

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
  delay:2500, 
disableOnInteraction:false,},
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});
// scroll to top
const heroSection = document.querySelector(".header")
const footerElement=document.querySelector('.section-footer')
const scroolElement= document.createElement("div");
scroolElement.classList.add("scrollTop-style");

scroolElement.innerHTML='<ion-icon name="arrow-up-outline" class="ScrollTop"></ion-icon>';
footerElement.after(scroolElement)

const scrollTop =()=>{
  heroSection.scrollIntoView({ behavior: "smooth"})
}
scroolElement.addEventListener("click",scrollTop)
// navbar

const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerElem=document.querySelector(".header")
const navElem=document.querySelector(".navbar");

mobile_nav.addEventListener('click',() =>{
  headerElem.classList.toggle('active');
  navElem.classList.toggle('active');
})


function myFunction(widthSize) {
  if (widthSize.matches) {
      // If media query matches
      const swiper = new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },

          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  } else {
      const swiper = new Swiper(".swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);
