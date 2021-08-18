const imgs = document.querySelectorAll('img');

imgs.forEach(function (img, index) {
  // console.log(img, index);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => console.log(item));
