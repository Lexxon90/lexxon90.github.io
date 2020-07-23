fetch("https://lexxon90.github.io/Work4/script/events.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let events = response;
    // Цикл для создания карточек
    for (let i = 0; i < events.length; i++) {
      newCard(i);
    }
    // Функция добавляет новую карточку и событие при наведении на дату
    function newCard(numberCard) {
      // Выбираем список ul
      let ul = document.querySelector(".cards");
      // Создаем элемент списка li
      let newLi = document.createElement("li");
      // Добавляем элемент li в конец списка ul
      ul.appendChild(newLi);
      // Добавляем классы для li
      newLi.classList = `card card${numberCard}`;
      // Выбираем элемент li по классу с номером card
      let newCard = document.querySelector(`.card${numberCard}`);
      // Добавляем стиль для фона li
      newCard.style.backgroundImage = `url(${events[numberCard].image})`;
      // Создаем элемент h2
      let newH2 = document.createElement("h2");
      // Добавляем h2 к списку li
      newLi.appendChild(newH2);
      // Добавляем класс для h2
      newH2.classList = "card-title";
      // Присваиваем текстовый контент из файла JSON
      newH2.textContent = events[numberCard].name;
      // Создаем элемент Div для числа
      let newDiv = document.createElement("div");
      // Добавляем Div к элементу li
      newLi.appendChild(newDiv);
      // Присваиваем класс для Div
      newDiv.classList = `card-number card-number${numberCard}`;
      // Создаем строку с датой из JSON
      let string = events[numberCard].date;
      // Достаем из даты -число
      let stringData = String(string.match(/[0-9]{2}/));
      // Запиываем извлеченное число в текст Div
      newDiv.textContent = stringData;
      // Создаем Div для месяца и года (будет появляться при наведении)
      let newFullData = document.createElement("div");
      // Добавляем Div к списку li
      newLi.appendChild(newFullData);
      // Присваиваем класс для Div
      newFullData.classList = `full-number full-number${numberCard}`;
      // Достаем из даты месяц и год
      let stringFullData = String(string.match(/\.[0-9]{2}\.[0-9]{4}/));
      // Записываем дату и год в Div
      newFullData.textContent = stringFullData;
      // Добваляет img с для Vector
      let img = document.createElement("img");
      // Добавляем в элемент Li
      newLi.appendChild(img);
      // Добавляем класс для img
      img.classList = "card-img";
      // Добавляем ссылку на векторную img
      img.src = "https://lexxon90.github.io/Work4/img/Vector.png";

      // Событие при наведении на дату отображает месяц и год
      let newData = document.querySelector(`.card-number${numberCard}`);
      newData.addEventListener("mouseover", function () {
        document.querySelector(`.full-number${numberCard}`).style.display = "block";
        document.querySelector(`.card-number${numberCard}`).style.paddingRight = "200px";
      });

      // Событие при убирании курсора от даты скрывает месяц и год
      newData.addEventListener("mouseout", function () {
        document.querySelector(`.full-number${numberCard}`).style.display = "none";
        document.querySelector(`.card-number${numberCard}`).style.paddingRight = "9px";
      });
    }
    // Функция фильтра по месяцам и городу
    function filter() {
      // Текстовое значение города в выбранном form/option
      let textCity = formCityClick.options[formCityClick.selectedIndex].text;
      // Текстовое значение месяца в выбранном form/option
      let textMonths =
        formMonthsClick.options[formMonthsClick.selectedIndex].text;
      // Значение value в выбранной option
      let value = formMonthsClick.options[formMonthsClick.selectedIndex].value;

      for (let i = 0; i < events.length; i++) {
        // запись в переменную дату из JSON
        let string = events[i].date;
        // выборка месяца из даты
        let index = String(string.match(/(?<=\.)[0-9]{2}(?=\.)/));
        // перебор карточек по номерам их классов
        let li = document.querySelector(`.card${i}`);

        // Условия для выборки\поиска
        if (textCity == "All" && textMonths == "All") {
          li.style.display = "inline-block";
        } else if (textCity == events[i].city && textMonths == "All") {
          li.style.display = "inline-block";
        } else if (textCity == "All" && value == index) {
          li.style.display = "inline-block";
        } else if (textCity == events[i].city && value == index) {
          li.style.display = "inline-block";
        } else {
          li.style.display = "none";
        }
      }
    }
    // Выбираем форму с выбором города
    let formCityClick = document.querySelector(".search-city-form");
    // Выбираем форму с выбором месяца
    let formMonthsClick = document.querySelector(".search-month-form");
    // Добавляем событие при изменение формы с Городами
    formCityClick.onchange = function () {
      filter();
    };
    // Добавляем событие при изменении формы с Месяцами
    formMonthsClick.onchange = function () {
      filter();
    };
  });
