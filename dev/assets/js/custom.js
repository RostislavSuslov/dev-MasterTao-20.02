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


const fileLable = document.querySelectorAll('.calculation-label');
const fileInput = document.querySelectorAll('.calculation-file');

fileInput.forEach(item => {
  item.addEventListener('change', function() {
    let fileName = item.closest('.input-box').querySelector('.file-name')
    fileName.innerHTML  = item.files[0].name;
  })
})

fileLable.forEach(item => item.closest('.form-row').previousElementSibling.classList.add('special-gap') )
 


















 
// $(document).ready(function(){
 
// });