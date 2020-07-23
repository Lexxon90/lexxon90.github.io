let string = prompt("Введите строку для преобразования в хештег");
string = string.toLowerCase();
let arrString = string.match(/[а-я0-9a-z]+/g);
let s="#"
if (!isNaN(string) || string.length > 100) {
    console.log ("false")
}
else {
    for (let i=0; i < arrString.length; i++ ) {
        let word = arrString[i];
        word =  word[0].toUpperCase() + word.substring(1);
        s+=(word);
    }
    console.log (s);
}