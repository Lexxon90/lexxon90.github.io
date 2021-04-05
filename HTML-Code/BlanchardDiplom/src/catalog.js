import $ from 'jquery';
require('webpack-jquery-ui/accordion');


fetch("http://localhost:8080/src/catalog.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let catalog = response;
    let languageItemSelected;

    function addNewList(){
      // Определяем язык
      languageItemSelected = document.querySelector('.language-list__selected');
      // Определяем активную вкладку Аккордиона
      let acoordionUL = document.querySelector('.ui-accordion-content-active');
      // Формируем список ключей Заданного языка и заданной ячейки
      let keys = Object.keys(catalog[languageItemSelected.id][acoordionUL.id])
      // удаляет старый список
      let catalogItem = document.querySelectorAll('.age-accordion__item');
      catalogItem.forEach(function(elem){
        elem.parentNode.removeChild(elem);
      })
      // добавляет новый список из JSON
      for (let i = 1; i <= keys.length; i++){
        let li = document.createElement('li');
        li.className="age-accordion__item"
        let p = document.createElement('p');
        p.textContent=keys[i];
        li.appendChild(p);
        acoordionUL.appendChild(li);
      }
    }

    function changeCardOnClick() {
      // Изменение карточки деятеля при нажатии на имя
     let accordionItem = document.querySelectorAll('.age-accordion__item');
     accordionItem.forEach(item=>{
       item.addEventListener('click', function(){

         for (let i = 0; i < accordionItem.length; i++) {
           accordionItem[i].classList.remove('age-accordion__item-select')
         }
         this.classList.add('age-accordion__item-select');

         let languageItemSelectedID = document.querySelector('.language-list__selected').id;
         let parentAccordionItemID = this.parentElement.id;
         accordionHeaderID = parentAccordionItemID;
         let accordionItemTextContent = this.textContent;
         let catalogAccordionItem = catalog[languageItemSelectedID][parentAccordionItemID][accordionItemTextContent]
         document.querySelector('.biography-card__img').style.backgroundImage = 'url('+catalogAccordionItem.img+')';
         document.querySelector('.biography-card__name').textContent = accordionItemTextContent;
         document.querySelector('.biography-card__date').textContent = catalogAccordionItem.date;
         document.querySelector('.biography-card__text').textContent = catalogAccordionItem.bio;
       })
     })
   }
   let header;
   let keysNumber;
    $( "#accordion" ).on( "accordionactivate", function(event, ui) {
      
      if (document.querySelector('.age-accordion__item-select')) {
        let language = document.querySelector('.language-list__selected').id;
        let name = document.querySelector('.age-accordion__item-select');
        header = name.parentElement.id;
        let keys = Object.keys(catalog[language][header]);
        keysNumber = keys.indexOf(name.childNodes[0].textContent)-1;
      }
      
      languageItemSelected = document.querySelector('.language-list__selected');
      // Определяем ID Header'a
      let HeaderID=ui.newHeader[0].getAttribute('aria-controls');
      let acoordionUL = document.getElementById(HeaderID);
       // Формируем список ключей Заданного языка и заданной ячейки
       let keys = Object.keys(catalog[languageItemSelected.id][HeaderID])
       // удаляет старый список
       let catalogItem = document.querySelectorAll('.age-accordion__item');
       catalogItem.forEach(function(elem){
         elem.parentNode.removeChild(elem);
       })
       // добавляет новый список из JSON
       for (let i = 1; i <= keys.length; i++){
         let li = document.createElement('li');
         li.className="age-accordion__item"
         let p = document.createElement('p');
         p.textContent=keys[i];
         li.appendChild(p);
         acoordionUL.appendChild(li);
       }

      if (ui.newHeader[0].getAttribute('aria-controls') == header) {
        let list = document.querySelectorAll('.age-accordion__item');
        list[keysNumber].classList.add('age-accordion__item-select');
      }

       changeCardOnClick();
      
    });

    // Изменение языка
    let accordionHeaderID = 'age-01';
    let languageItem = document.querySelectorAll('.language-list__item');
    languageItem.forEach(item=>{
      item.addEventListener('click', function(){

        // ID Выбранного языка предыдущего
        let lastLanguageItemSelectedID = document.querySelector('.language-list__selected').id;

        // Смена класса language-list__selected, для выделение картинки с флагом
        for (let i = 0; i < languageItem.length; i++) {
          languageItem[i].classList.remove('language-list__selected')
        }
        this.classList.add('language-list__selected');
        // Смена языка основной информации в шапке Каталога
        languageItemSelected = document.querySelector('.language-list__selected');
        let catalogInfo = document.querySelector('.catalog__text');
        catalogInfo.textContent = catalog[languageItemSelected.id].info;
        
        // Меняет язык Header аккордиона
        let accordionHeader = document.querySelectorAll('.age-accordion__title');
        let keys = Object.keys(catalog[languageItemSelected.id]);
        for (let i=0; i<accordionHeader.length; i++) {
          accordionHeader[i].textContent = catalog[languageItemSelected.id][keys[i+1]].info
        }



        // Имя выделенного деятеля
        let biographyCardName = document.querySelector('.biography-card__name').textContent;
        // Создаем массив деятелей из каталога
        keys = Object.keys(catalog[lastLanguageItemSelectedID][accordionHeaderID]);
        // Определяем номер позиции в массиве выбранного деятеля
        let keysNumber = keys.indexOf(biographyCardName)
        // Формируем список деятелей заданного языка
        addNewList();
        // Заменяем карточку на заданный язык
        keys = Object.keys(catalog[languageItemSelected.id][accordionHeaderID]);
        biographyCardName=keys[keysNumber];
        let selectManCatalog = catalog[languageItemSelected.id][accordionHeaderID][biographyCardName];
        document.querySelector('.biography-card__img').style.backgroundImage = 'url('+selectManCatalog.img+')';
        document.querySelector('.biography-card__name').textContent = biographyCardName;
        document.querySelector('.biography-card__date').textContent = selectManCatalog.date;
        document.querySelector('.biography-card__text').textContent = selectManCatalog.bio;


        let nameCardMan = document.querySelector('.biography-card__name').textContent;
        let acoordionUL = document.querySelector('.ui-accordion-header-active').getAttribute('aria-controls');
        keys = Object.keys(catalog[languageItemSelected.id][acoordionUL]);
        let keysSearch = keys.indexOf(nameCardMan)-1;
        let accordionList = document.querySelectorAll('.age-accordion__item');
        console.log(acoordionUL)
        console.log(accordionHeaderID)

        if (acoordionUL == accordionHeaderID) {
          accordionList[keysSearch].classList.add('age-accordion__item-select');
        }
        

        changeCardOnClick();
      })
    })



    addNewList();
    // Выбор активного деятеля Доменико Гирландайо (11 в списке)
    let activeMan = document.querySelectorAll('.age-accordion__item');
    activeMan[11].classList.add('age-accordion__item-select');
    // Ставить выбранную карту
    let selectMan = document.querySelector('.age-accordion__item-select');
    let childSelectMan = selectMan.childNodes[0].textContent;
    let parentSelectMan = selectMan.parentElement.id;
    languageItemSelected = document.querySelector('.language-list__selected').id;
    let selectManCatalog = catalog[languageItemSelected][parentSelectMan][childSelectMan];
    document.querySelector('.biography-card__img').style.backgroundImage = 'url('+selectManCatalog.img+')';
    document.querySelector('.biography-card__name').textContent = childSelectMan;
    document.querySelector('.biography-card__date').textContent = selectManCatalog.date;
    document.querySelector('.biography-card__text').textContent = selectManCatalog.bio;

    changeCardOnClick();
  })