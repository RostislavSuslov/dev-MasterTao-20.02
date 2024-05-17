const burger = document.querySelector('.hamburger');
const mobileContainer = document.querySelector('.mobile-container');


function showBurgerMenu() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
}

burger.addEventListener('click', showBurgerMenu)


const swiper = new Swiper('.swiper', {  
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000,
      },
});

$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        infinite: false,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});