const formInput = document.querySelector('.form__input');
const form = document.querySelector('.form');
const formBtn = document.querySelector('.form__btn');
const formError = document.querySelector('.form__error');
const errorMsg = document.querySelector('.error__msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkValue();
});

function checkValue() {
  const inputValue = formInput.value.trim();

  if (inputValue === '') {
    formError.classList.remove('hidden');
    errorMsg.classList.remove('hidden');
    form.classList.add('error');
  } else {
    formError.classList.add('hidden');
    errorMsg.classList.add('hidden');
    form.classList.remove('error');
  }
}
