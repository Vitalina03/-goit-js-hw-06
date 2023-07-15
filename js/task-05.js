const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const getInputValue = (event) =>
  (nameOutput.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous');

  nameInput.addEventListener('input', getInputValue);

