var mySwiper = new Swiper('.swiper-container', {
    loop: true,
   
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      979: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1335:{
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }
  })

// Выравнивание по самому высокому блоку слайдера
var elements        = document.querySelectorAll('.slide--title');
var numbElements    = elements.length;
var elementsArray   = [];
var maxHeight       = 0;


var maxHeight = Array.prototype.reduce.call(elements, (height, element) => Math.max(height, element.offsetHeight), 0)

elements.forEach((element) => element.style.height =  maxHeight + "px");