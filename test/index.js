// анимация первых квадратов
const windowInnerWidth = window.innerWidth/2;
const windowInnerHeight = window.innerHeight/2;

document.querySelector("*").style.setProperty('--transition-square-w', windowInnerWidth+'px');
document.querySelector("*").style.setProperty('--transition-square-h', windowInnerHeight+'px');

// function startSquareAnimation() {
//     let square = document.querySelectorAll('.square');
//     for (let i=0; i<square.length; i++) {
//         square[i].classList.add('square_'+(i+1));
//         square[i].style.transition = 'all 2s linear'
//     }
//     square[0].addEventListener("transitionend", function(){
//         let button = document.querySelector('.button');
//         button.style.display = 'block';
        
//         setTimeout(function(){
//             button.style.transform = 'rotate(0deg)';
//         },1000)
        
//     })
// }

// startSquareAnimation();
let button = document.querySelector('.button');

const p = new Promise(function(resolve, reject){
    let square = document.querySelectorAll('.square');
    for (let i=0; i<square.length; i++) {
        square[i].classList.add('square_'+(i+1));
        square[i].style.transition = 'all 2s linear'
    }
    setTimeout(()=>{resolve()},2000);
})

p
    .then(()=> {
        return new Promise((resolve)=>{
            button.style.display = 'block';
            resolve();
        }) 
    })
    .then (()=> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                button.style.transform = 'rotate(0deg)';
                resolve();
            },1000)
        })
    })
    .then (()=> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                button.style.backgroundColor='green';
                button.style.color='#fff';
                button.addEventListener('click',()=>{
                    document.querySelector('.contaner-two').style.display = "none";
                    document.querySelector('.contaner-three').style.display = "block";
                })
                resolve();
            },2000)
        })
    })

fetch("https://lexxon90.github.io/test/catalog.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        let catalog = response.car;
        console.log(catalog);
        // Создаем массив Марок Авто
        arrMark = [];
        for (let i=0; i<catalog.length; i++){
            arrMark.push(catalog[i].mark)
        }
        // Создаем массив из уникальных наименований Марок Авто
        let inputMark = Array.from(new Set(arrMark));
        // Добавляем Марки авто в DOM
        for (let i=0; i<inputMark.length; i++) {
            let option = document.createElement("option");
            option.classList = "option-mark";
            option.value = inputMark[i];
            option.textContent = inputMark[i];
            let select = document.querySelector(".mark");
            select.appendChild(option);
        }
        // Создаем событе на изменение в выпадающем списке
        document.querySelector('.mark').addEventListener('change', function(){
            // текущее выбранное значение
            let value = this.value;
            // создание массива с выбранной маркой авто
            let arrModel=catalog.filter(item=>item.mark === value);

            // Создаем массив Моделей Авто
            let arrModelOnly = [];
            for (let i=0; i<arrModel.length; i++){
                arrModelOnly.push(arrModel[i].model)
            }
            // Создаем массив из уникальных наименований Моделей Авто
            let inputModel = Array.from(new Set(arrModelOnly));

            // Очистить поля от прошлых Моделей
            let model = document.querySelector(".model");
            while (model.firstChild) {
                model.removeChild(model.firstChild);
            }
            // Добавляем новые записи в Модели Авто
            for (let i=0; i<inputModel.length; i++) {
                let option = document.createElement("option");
                option.classList = "option-model";
                option.value = inputModel[i];
                option.textContent = inputModel[i];
                let select = document.querySelector(".model");
                select.appendChild(option);
            }  
        })

        document.querySelector('.model').addEventListener('change', function(){
             // текущее выбранное значение
             let value = this.value;
             let mark = document.querySelector('.mark').value
             // создание массива с выбранной маркой авто
             let arrModel=catalog.filter(item=>{(item.model === value) && (item.mark === mark)});
             console.log(arrModel)
            // Создаем массив Года выпуска Авто
            let arrYearOnly = [];
            for (let i=0; i<arrModel.length; i++){
                arrYearOnly.push(arrModel[i].year)
            }
            console.log(arrYearOnly)
            // Создаем массив из уникальных наименований Моделей Авто
            let inputYear = Array.from(new Set(arrYearOnly));

            // Очистить поля от прошлых Моделей
            let year = document.querySelector(".year");
            while (year.firstChild) {
                year.removeChild(year.firstChild);
            }
            // Добавляем новые записи в Модели Авто
            for (let i=0; i<inputYear.length; i++) {
                let option = document.createElement("option");
                option.classList = "option-year";
                option.value = inputYear[i];
                option.textContent = inputYear[i];
                let select = document.querySelector(".year");
                select.appendChild(option);
            }
        })

        $(function(){
            $("#datepicker").datepicker({
                minDate: new Date(2021, 2 - 1, 14),
                maxDate: new Date(2021, 2 - 1, 25)
            });
        });
        
    })