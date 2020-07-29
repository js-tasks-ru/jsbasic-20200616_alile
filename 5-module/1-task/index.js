function hideSelf() {
  const button = document.querySelector('.hide-self-button')
  button.addEventListener('click', hideButton(button))
}

function hideButton(button) {
  button.setAttribute('hidden', true);
}
