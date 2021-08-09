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

// Выбор города
if (window.innerWidth < 426) {
    let addressLink = document.querySelector('.address__link');
    let map = document.querySelector('.map');
    if (addressLink.textContent == "Сменить город") {
        map.style.display = 'block';
        document.querySelector('.address__container').classList.remove('address__active');
        document.querySelector('.address__cont').classList.remove('address__active');
        document.querySelector('.address__map-link').style.display = "none";
    }
    else {
        let addressConteiner = document.querySelector('.address__cont');
        addressConteiner.classList.add('active');
        document.querySelector('.address__container').classList.add('address__active');
        document.querySelector('.address__cont').classList.add('address__active');
        map.style.display = 'none';
    }

    document.querySelector('.address__map-link').addEventListener('click', ()=>{
        map.style.display = 'block';
        document.querySelector('.address__map-link').style.display = 'none';
    })
}




