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

// ==================================вариант 2 =======================================

// const enter = document.querySelector( '#name-input' )
// const exit = document.querySelector( '#name-output' )


// enter.addEventListener( 'input',  onNameInput)

// function onNameInput () {
    
//     if ( enter.value === "" ) {
//     exit.textContent = "Anonimus"
//     }
//     else {
//     exit.textContent = enter.value;
//     }
    
// }

// ===============================вариант 3 =======================================
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");


const addInputFn = () => {
    return textInput.value.trim() === "" ? textOutput.textContent = "Anonymous" : textOutput.textContent = textInput.value;
}

textInput.addEventListener("input", addInputFn);