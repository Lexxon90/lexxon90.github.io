let arr = ["$11", "$1.5", "36₽", "$4", "6₽"]
let arrString = arr.join(" ");
let resultRub = arrString.match(/\d+(?=\p{Sc})/gu)
let resultDollar = arrString.match(/(?<=\p{Sc})[\d.]+/gu)

function summ(result) {
    let s=0;
    for (let i=0; i < result.length; i++ ) {
        s=s+(+result[i]);
    }
    return s;
}

alert(`Сумма массива в рублях: ${summ(resultRub)}`);
alert(`Сумма массива в долларах: ${summ(resultDollar)}`);
