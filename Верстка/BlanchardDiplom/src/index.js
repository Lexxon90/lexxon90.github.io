import 'swiper/swiper-bundle.css';
import './scss/style.scss'
import $ from 'jquery';
require('webpack-jquery-ui/accordion');


import SimpleBar from 'simplebar'; 
import 'simplebar/dist/simplebar.css';

import Swiper from 'swiper/bundle';
// import Swiper styles


new SimpleBar(document.querySelector(".search__menu"));

const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
});

const swiperGallery = new Swiper('.swiper-container-gallery', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 40,

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
  slidesPerView: 3,
  spaceBetween: 50,

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
  slidesPerView: 3,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

  },

  navigation: {
    nextEl: '.swiper-sponsors-button-next',
    prevEl: '.swiper-sponsors-button-prev',
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
let buttonCard = document.querySelector('.button-card');
let card = document.querySelectorAll(".event-card");

buttonCard.addEventListener('click', function(){
  if (buttonCard.textContent=="Все события") {
      card.forEach(function(element){
        element.classList.remove('card-hidden');
      })
      buttonCard.textContent = "Скрыть события"
  }
    else {
        for (let i=3; i<card.length; i++ ) {
          card[i].classList.add('card-hidden');
        }
        buttonCard.textContent = "Все события";
    }
})

// Чекбокс 
let checkbox = document.querySelectorAll(".checkbox-item");
console.log(checkbox);
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

