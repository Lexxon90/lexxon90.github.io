let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  $( function() {
    $( "#accordion" ).accordion();
  } );


let tab = document.querySelectorAll(".work__step")
  tab.forEach((ev)=>{
  

  ev.addEventListener('click', (ev)=>{
    const step=ev.currentTarget.dataset.step;

    document.querySelectorAll(".work__step").forEach((ev)=>{
      ev.classList.remove('select');
    })
    
    document.querySelectorAll(".step-select-false").forEach((ev)=>{
      ev.classList.remove('step-select-true');
    })
    document.querySelector(`[data-step="${step}"]`).classList.add('select');
    document.querySelector(`[data-target="${step}"]`).classList.add('step-select-true')
  })
})

document.querySelector(".header__main_buttom").addEventListener('click', ((ev)=>{
  document.querySelectorAll(".main_svg").forEach((ev)=>{
    ev.style.fill = "#FF9900"
  })

  document.querySelector(".header__nav").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}))

document.querySelector(".header__nav").addEventListener("click", ()=>{
  let navButton = document.querySelector(".header__main_buttom")
  let displayButton = window.getComputedStyle(navButton).display

  let nav = document.querySelector(".header__nav")
  let displayNav = window.getComputedStyle(nav).display
  console.log(displayNav);
  console.log(displayButton);
  if ((displayNav == "block") && (displayButton=="flex")) {
    document.querySelector(".header__nav").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    
    document.querySelectorAll(".main_svg").forEach((ev)=>{
      ev.style.fill = "#000"
    })
  }
})

window.onresize = ()=>{
  const main = document.querySelector(".main")
  let width = window.getComputedStyle(main).width
  console.log(width)
  if (width == "1770px") {
    document.querySelector(".header__nav").style.display = "block";
    document.querySelector(".header__main_buttom").style.display = "none";
  }
  if ((width == "924px")||(width == "768px")||(width == "425px")) {
    document.querySelector(".header__nav").style.display = "none";
    document.querySelector(".header__main_buttom").style.display = "flex";
  }
}



