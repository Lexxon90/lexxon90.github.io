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

fetch("file:///C:/Teterin_work/JS/GitHub/lexxon90.github.io/test/catalog.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        let catalog = response;
        console.log(catalog)
    })