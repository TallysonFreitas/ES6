"use strict";

var minhaFuncao = function minhaFuncao() {
  return 'Diz olah';
};
var umCarro = function umCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(umCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    this.velocidadeAtual -= 10;
  }
};
carro.frear();
carro.acelerar();
console.log(carro.velocidadeAtual);