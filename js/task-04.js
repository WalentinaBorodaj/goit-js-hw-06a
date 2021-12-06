const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#value')
let counterValue = 0;
const changeValue = (step) => {
    counterValue += step; 
    spanRef.innerHTML = counterValue;
}
decrementBtnRef.addEventListener('click', () => changeValue(-1));
incrementBtnRef.addEventListener('click', () => changeValue(+1));

// ===============================вариант 2 ============================
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const valueRef = document.querySelector('#value')
// const incrementBtn = document.querySelector('[data-action="increment"]');

// let counterValue = 0;

// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1;
//     valueRef.textContent = counterValue;
// });

// incrementBtn.addEventListener('click', () => {
//     counterValue += 1;
//     valueRef.textContent = counterValue;
// });