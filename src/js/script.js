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




const classes = { 
opened: 'opened',
active: 'active'
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






const faqHeader = document.querySelectorAll('.faq__header');
const faqAnswer = document.querySelectorAll('.faq__answer');


/*Реализация без закрытия остальных айтемов. 

function toggleAccordion() {
const answerElement = this.nextElementSibling;
this.classList.toggle(classes.opened);
answerElement.classList.toggle(classes.opened);
} */


function toggleAccordion() {
const isOpened = this.classList.contains(classes.opened);
const answerElement = this.nextElementSibling;


// Закрываем все элементы перед открытием текущего
faqHeader.forEach(header => {
  //Если текущий элемент не равен элементу, на который кликнули (this), то удаляются классы opened у элемента заголовка (header) и следующего элемента (ответа).
  if (header !== this) {      
    header.classList.remove(classes.opened);
    header.nextElementSibling.classList.remove(classes.opened);
    header.nextElementSibling.style.maxHeight = null;
  }
  
});

// Открываем текущий элемент, если закрыт, и закрываем, если открыт
if (!isOpened) {
  this.classList.add(classes.opened);
  answerElement.classList.add(classes.opened);
  answerElement.style.maxHeight = answerElement.scrollHeight + 'px';
  
} else {
  this.classList.remove(classes.opened);
  answerElement.classList.remove(classes.opened);
  
}

}

faqHeader.forEach(function(header) {
header.addEventListener('click', toggleAccordion);
});




const headphonesImages = document.querySelectorAll('.headphones__image');
const headphonesBtns = document.querySelectorAll('.choose__color-btn');


function changeHeadphonesColor () {
const selectedColor = this.getAttribute('data-color'); //находим цвет на который кликнули. 

//убираем все активные классы фото. 
headphonesImages.forEach(function(image) {
  image.classList.remove(classes.active);
});

const selectedImage = document.querySelector(`.headphones__image[data-color="${selectedColor}"]`);

selectedImage.classList.add(classes.active);
}


headphonesBtns.forEach(function(btn) {
btn.addEventListener('click', changeHeadphonesColor);
});
