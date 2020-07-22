const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
  h1.style.color = 'red';
}

function changeBackground() {
  h1.style.background = 'yellow';
}

// btn.removeEventListener('click', hello)
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackground);
// h1.removeEventListener('click', changeColor);