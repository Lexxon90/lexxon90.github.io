'use strict'

// Вычисляем случайную траекторию мяча по оси Y в "px"
function getRandomHeightInPx(min, max) {
	let randomNumber = Math.random() * (max - min) + min;
	let randomRoundNumber = Math.round(randomNumber);
	randomRoundNumber = randomRoundNumber + "px";
	return randomRoundNumber;
  }
// Вычисляем время анимации
function getDurationAnimate (fieldWidth, flag) {
	// let duration = 5000;
	let ballSpeed = fieldWidth / duration;
	let leftDistanse;
	// Измерение ширины поля
	if (flag == 1 || flag == 2){
		leftDistanse = $(".ball").css("right");
	}
	else if (flag == 3 || flag==4){
		leftDistanse = $(".ball").css("left");
	}

	// Отбрасываем "px" и округляем
	let leftDistanseNumber=leftDistanse.match(/[0-9]+/).join("");
	let durationAnimation = leftDistanseNumber / ballSpeed;
	return durationAnimation;
}
// Вычисляем позицию мяча по оси "Y"
function getBallPositionY() {
	let ballPositionY = $(".ball").css("top");
	ballPositionY=ballPositionY.match(/[0-9]+/).join("");
	return ballPositionY;
}


// Функция для вычисления попадания мяча в ворота
let getGoal = function (){
	let gatesUP = $(".gate-left-up").css("top").match(/[0-9]+/).join("");
	let gatesDown = $(".gate-left-down").css("top").match(/[0-9]+/).join("");
	let ballPositionY = $(".ball").css("top").match(/[0-9]+/).join("");
	// Добавим 50, что бы позиционирование гола была относителньо центра мяча (мяч 100рх)
	ballPositionY = +ballPositionY + 50;
	if ((+ballPositionY < +gatesDown) && (+ballPositionY > +gatesUP)) {
		$(".gol").toggle(1000);
		$(".gol").toggle(1000);
		getScore()
		returnWinner()
	}
}

function returnWinner() {
	if (($(".player1").text() == 9)) {
		alert(`Поздравляю игрок 1 победил со счетом ${$(".player1").text()}:${$(".player2").text()}`);
		$(".player1").text(0);
		$(".player2").text(0);
	}
	else if (($(".player2").text() == 9)) {
		alert(`Поздравляю игрок 2 победил со счетом ${$(".player2").text()}:${$(".player1").text()}`);
		$(".player1").text(0);
		$(".player2").text(0);
	}
}
// Функция счета
function getScore() {
	let player1 = $(".player1").text();
	let player2 = $(".player2").text();
	let positionRight = $(".ball").css("right").match(/[0-9]+/).join("");
	let positionLeft = $(".ball").css("left").match(/[0-9]+/).join("");
	if (positionLeft>positionRight) {
		$(".player1").text(+player1+1);
	}
	else $(".player2").text(+player2+1);
}

function getGateSize(size){
	// значение gateWidth это половина ворот, за ширину ворот принимаем gateWidth*2 
	// для расширения ворот - увеличиваем значение в gateWidth до нужной величины
	// по умолчанию - ворота 10% от высоты поля
	let heightSize = $(".field").css("height").match(/[0-9]+/).join("");
	let radiusGates = (heightSize / 2)*size/100;
	// границы ворот
	let gatesBorder = (heightSize / 2) - radiusGates;

	$(".gate-left-up").css("top", gatesBorder);
	$(".gate-left-down").css("bottom", gatesBorder);
	$(".gate-right-up").css("top", gatesBorder);
	$(".gate-right-down").css("bottom", gatesBorder);
}


// Функция измерения габаритов поля
let getFieldSize = WidthHeight => $(".ball").css(WidthHeight);

// Функция получить числовой значение из "px"
let getSizeNumber = fieldSize => fieldSize.match(/[0-9]+/).join("");

let fieldWidth
let fieldWidthNumber
let fieldHeight
let fieldHeightNumber
let flag;
let footballY;
let duration;

// Событие при клике
$('.ball').on('mousedown', function () {
	$(this).stop(true);

	// вправо - вниз
	if (((($(this).css("left").match(/[0-9]+/).join("")) == 0) || flag == 2) && 
	(($(this).css("right").match(/[0-9]+/).join("")) != 0)){
		flag = 1;
		footballY = getRandomHeightInPx(getBallPositionY(), fieldHeightNumber);
		$(this).animate({left:fieldWidth, top: footballY},
			getDurationAnimate(fieldWidthNumber, flag), 
			getGoal );
	}
	// влево - вверх
	else if ((($(this).css("right").match(/[0-9]+/).join("")) == 0) || flag == 4) {
		flag = 3;
		footballY = getRandomHeightInPx(0, getBallPositionY());
		$(this).animate({left:0, top: footballY},
			getDurationAnimate(fieldWidthNumber, flag), 
			getGoal );
	}
	// вправо-вверх
	else if (flag == 1) {
		flag = 2;
		footballY = getRandomHeightInPx(0, getBallPositionY());
		$(this).animate({left:fieldWidth, top: footballY},
			getDurationAnimate(fieldWidthNumber, flag), 
			getGoal );
	}
	// влево - вниз
	else if (flag == 3) {
		flag = 4;
		footballY = getRandomHeightInPx(getBallPositionY(), fieldHeightNumber);
		$(this).animate({left:0, top: footballY},
			getDurationAnimate(fieldWidthNumber, flag), 
			getGoal );
	}
})

$(".btn-begin").on("click", function(){
	
	$(".football").css("display", "block");
	// Измерение высоты поля
	fieldWidth = +(getFieldSize("right").match(/[0-9]+/).join(""))+(+(getFieldSize("left").match(/[0-9]+/).join("")))+"px";
	// Отбрасываем "px" и округляем
	fieldWidthNumber=getSizeNumber(fieldWidth);
	// Измерение ширины поля
	fieldHeight = +(getFieldSize("bottom").match(/[0-9]+/).join(""))+(+(getFieldSize("top").match(/[0-9]+/).join("")))+"px";
	// Отбрасываем "px" и округляем
	fieldHeightNumber=getSizeNumber(fieldHeight);

	// Выбор размеров поля
	let selectSize = $(".gate-size").val().match(/[0-9]+/).join("");
	getGateSize(selectSize);
	// Выбор задержки анимации
	let selectTime = $(".time").val().match(/[0-9]+/).join("");
	duration = selectTime*1000;

	$(".setting").css("display", "none");
})

$(".contaner-score").mouseenter(function() {
	// навели курсор на объект (не учитываются переходы внутри элемента)
	$(".btn-setup").css("display","block")
})
.mouseleave(function(){                 
   // отвели курсор с объекта (не учитываются переходы внутри элемента)
   $(".btn-setup").css("display","none")
});

$(".btn-setup").on("click", function(){
	$(".football").css("display","none");
	$(".setting").css("display","block");
	$(".btn-begin").css("display","inline-block");
	$(".btn-begin").text("Продолжить")
	$(".btn-new-game").css("display","inline-block");
	$(".btn-new-game").css("margin-left","50px");
})

$(".btn-new-game").on("click", function(){
	$(".football").css("display","block");
	$(".setting").css("display","none");
	$(".ball").css("top","0");
	$(".ball").css("left","0");
	$(".score").text("0");
})