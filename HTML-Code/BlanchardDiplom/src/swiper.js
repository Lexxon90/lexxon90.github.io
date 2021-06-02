import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container-background', {
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    effect: 'fade'
  });
  
  const swiperGallery = new Swiper('.swiper-container-gallery', {
    autoplay: {
		disableOnInteraction: false,
	},
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
        observer: true,
      },
      1440: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
        slidesPerGroup: 3,
        observer: true,
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
  }
  
  
  const swiperSponsors = new Swiper ('.swiper-container-sponsors', {
    spaceBetween: 50,
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
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
    let getSwiperEvent = function() {
        if (document.documentElement.clientWidth <=320) {
            let card = document.querySelectorAll(".event-card");
            card.forEach(elem => {
                elem.classList.remove('events__hidden')
                elem.classList.add ('swiper-slide')
            })
            const swiperEvent = new Swiper('.events__contaner', {
            
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
        // else swiperEvent.destroy()
    }
    window.onresize = getSwiperEvent()
    