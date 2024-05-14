const burger = document.querySelector('#burger');
const mobileContainer = document.querySelector('.mobile-container');


function showBurgerMenu() {
    mobileContainer.classList.toggle('show')
}

burger.addEventListener('click', showBurgerMenu)