var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro);

if (true) {
  let mes = 'julho';
  console.log(mes);
}
// console.log(mes);

for (let i = 0; i < 5; i++) {
  console.log(`Número ${i}`);
}

const semana = 'Sexta';
// semana = 'quinta';
console.log(semana);

const data = {
  ano: 2018,
  mes: 'dezembro',
};

data.ano = 2019;
data.dia = 25;
