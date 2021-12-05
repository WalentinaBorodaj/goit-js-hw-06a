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