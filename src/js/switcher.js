const switcherElem = document.querySelector('.switcher-toggle');

switcherElem.addEventListener('change', event => {
  if (event.target.checked) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    switcherElem.checked = true;
  } 
})