//Swiper slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    freeMode: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },

});


const classes = { //равно строке opened. 
  opened: 'opened'
}



const toggleMenu = () => {

}

const menuButton = document.querySelector('.hamburger');
menuButton.addEventListener('click', toggleMenu);