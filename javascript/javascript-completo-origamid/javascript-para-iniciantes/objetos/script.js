// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
let me = {
  nome: 'Marcelo',
  sobrenome: 'Pereira',
};

// Crie um método no objeto anterior, que mostre o seu nome completo
me.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(me.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Au au';
    } else {
      return 'Correr atrás do rabo';
    }
  },
};
console.log(cachorro.latir('homem'));
