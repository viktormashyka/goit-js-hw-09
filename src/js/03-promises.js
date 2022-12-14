// Завдання 3 - генератор промісів
// Виконуй це завдання у файлах 03-promises.html і 03-promises.js. Подивися демо-відео роботи генератора промісів.

// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах, крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

// Бібліотека повідомлень
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix.

import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
// console.log(formRef);
const buttonEl = document.querySelector('button');
const delayEl = document.querySelector('input[name = delay]');
const stepEl = document.querySelector('input[name = step]');
const amountEl = document.querySelector('input[name = amount]');

formEl.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  // const { delay, step, amount } = event.currentTarget;

  let delayNum = Number(delayEl.value);
  let stepNum = Number(stepEl.value);
  let amountNum = Number(amountEl.value);

  // const dataForm = new FormData(formRef);
  // console.log(dataForm.entries());
  // const finalData = {};
  // for (const [key, value] of dataForm.entries()) {
  //   finalData[key] = Number[value];
  // }
  // formRef.reset();

  console.log('delay.value', delayNum);
  console.log('step value', stepNum);
  console.log('amount value', amountNum);

  if (amountNum <= 0) {
    console.log(`❌ Bad amount. Try amount under 0`);
    Notiflix.Notify.info('❌ Bad amount. Try amount under 0');
    return;
  }

  for (let i = 1; i <= amountNum; i += 1) {
    createPromise(i, delayNum)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayNum += stepNum;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// event.currentTarget.reset();
// const { delay, step, amount } = event.currentTarget;
