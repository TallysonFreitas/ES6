
// Funcao Contrutora
// function Pokemon(nome,tipo) {  
//     this.nome = nome;
//     this.tipo = tipo;
// }
// const pikachu = new Pokemon('Pikachu','Eletrico')
// console.log(pikachu)

class Pokemon {

    #hp = 100

    constructor(nome,tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    atacar(ataque){
        console.log(`${this.nome} atacou com ${ataque}`)
    }
    atacado(dano){
        this.#hp -=dano
        console.log(`${this.nome} recebeu um ataque e sofreu ${dano} de dano`)
        console.log(`resta ${this.#hp} de hp`)
    }
    exibeHp(){
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon{
    constructor(){
        super('Pikachu','Elétrico')
    }
    atacar(){
        console.log(`${this.nome} atacou com choque do trovao`)
    }
}

const pikachuDoAsh = new Pikachu()
pikachuDoAsh.atacar()

const pikachu = new Pokemon('Pikachu','Eletrico')
// pikachu.nome = 'Pikachu'
// pikachu.tipo = 'Eletrico'
console.log(pikachuDoAsh)
pikachuDoAsh.atacar(`choque do trovao`)

console.log(pikachuDoAsh instanceof Pikachu)
console.log(pikachuDoAsh instanceof Pokemon)

pikachuDoAsh.atacado(80)