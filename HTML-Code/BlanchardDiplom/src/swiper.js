import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container-background', {
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  effect: 'fade'
});
  
const swiperGallery = new Swiper('.swiper-container-gallery', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
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


if (document.documentElement.clientWidth > 320) {
  const swiperBooks = new Swiper ('.swiper-container-books', {
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
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
}
  
  
const swiperSponsors = new Swiper ('.swiper-container-sponsors', {
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
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
    
let swiperEvent = null;

function getSwiperEvent() {
  if (!swiperEvent) {
    swiperEvent = new Swiper('.events__contaner', {
      slideClass: 'event-card',
      wrapperClass: 'events__wrapper',
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 20,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    });
  }
}
getSwiperEvent();
function destroySwiperEvent() {
  if (swiperEvent) {
    swiperEvent.destroy();
    swiperEvent = null;
  }
}

window.addEventListener ('resize', function() {
  swiperGallery.updateSize();
  if (document.documentElement.clientWidth <=320) {
    getSwiperEvent();
  }
  else {
    destroySwiperEvent();
  }
})  



    
    