

function addInputItem(arr, className) {
    // Добавляем Ключи в DOM
    for (let i=0; i<arr.length; i++) {
        let option = document.createElement("option");
        option.classList = "option-mark";
        option.value = arr[i];
        option.textContent = arr[i];
        let select = document.querySelector(className);
        select.appendChild(option);
    }  
}

function clearOptions(className){
    // Очистить поля от прошлых Моделей
    let key = document.querySelector(className);
    while (key.firstChild) {
        key.removeChild(key.firstChild);
    }
}

function start() {
// анимация первых квадратов
const windowInnerWidth = window.innerWidth/2;
const windowInnerHeight = window.innerHeight/2;

document.querySelector("*").style.setProperty('--transition-square-w', windowInnerWidth+'px');
document.querySelector("*").style.setProperty('--transition-square-h', windowInnerHeight+'px');

let button = document.querySelector('.button');

function click() {
    document.querySelector('.contaner-two').style.display = "none";
    document.querySelector('.contaner-three').style.display = "block";
    button.style.transform = 'rotate(180deg)';
    button.removeEventListener('click', click);
}

const p = new Promise(function(resolve){
    let square = document.querySelectorAll('.square');
    for (let i=0; i<square.length; i++) {
        square[i].classList.add('square_'+(i+1));
        square[i].style.transition = 'all 2s linear'
    }
    setTimeout(()=>{resolve()},2000);
})

p
    .then (()=> {
        return new Promise((resolve)=>{
            document.querySelector('.contaner-two').style.display = 'block';
            button.style.display = 'block';
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
                button.addEventListener('click',click)
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
        // Создаем массив Марок Авто
        let arrMark = [];
        for (let i=0; i<catalog.length; i++){
            arrMark.push(catalog[i].mark)
        }
        // Создаем массив из уникальных наименований Марок Авто
        let inputMark = Array.from(new Set(arrMark));
        // Добавляем Марки авто в DOM

        addInputItem(inputMark, '.mark')
        
        // Создаем событе на изменение в выпадающем списке
        document.querySelector('.mark').addEventListener('change', function(){

            // Убираем строку с выбором авто из списка
            if (document.querySelector(".mark-option-prev")){
                document.querySelector(".mark").removeChild(document.querySelector(".mark-option-prev"))
            }

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

            clearOptions('.model')

            let firstChildModel = document.createElement("option");
            firstChildModel.classList = "model-option-prev";
            firstChildModel.textContent = "Выберите модель авто";
            document.querySelector(".model").appendChild(firstChildModel);

            addInputItem(inputModel, '.model')

            document.querySelector('.model').disabled = false;
        })

        document.querySelector('.model').addEventListener('change', function(){
            // Убираем строку с выбором авто из списка
            if (document.querySelector(".model-option-prev")){
                document.querySelector(".model").removeChild(document.querySelector(".model-option-prev"))
            }
             // текущее выбранное значение
            let value = this.value;
            let mark = document.querySelector('.mark').value
             // создание массива с выбранной маркой авто
            let arrMark=catalog.filter(item=>item.mark === mark);
            let arrModel=arrMark.filter(item=>item.model === value);
            // Создаем массив Года выпуска Авто
            let arrYearOnly = [];
            for (let i=0; i<arrModel.length; i++){
                arrYearOnly.push(arrModel[i].year)
            }
            // Создаем массив из уникальных наименований Моделей Авто
            let inputYear = Array.from(new Set(arrYearOnly));

            clearOptions('.year')

            let firstChildYear = document.createElement("option");
            firstChildYear.classList = "year-option-prev";
            firstChildYear.textContent = "Выберите год выпуска авто";
            document.querySelector(".year").appendChild(firstChildYear);

            addInputItem(inputYear, '.year')

            document.querySelector('.year').disabled = false;
        })

        document.querySelector('.year').addEventListener('change', ()=>{
            // Убираем строку с выбором авто из списка
            if (document.querySelector(".year-option-prev")){
                document.querySelector(".year").removeChild(document.querySelector(".year-option-prev"))
            }
            document.querySelector('input').style.display = "block";
        })

        document.querySelector('input').addEventListener('click', function(){
            // Установка диапазона дат
            let v = document.querySelector('.model').value
            let m = document.querySelector('.mark').value
            let y = document.querySelector('.year').value
            let arrMk=catalog.filter(item=>item.mark === m);
            let arrMl=arrMk.filter(item=>item.model === v);
            let arrYr=arrMl.filter(item=>item.year === y);
            let strData = arrYr[0].delivery.replace(/[^0-9]/g," ");
            let arrData = strData.split(' ')

            $.datepicker.setDefaults({
                minDate: new Date(arrData[2], arrData[1], arrData[0]),
                maxDate: new Date(arrData[5], arrData[4], arrData[3])
            });

            $( "#datepicker" ).datepicker( "refresh" );

            document.querySelectorAll('.ui-state-default').forEach(element => {
                element.addEventListener('click',()=>{
                    setTimeout(()=>{
                        document.querySelector('.contaner-four').style.display = "block";
                        document.querySelector('.contaner-three').style.display = "none";

                        let strData = document.querySelector('input').value.replace(/[^0-9]/g," ");
                        let arrData = strData.split(' ')

                        document.querySelector('.text').textContent = `вы выбрали ${document.querySelector('.mark').value} 
                                                                                    ${document.querySelector('.model').value} 
                                                                                    ${document.querySelector('.year').value}, 
                                                                                    доставка ${arrData[1]}.${arrData[0]}.${arrData[2]}`;
                    },100)
                })
            });
        })

        $(function(){
            $("#datepicker").datepicker({
            });
        });
        
    })
}

start();

document.querySelector('.replay').addEventListener('click', ()=>{
    // Настройки по умолчанию
    document.querySelector('.contaner-four').style.display = 'none';
    document.querySelector('.contaner-first').style.display = 'block';
    document.querySelector('.button').style.backgroundColor = 'red';
    let buttonDefault = document.querySelector('.button')
        buttonDefault.style.borderTop = '2px solid red';
        buttonDefault.style.borderBottom = '2px solid red';
        buttonDefault.style.borderLeft = '2px solid green';
        buttonDefault.style.BorderRight = '2px solid green';

    clearOptions('.mark')
    
    document.querySelector('.model').disabled = true;
    
    clearOptions('.model')

    let optionModel = document.createElement("option");
    optionModel.classList = "option-year";
    optionModel.textContent = "Выберите предыдущий пункт";
    document.querySelector('.model').appendChild(optionModel);

    document.querySelector('.year').disabled = true;

    clearOptions('.year')

    let optionYear = document.createElement("option");
    optionYear.classList = "option-year";
    optionYear.textContent = "Выберите предыдущий пункт";
    document.querySelector(".year").appendChild(optionYear);

    document.querySelector('.delivery').style.display = 'none';
    document.querySelector('.delivery').value = "Доставить"


    let square = document.querySelectorAll('.square');
    for (let i=0; i<square.length; i++) {
        square[i].classList.remove(`square_${i+1}`);
        square[i].style.transition = 'all 0s linear'
    }

    // перезапуск через 1 сек
    setTimeout(function(){start()},1000);
})

