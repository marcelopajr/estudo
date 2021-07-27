// window.alert('Teste do "window.alert"');

const href = window.location.href;
console.log(href);

if (
  href === 'http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/index.html'
) {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;
console.log(h1Selecionado, h1Classes);

function callbackTitle() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackTitle);
