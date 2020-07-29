function toggleText() {
  const button = document.querySelector('.toggle-text-button')
  const text = document.getElementById('text')
  button.addEventListener('click', event => {
      console.log(text.getAttribute('hidden'));
      console.log(text);
      if (text.getAttribute('hidden') == 'true') {
        text.removeAttribute('hidden');
      } else {
        text.setAttribute('hidden', true);
      }
    }
  )
}
