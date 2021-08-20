const animalList = document.querySelector('.animais-lista');
console.log(animalList.clientHeight);

const distanceFromTop = animalList.offsetTop;
console.log(distanceFromTop);

const firstH2 = document.querySelector('h2');
console.log(firstH2.offsetLeft);

const h2Rect = firstH2.getBoundingClientRect();
console.log(h2Rect);

if (h2Rect.top < 0) console.log('Passou do elemento');

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;
console.log(small);

if (small) {
  console.log('Tela pequena');
} else {
  console.log('Tela grande');
}
