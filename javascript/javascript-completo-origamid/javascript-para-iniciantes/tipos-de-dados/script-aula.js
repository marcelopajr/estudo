// typeof
var nome = 'Marcelo';
var idade = 25;
var simbolo = Symbol();
console.log(typeof simbolo);

// Concatenando strings
var nome = 'Marcelo';
var sobrenome = 'Pereira';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Concatenando string + number
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);
console.log(typeof frase);

// Concatenando com template string
var frase2 = `Ronaldo fez ${gols * 2} gols`;
console.log(frase2);
