const switcherElem = document.querySelector('.switcher-toggle');

switcherElem.addEventListener('change', event => {
  console.log(event.target.checked);
});
