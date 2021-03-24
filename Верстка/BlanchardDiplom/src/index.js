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