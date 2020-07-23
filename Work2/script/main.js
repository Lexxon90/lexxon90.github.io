// Проверка типа данных для "s", если не строка или массив возвращает -1. 
// Поиск в слове(или массиве) "s" необходимых символов(элементов для массива) "a" и "b". 
// Определение сколько символов(элементов в массиве) предшествует "a" и "b". 
// Сравнение данных значений для а и b. 
// Возвращает максимального числа предшествующих эллементов при отсутствии совпадений возвращает -1.

function func(s, a, b) {
  if (typeof s[0] === 'undefined') {
    return -1;
  }
  r = funcCount(a);
  j = funcCount(b);
  function funcCount (arg) {
    let result = -1;
    for (i = s.length - 1; i > -1; i--) {
      for (var x = arg.length - 1; x > -1; x--) {
        if (s[i + x] !== arg[x]) break;
      }
      if (result === -1 && x === -1) {
        result = i;
      };
    }
    return result
  }
 
  if (r > j) {
    return j;
  } 
  else return j
}