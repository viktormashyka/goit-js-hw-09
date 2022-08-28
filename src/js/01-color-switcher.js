// Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. Подивися демо-відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// **//
const bodyRef = document.querySelector('body');
// console.log(bodyRef);

const btnStartRef = document.querySelector('button[data-start]');
// console.log(btnStartRef);
const btnStopRef = document.querySelector('button[data-stop]');
// console.log(btnStopRef);
let timerId = 0;

btnStartRef.disabled = false;
btnStopRef.disabled = true;

btnStartRef.addEventListener('click', onStartRandomHexColor);
btnStopRef.addEventListener('click', onStopRandomHexColor);

function onStartRandomHexColor() {
  console.log('click => start');

  timerId = setInterval(() => {
    getRandomHexColor();
    const newColor = getRandomHexColor();
    bodyRef.style.backgroundColor = `${newColor}`;
    console.log(`newColor => ${newColor}`);
  }, 1000);

  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
}

function onStopRandomHexColor() {
  console.log('click => stop');
  clearInterval(timerId);
  btnStartRef.disabled = false;
  btnStopRef.disabled = true;
}
