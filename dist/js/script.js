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



//добавление header mini при прокрутке вниз.
window.addEventListener('scroll', function() {
  const position = window.scrollY;
  
  if(position > 200) {
    header.classList.add('mini');
  }
  else {
    header.classList.remove('mini');
  }

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














const checkboxes = {
  requirements: ["minimum", "recommended"],
  versions: ["standard", "limited"]
}


const inputCheckBoxes = document.querySelectorAll('.checkbox');


function handleCheckBox () {
  const name = this.name; // 1 инпут - 'requirements'  2 инпут - 'versions'
  const isChecked = this.checked; //true false 


  const value = checkboxes[name][Number(isChecked)]; // здесь в нейм лежит строка, либо requirements либо versions. То есть по сути запись равна checkbox["requirements"] либо checkbox["versions"] и таким образом динамически выбираем свойства объекта в зависимости от переменной. 
  //isChecked по сути это либо тру, либо фолс. Можно перевести в 0 или 1, соотвественно 0 - minimum, 1 - recommended. 
  


  const list = document.getElementById(value); // UL id= minimum ; id recommended. 

  
  const tabs = document.querySelectorAll(`[data-${name}]`); //text minimum/recomended . data-versions; data-requirements. 
  
  const siblings = list.parentElement.children;


  for (const item of siblings) item.classList.remove(classes.active); //удаляем класс активности у всех детей. UL


  for (const tab of tabs) { //класс активности для табов.
    tab.classList.remove(classes.active);
    tab.dataset[name] === value && tab.classList.add(classes.active);
  }


  list.classList.add(classes.active); //даём класс активности UL 

}


inputCheckBoxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', handleCheckBox)
});






//модалки. Добавили для каждой кнопки класс data-buy и атрибут. 




const editionValues = [
  {
    price: 17.99,
    title: "Standard Edition",
  },
  {
    price: 19.99,
    title: "Standard Edition New Generation",
  },
  {
    price: 29.99,
    title: "Digital Deluxe Edition",
  }
];


const buyButton = document.querySelectorAll('.buy-button');
const modal = document.querySelector('.modal'); 
const modalTitle = document.querySelector('.modal__edition'); 
const modalPrice = document.querySelector('.modal__total-price');
const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');


const handleBuyButton = (event) => {
  const value = event.target.dataset.value; // 0 1 2 buttons
  //const alternativeValue = event.target.getAttribute('data-value'); альтернативный способ. 

  if(!value) return; //если value нет, код останавливается. 

  //деструктуризация. Получаем константу price и values исходя из массива editionValues[value]; Обращение по индексу [0, 1, 2]
  const {price, title} = editionValues[value]; 

  modalTitle.innerText = title;
  modalPrice.innerText = `${price} $`;
  overlay.classList.add(classes.opened);
  modal.classList.add(classes.opened);
}

function closeModal () {
  modal.classList.remove(classes.opened);
  overlay.classList.remove(classes.opened);
}

buyButton.forEach(function(btn) {
  btn.addEventListener('click', handleBuyButton);
  
})

modalClose.addEventListener('click', closeModal);






const btnsScrollTo = document.querySelectorAll('[data-scrollto="editions"]');

btnsScrollTo.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const editionsSection = document.querySelector('#editions').offsetTop;
    window.scrollTo({top: editionsSection, behavior: "smooth"});
  });
});





//открываем контент buy headphones with a game 
/*const btnHeadphones = document.querySelector('[data-type="headphones"]');

function handleBuyHeadphones() {

  const  activeImage = document.querySelector('.headphones__image.active');
  const activeColor = activeImage.getAttribute('data-color');

  const modalHeadphones = document.querySelector('#modal2');
  const close = document.querySelector('#modal-close-2'); 
  const title = modalHeadphones.querySelector('#headphones-edition');
  


  if (activeImage) {

    if(activeColor === 'orange') {
      overlay.classList.add(classes.opened);
      modalHeadphones.classList.add(classes.opened);
      title.style.color ="var(--orange)"
      title.innerHTML = `${activeColor} headphones`;
    }

    if(activeColor === 'violet') {
      overlay.classList.add(classes.opened);
      modalHeadphones.classList.add(classes.opened);
      title.style.color ="var(--violet)"
      title.innerHTML = `${activeColor} headphones`;
    }

    if(activeColor === 'black') {
      overlay.classList.add(classes.opened);
      modalHeadphones.classList.add(classes.opened);
      title.style.color ="#000"
      title.innerHTML = `${activeColor} headphones`;
    }
    

  }

  //close
  close.addEventListener('click', function() {
    overlay.classList.remove(classes.opened);
    modalHeadphones.classList.remove(classes.opened);

  });

} */





const btnHeadphones = document.querySelector('[data-type="headphones"]'); //кнопка
const modalHeadphones = document.querySelector('#modal2');
const modal2Close = modalHeadphones.querySelector('#modal-close-2');
const modal2Title =  modalHeadphones.querySelector('#headphones-edition');


function handleBuyHeadphones() {

  const activeImage = document.querySelector('.headphones__image.active'); //активное фото

  if(activeImage) {
    const activeColor = activeImage.getAttribute('data-color');

    const colors = {
      orange: 'var(--orange)',
      violet: 'var(--violet)',
      black: '#000'
    };

    overlay.classList.add(classes.opened);
    modalHeadphones.classList.add(classes.opened);

    modal2Title.style.color = colors[activeColor];
    modal2Title.innerHTML = `${activeColor} headphones`;
  }

  modal2Close.addEventListener('click', function() {
    overlay.classList.remove(classes.opened);
    modalHeadphones.classList.remove(classes.opened);
  });

};


btnHeadphones.addEventListener('click', handleBuyHeadphones);






