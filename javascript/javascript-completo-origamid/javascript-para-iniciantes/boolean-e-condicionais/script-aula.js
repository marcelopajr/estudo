var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log('É formado');
} else if (possuiDoutorado) {
  console.log('É formado e possui doutorado');
} else {
  console.log('Não é formado');
}

var nome = '';

if (nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if (!possuiGraduacao) {
  console.log('Não possui graduação');
}

// Verificando se algo é true ou false com !!
console.log(!!'Teste');
console.log(!!0); // 0 é falsy

// Prioridade em true ou false
if (5 - 5 && 5 + 5) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // Pois o 0 é falsy
}

var condicional = 5 - 10 && 5 + 5; // Vai retornar o último valor verdadeiro ou o primeiro falso

if (condicional) {
  console.log('Verdadeiro'); // pois o 10 é truthy
} else {
  console.log('Falso');
}

var corFavorita = 'Rosa';

switch (corFavorita) {
  case 'Rosa':
    console.log('Gosta de rosa');
    break;
  case 'Amarelo':
    console.log('Gosta de amarelo');
    break;
  case 'Azul':
    console.log('Gosta de azul');
    break;
  case 'Branco':
    console.log('Gosta de branco');
    break;
  default:
    console.log('Não tem preferência');
}
