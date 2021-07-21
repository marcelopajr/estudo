var pessoa = {
  nome: 'Marcelo',
  idade: 25,
};
console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    // Referenciando o próprio objeto
    console.log(this.lados);
    return lado * this.lados;
  },
};
console.log(quadrado.area(8));
console.log(quadrado.perimetro(8));

console.log(Math.random());

var menu = {
  width: 800,
  height: 500,
  backgroundColor: '#84e',
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = '#000';
// Adicionando novas propriedades ou métodos ao objeto
menu.color = 'blue';
menu.esconder = function () {
  console.log('escondeu');
};
var bg = menu.backgroundColor;

console.log(menu.hasOwnProperty('color'));

// Contador de caracteres
console.log('ausaudnhadnsudnusdnwduaudunwaudnw'.length);
