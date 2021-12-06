const input = document.querySelector( '#validation-input' )

input.addEventListener( 'blur', onValidBlur )


function onValidBlur () {
    if ( input.value.length == 6 ) {
        input.classList.add( 'valid' )
        input.classList.remove( 'invalid' )
    }
    else {
        input.classList.remove( 'valid' )
        input.classList.add('invalid')
    }
}

// ====================вариант 2 ===============================================

// const validationInputRef = document.querySelector("#validation-input");

// function changeClassValidationInputRef({ target: { value } }) {
//   value.length === +validationInputRef.dataset.length
//     ? togleClassValidationInputRef("valid", "invalid")
//     : togleClassValidationInputRef("invalid", "valid"); 
// }

// function togleClassValidationInputRef(add, rem) {
//   validationInputRef.classList.add(add);
//   validationInputRef.classList.remove(rem);
// }

// validationInputRef.addEventListener("blur", changeClassValidationInputRef);

// ===================================вариант 3 ===================================

// const validationInput = document.querySelector("#validation-input");


// validationInput.addEventListener("blur", () => {

//     const dataLength = +validationInput.dataset.length;

//     console.log(dataLength);
//     console.log(validationInput.value.length);

//   if (validationInput.value.length === dataLength) 
//   {validationInput.classList.remove("invalid");
//   validationInput.classList.add("valid")}
  
//   else {validationInput.classList.remove("valid");
//   validationInput.classList.add("invalid");}
  
// });
