const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');



const onRangeChange = (event) =>spanRef.style.fontSize = `${event.currentTarget.value}px`;

inputRef.addEventListener('input', onRangeChange);
 

// ================================вариант 2 ==============================
// const textAbr = document.querySelector('#text');
// const inputAbr = document.querySelector('#font-size-control');

// inputAbr.addEventListener("input", (event) => {
//     textAbr.style.fontSize = `${event.target.value}px`;
//     event.target.value > 50 ? textAbr.style.color = "#849" : textAbr.style.color = "#169"
// });

// ===========================вариант 3 ============================================

// const inputText = document.querySelector("#text");
// const sizeController = document.querySelector("#font-size-control");
// sizeController.setAttribute("value", 20);


// sizeController.addEventListener("input", () => {
//     const size = sizeController.value;
//     inputText.style.fontSize = size + "px";
// });