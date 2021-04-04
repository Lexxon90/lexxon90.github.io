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
      // Изменение карточки деятеля при нажатии на кнопку
     let accordionItem = document.querySelectorAll('.age-accordion__item');
     accordionItem.forEach(item=>{
       item.addEventListener('click', function(){

         for (let i = 0; i < accordionItem.length; i++) {
           accordionItem[i].classList.remove('age-accordion__item-select')
         }
         this.classList.add('age-accordion__item-select');

         let languageItemSelectedID = document.querySelector('.language-list__selected').id;
         let parentAccordionItemID = this.parentElement.id;
         let accordionItemTextContent = this.textContent;
         let catalogAccordionItem = catalog[languageItemSelectedID][parentAccordionItemID][accordionItemTextContent]
         document.querySelector('.biography-card__img').style.backgroundImage = 'url('+catalogAccordionItem.img+')';
         document.querySelector('.biography-card__name').textContent = accordionItemTextContent;
         document.querySelector('.biography-card__date').textContent = catalogAccordionItem.date;
         document.querySelector('.biography-card__text').textContent = catalogAccordionItem.bio;
       })
     })
   }

    $( "#accordion" ).on( "accordionactivate", function(event, ui) {
      
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
       changeCardOnClick();
      
    });

    // Изменение языка
    let languageItem = document.querySelectorAll('.language-list__item')
    languageItem.forEach(item=>{
      item.addEventListener('click', function(){
        for (let i = 0; i < languageItem.length; i++) {
          languageItem[i].classList.remove('language-list__selected')
        }
        this.classList.add('language-list__selected');
        languageItemSelected = document.querySelector('.language-list__selected');
        let catalogInfo = document.querySelector('.catalog__text');
        catalogInfo.textContent = catalog[languageItemSelected.id].info;
        
        // Меняет язык Header аккордиона
        let accordionHeader = document.querySelectorAll('.age-accordion__title');
        let keys = Object.keys(catalog[languageItemSelected.id]);

        for (let i=0; i<accordionHeader.length; i++) {
          accordionHeader[i].textContent = catalog[languageItemSelected.id][keys[i+1]].info
        }

        addNewList();
        changeCardOnClick();

      })
    })
    addNewList();
    changeCardOnClick();
  })