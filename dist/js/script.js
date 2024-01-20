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
      nextEl: '.slider__btn-prev',
      prevEl: '.slider__btn-next',
    },
  

  });