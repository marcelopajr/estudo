const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
console.log(menu.classList);

menu.classList.remove('teste');
menu.classList.toggle('azul');
menu.classList.toggle('azul');
menu.classList.toggle('azul');
console.log(menu.classList);

if (menu.classList.contains('azul')) {
  console.log('Possui a classe "azul"');
}

menu.className += ' vermelho';
console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes[0]);

const img = document.querySelector('img');
const srcImg = img.getAttribute('src');
console.log(srcImg);

img.setAttribute('alt', 'Raposa');
const altImg = img.getAttribute('alt');
console.log(altImg);

const hasAlt = img.hasAttribute('alt');
console.log(hasAlt);
