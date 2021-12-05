function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodeEl = document.querySelector('body');
const btnEl = document.querySelector('button');
const spanColorEl = document.querySelector('.color');
btnEl.addEventListener('click', onClick);
function onClick() {
  const color = getRandomHexColor();
  bodeEl.style.background = color;
  spanColorEl.textContent = color;
}


// const spanColorRef = document.querySelector('.color');
// const buttonChangeColorRef = document
// .querySelector('.change-color')
// .addEventListener('click', onBtnChangeColorClick );

// function onBtnChangeColorClick () {
//   const color = getRandomHexColor();
//   document.body.style.backgroundColor = color;
//   spanColorRef.textContent = color;
//   console.log(spanColorRef.textContent)
// };
