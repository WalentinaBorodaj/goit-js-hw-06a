const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

function onInputChange  (event) {
    if (event.currentTarget.value.trim() === '') {
        spanRef.textContent = "Anonymous";
    } else {
        spanRef.textContent = event.currentTarget.value.trim();
    }
};

inputRef.addEventListener('input', onInputChange);


// const refs = {
//     input: document.querySelector('#name-input'),
//     span: document.querySelector('#name-output'),
//   };
//   refs.input.addEventListener('input', onnameInput);
//   function onnameInput() {
//     if (refs.input.value === '') {
//       return (refs.span.textContent = 'Anonymous');
//     }
//     return (refs.span.textContent = refs.input.value);
//   }