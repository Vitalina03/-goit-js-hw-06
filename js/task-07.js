const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function fontSizeControl(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';}

    inputRangeEl.addEventListener('input', fontSizeControl);