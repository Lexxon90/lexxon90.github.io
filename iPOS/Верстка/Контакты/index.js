// Яндекс карта
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [56.81654756789506,60.631969499999904],
        zoom: 16,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([56.81654756789506,60.631969499999904]);
    myMap.geoObjects.add(myPlacemark);
}

// Маскирование телефона
    var inputTel = document.querySelector(".inputTel");
    var im = new Inputmask('+7 (\\999) 999 - 99 - 99')
    im.mask(inputTel);


// Кнопка Заказть звонок
let btn = document.querySelector('.address__btn');
let windowBrif = document.querySelector('.fill-brif__wrapper');
btn.addEventListener('click',()=>{
    windowBrif.classList.remove('closed')
})

// Кнопка вверх
let btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})

// Кнопка "Смотреть на карте" в мобильной версии сайта

if (window.innerWidth < 426) {
    document.querySelector('.address__link').textContent = `г. ${document.querySelector('.active').textContent.toUpperCase()}`
}

let mapLink = document.querySelector('.address__map-link')
mapLink.addEventListener('click', ()=>{
    mapLink.style.display = "none";
    document.querySelector('.map').style.display = "flex";
    document.querySelector('.address__contaner-link').style.display = "none";
    document.querySelector('.address__btn').style.marginTop = "30px";

})




