"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("eu utilizo o ".concat(redesSociais[i], " como rede social"));
}

// capa cada item lancara o item
redesSociais.forEach(function (item, indice) {
  console.log("#".concat(indice, " eu utilizo o ").concat(item, " como rede social"));
});

// para cada numero dobra-o
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var alunos = ['Pedro', 'Tallyson', 'Eduardo', 'Daniel'];

// Cria um item para cada item
var alunosCursos = alunos.map(function (item) {
  return {
    nome: item,
    curso: 'Frontend'
  };
});
console.log(alunosCursos);

//find -
var tallyson = alunosCursos.find(function (item) {
  return item.nome == 'Tallyson';
});
console.log(tallyson);

//encontra o indice do item
var tallysonIndex = alunosCursos.findIndex(function (item) {
  return item.nome == 'Tallyson';
});
console.log(tallysonIndex);
alunosCursos.push({
  nome: 'Lucio',
  curso: 'Backend'
});
// every
var frontend = alunosCursos.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(frontend);

//some
var backend = alunosCursos.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
var beck = alunosCursos.some(function (item) {
  return item.curso === 'Backend';
});
console.log(beck);

// filtrar
var alunosBackend = alunosCursos.filter(function (item) {
  return item.curso === 'Backend';
});
console.log(alunosBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);