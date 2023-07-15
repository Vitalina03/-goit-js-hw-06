document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  let inputValue = event.currentTarget.value;
  if (inputValue.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
  if (inputEl.value.length === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  }
  if (
    inputEl.value.length !== Number(inputEl.dataset.length) &&
    inputEl.value.length !== 0
  ) {
    inputEl.classList.add('invalid');
  }
}
