// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  var marca = 'Fiat';
  var portas = 4;
}
console.log(cor, marca, portas);
// Foram utilizadas 'const' e 'let' para declarar variáveis dentro do bloco de código. A única que consegue ser acessada é a cor, pois foi definida como 'var', vazando do bloco de código.

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return (x += dois);
}

function dividirDois(x) {
  return (x /= dois);
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
