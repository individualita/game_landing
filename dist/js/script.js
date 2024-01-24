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

const menuButton = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav__link');




const toggleMenu = () => {
  header.classList.toggle(classes.opened)
};

/*const scrollToSection = (e) => { 
  e.preventDefault(); //отменяем действие браузера при клике чтобы не скакал. 
  const href = e.currentTarget.getAttribute('href'); //Получаем атрибут 'href' текущего элемента, на который кликнули.
  if(!href || !href.startsWith('#')) return; // Проверяем, существует ли атрибут 'href' и начинается ли он с решетки (#).startsWith применяется к строке. 

  //href - "#editions"
  const section = href.slice(1); //  // Вырезаем решетку из значения 'href', получаем строку с именем секции (например, "#editions" станет "editions").

  const top = document.getElementById(section)?.offsetTop; //Если секция найдена, получаем её вертикальное смещение относительно начала документа.

  window.scrollTo({ top, behavior: "smooth"}); // Прокручиваем страницу до верхней части указанной секции с плавным эффектом.

};

*/

const scrollToSection = (e) => {
  e.preventDefault();

  const href = e.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#')) return;

  const section = document.querySelector(href);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth'});


};


menuButton.addEventListener('click', toggleMenu);

navLink.forEach(link => { //это массив, на каждый элемент навешываем событие. 
  link.addEventListener('click', scrollToSection)
}); 