const burger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const mobileContainer = document.querySelector('.mobile-container');


function showBurgerMenu() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overflow-hidden')
}

burger.addEventListener('click', showBurgerMenu)


const swiper = new Swiper('.slider-info', {  
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
    navigation:  {
      enabled: false
    },

    breakpoints: {
      992: {
        spaceBetween: 40,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
});

// $(document).ready(function(){
 
// });