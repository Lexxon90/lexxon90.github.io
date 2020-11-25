function time(){

// Дата месяц год, день недели
function getFullDate() {
    let d = new Date();
    let dateTorday = d.getDate(); // Получение даты

    let year = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ]
    let mounthTorday = year[d.getMonth()]; // Получение месяца

    let yearTorday = d.getFullYear(); // Получение года

    let dayWeek = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ]
    let dayTorday = dayWeek[d.getDay()]; // Получение дня недели

    let fullDate = dateTorday + " " + mounthTorday + " " + yearTorday + " года, " + dayTorday + " ";
    return fullDate;
}

// Функция определения окончаний у временных параметров
function getEndingWord(text1, text2, text3){
// Условие для значений "час", "минута", "секунда"
    if (((String(minSec).charAt(1)==1) || 
        (minSec==1)) && 
        (minSec!=11)) {
        minSec = minSec + text1;
    }
// Условие для значений "часа", "минуты", "секунды"
    else if (((String(minSec).charAt(1)==2) || 
            (String(minSec).charAt(1)==3) || 
            (String(minSec).charAt(1)==4) || 
            (minSec==2) || 
            (minSec==3) || 
            (minSec==4)) && 
            (minSec != 12 && 
            minSec != 13 && 
            minSec != 14)) {
        minSec = minSec + text2;
    }
// Условие для значений "часов", "минут", "секунд"
    else if (minSec || minSec == 0) {
        minSec = minSec + text3;
    }
    return minSec;
}
let minSec;
// получение часа
function getHours() {
    let d = new Date();
    minSec = d.getHours();
    let hours;
    getEndingWord (" час ", " часа ", " часов ");
    return hours = minSec;
}

// Получение минут
function getMinutes() {
    let d = new Date();
    minSec = d.getUTCMinutes();
    let minutes;
    getEndingWord (" минута ", " минуты ", " минут ");
    return minutes = minSec;
}

// Получение секунд
function getSeconds() {
    let d = new Date();
    minSec = d.getSeconds();
    let seconds;
    getEndingWord (" секунда ", " секунды ", " секунд ");
    return seconds = minSec;

}

function fullDate() {
    let fullDate
    return fullDate = getFullDate() 
                + getHours() 
                + getMinutes() 
                + getSeconds();
}

let timer = fullDate();
return timer;
}

export default time;