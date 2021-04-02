fetch("https://lexxon90.github.io/HTML-Code/BlanchardDiplom/src/catalog.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let catalog = response;
    console.log (catalog);
    
    
    let languageItem = document.querySelectorAll('.language-list__item')
    languageItem.forEach(item=>{
      item.addEventListener('click', function(){
        for (let i = 0; i < languageItem.length; i++) {
          languageItem[i].classList.remove('language-list__selected')
        }
        this.classList.add('language-list__selected');
        let languageItemSelected = document.querySelector('.language-list__selected');
        let languageItemID = languageItemSelected.id;
        let catalogInfo = document.querySelector('.catalog__text');
        catalogInfo.textContent = catalog[languageItemID].info;
      })
    })

    let accordionItem = document.querySelectorAll('.age-accordion__item');
    accordionItem.forEach(item=>{
      item.addEventListener('click', function(){
        console.log(this.parentElement.id)
      })
    })
    
    
  })