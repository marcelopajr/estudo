// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll('img');
console.log(allImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const wordImage = document.querySelectorAll('img[src^="img/imagem"]');
console.log(wordImage);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');
console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecione o último p do site
// const lastP = document.querySelector('p:last-child');
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs[--paragraphs.length]);
