let meuMap = new Map();
meuMap.set('nome','Tallyson')
meuMap.set('stack','html, css, js')

console.log(meuMap)

const nome = meuMap.get('nome')

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has('nome'))

// meuMap.clear()

console.log(meuMap.size)

for(let chave of meuMap.keys()){
    console.log(chave)
}

for(let valor of meuMap.values()){
    console.log(valor)
}

for(let entrada of meuMap.entries()){
    console.log(entrada)
}

for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}:${valor}`)
}

meuMap.delete(`stack`)
console.log(meuMap)

const cpfs = new Set()
cpfs.add(`15322523073`)
cpfs.add(`58456935000`)
cpfs.add(`27257657068`)

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach(valor=>console.log(valor))

const array = ['Tallyson Vieira','Fillipe Medeiros','Kaique Medeiros','Nicolas Nobrega','Eduardo Paulino','Tallyson Vieira','Fillipe Medeiros','Kaique Medeiros']

const arraySet = new Set([...array])

console.log(arraySet)

const arrayNoDuplicate = [...arraySet]