import 'swiper/swiper-bundle.css';
import './scss/style.scss';
import './catalog.js';
import $ from 'jquery';
require('webpack-jquery-ui/accordion');
import ymaps from 'ymaps';

import SimpleBar from 'simplebar'; 
import 'simplebar/dist/simplebar.css';

import Swiper from 'swiper/bundle';
// import Swiper styles


// new SimpleBar(document.querySelector(".search-nav__item"));

const swiper = new Swiper('.swiper-container-background', {
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
});

const swiperGallery = new Swiper('.swiper-container-gallery', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    // when window width is >= 768
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    // when window width is >= 1440
    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

const swiperBooks = new Swiper ('.swiper-container-books', {
  spaceBetween: 50,
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1440: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

const swiperSponsors = new Swiper ('.swiper-container-sponsors', {
  spaceBetween: 50,

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1440: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

// Кастомный SELECT 

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item=>{
    item.addEventListener('click', selectToggle)
  })

  selectItem.forEach(item=>{
    item.addEventListener('click', selectChoose)
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active')
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.select');
    let currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
    
    let selectItem = document.querySelectorAll('.select__item')
    for (let i = 0; i < selectItem.length; i++) {
      selectItem[i].classList.remove('hidden-item')
    }
    
    this.classList.add('hidden-item')
  }


}

select();

// Accordion
$( function() {
    $( "#accordion" ).accordion();
} );

// События

let buttonCard = document.querySelector('.events__button');
let card = document.querySelectorAll(".event-card");

function resize() {
  if (document.documentElement.clientWidth <=768) {
    card[2].classList.add('events__hidden')
  }
}

resize();
window.onresize = function(){
  if (document.documentElement.clientWidth <=768) {
    card[2].classList.add('events__hidden')
  }
  else {
    card[2].classList.remove('events__hidden')
  }
};

buttonCard.addEventListener('click', function(){
  if (buttonCard.textContent=="Все события") {
      card.forEach(function(element){
        element.classList.remove('events__hidden');
      })
      buttonCard.textContent = "Скрыть события"
  }
    else {
        for (let i=3; i<card.length; i++ ) {
          card[i].classList.add('events__hidden');
        }
        buttonCard.textContent = "Все события";
    }
})

// Чекбокс 
let checkbox = document.querySelectorAll(".books-checkbox__item");
checkbox.forEach(function(element){
  element.addEventListener("click", function(){
    let checkboxItem = document.getElementById(element.id);
    if (element.checked) {
      checkboxItem.parentElement.style.color = "#C283F3";
    }
    else {
      checkboxItem.parentElement.style.color = "#fff";
    }
  })
})

ymaps
  .load()
  .then(maps => {
    const map = new maps.Map('map', {
      // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75846306898368,37.601079499999905],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: []
    });
    var myPlacemark = new maps.Placemark([55.75846306898368,37.601079499999905], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });
    var zoomControl = new maps.control.ZoomControl({
      options: {
          size: "small",
          float: 'none',
          position: {
              bottom: '400px',
              right: '30px'
          }
      }
    });
    var geolocationControl = new maps.control.GeolocationControl({
      options: {
          float: 'none',
          position: {
              bottom: '350px',
              right: '30px'
          }
      }
    });
    map.controls.add(zoomControl);
    map.controls.add(geolocationControl);

    map.geoObjects.add(myPlacemark);
    
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));
