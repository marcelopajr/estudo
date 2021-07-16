// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}
console.log(isTruthy('teste'));
console.log(isTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}
console.log(perimetro(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}
console.log(nomeCompleto('Marcelo', 'Pereira'));

// Crie uma função que verifica se um número é par
function isPar(num) {
  if (num % 2 === 0) {
    return 'O número é par';
  } else {
    return 'O número é ímpar';
  }
}
console.log(isPar(2));
console.log(isPar(5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOfSomething(param) {
  return typeof param;
}
console.log(typeOfSomething({}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function printMyName() {
  var nome = 'Marcelo';
  var sobrenome = 'Pereira';

  return console.log(`${nome} ${sobrenome}`);
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(40));
console.log(jaVisitei(20));
