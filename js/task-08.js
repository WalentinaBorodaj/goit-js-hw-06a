const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formDataResult = {};
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  )
    return alert('все поля должны быть заполнены.');
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    formDataResult[name] = value;
  });

  console.log(formDataResult);
  loginForm.reset();
}
