const redesSociais = ['Facebook','Instagram','Twitter']
for(let i = 0; i < redesSociais.length; i++){
    console.log(`eu utilizo o ${redesSociais[i]} como rede social`)
}

// capa cada item lancara o item
redesSociais.forEach(function (item, indice) {
    console.log(`#${indice} eu utilizo o ${item} como rede social`)
})

// para cada numero dobra-o
const numeros = [1,2,3,4,5]
const dobroDosNumeros = numeros.map(function (numeroAtual) {  
    return numeroAtual *2
})
console.log(dobroDosNumeros)


const alunos = ['Pedro', 'Tallyson','Eduardo', 'Daniel']

// Cria um item para cada item
const alunosCursos = alunos.map(function (item) {  
    return {
        nome: item,
        curso: 'Frontend',
    }
})

console.log(alunosCursos)

//find -
const tallyson = alunosCursos.find(function(item){
    return item.nome == 'Tallyson'
})
console.log(tallyson)

//encontra o indice do item
const tallysonIndex = alunosCursos.findIndex(function(item){
    return item.nome == 'Tallyson'
})
console.log(tallysonIndex)


alunosCursos.push({
    nome:'Lucio',
    curso:'Backend'
})
// every
const frontend = alunosCursos.every(function (item) {  
    return item.curso ==='Frontend'
})
console.log(frontend)

//some
const backend = alunosCursos.some(function (item) {  
    return item.curso === 'Backend' && item.curso ==='Frontend'
})
const beck = alunosCursos.some(item => item.curso=== 'Backend')
console.log(beck)


// filtrar
const alunosBackend = alunosCursos.filter(function (item) {  
    return item.curso === 'Backend'
})
console.log(alunosBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function (acumulador, itemAtual) {  
    acumulador += itemAtual
    return acumulador
},0)

console.log(soma)
