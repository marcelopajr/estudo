var total = 10 + 5 + 10;
console.log(total);

var divisao = 200 / 5;
console.log(divisao);

var modulo = 10 % 3;
console.log(modulo);

// Verificando se é número com a função isNaN()
var testeNaN = 'Isso custa 100' / 2;
console.log(isNaN(testeNaN));

// Ordem em operações
var soma = 10 + 10 + 20 + (30 * 4) / (2 + 10);
console.log(soma);

// Incremento e decremento
var x = 2;
console.log(x++); // Incrementa depois de mostrar o x
console.log(++x); // Incrementa antes de mostrar o x
console.log(--x);

// Converter string em number
var numero = '28';
console.log(+numero);
console.log(typeof +numero);
