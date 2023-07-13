const minhaFuncao = ()=> 'Diz olah'

const umCarro = ()=>({
    modelo:'Ka',
    fabricante:'Ford'
})

console.log(minhaFuncao())

console.log(umCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar:function() {  
        this.velocidadeAtual += 10
    },
    frear:function() {  
        this.velocidadeAtual -= 10
    }

}

carro.frear()
carro.acelerar()
console.log(carro.velocidadeAtual)