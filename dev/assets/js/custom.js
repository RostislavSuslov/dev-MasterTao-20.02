const burger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const mobileContainer = document.querySelector('.mobile-container');


function showBurgerMenu() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overflow-hidden')
}

burger.addEventListener('click', showBurgerMenu)


const swiperInfo = new Swiper('.slider-info', {
    spaceBetween: 12,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        enabled: false
    },

    breakpoints: {
        1025: {
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
        fileName.innerHTML = item.files[0].name;
    })
})

fileLable.forEach(item => item.closest('.form-row').previousElementSibling.classList.add('special-gap'))


/*swiperAdvantages*/
const advantagesCount = document.querySelectorAll('.slider-advantages .swiper-slide').length

console.log(advantagesCount);

const swiperAdvantages = new Swiper('.slider-advantages', {  
    spaceBetween: 12,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
      1025: {
        spaceBetween: 0,
        initialSlide: 0,
        loop: false,
        slidesPerGroup: advantagesCount,
        simulateTouch: false,
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
        },
      }
    }
  });


const swiperTemplate = new Swiper('.swiper-template', {
    speed: 700,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },

    navigation: {
        enabled: false
    },

    breakpoints: {
        1025: {
            slidesPerView: 2,
            spaceBetween: 0,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: false,
            },
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 0,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: false,
            },
        },
       
    }
});



