const burger = document.querySelector('.hamburger');
const mobileContainer = document.querySelector('.mobile-container');


function showBurgerMenu() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
}

burger.addEventListener('click', showBurgerMenu)


const swiper = new Swiper('.slider-info', {  
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //   },
});

// $(document).ready(function(){
 
// });