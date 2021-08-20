// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function sumWidthImages() {
  const images = document.querySelectorAll('img');
  let soma = 0;
  images.forEach((image) => {
    soma += image.offsetWidth;
  });
  console.log(`A soma do width de todas as imagens é ${soma}px`);
}

window.onload = function () {
  sumWidthImages();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links);
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const mobile = window.matchMedia('(max-width: 720px)').matches;
if (mobile) {
  menu.classList.add('menu-mobile');
  console.log(menu.classList);
}
