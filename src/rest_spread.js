function somar() {
    let resultado = 0
    for(let i = 0; i<arguments.length; i++){
        resultado +=arguments[i]
    }
    return resultado
}

somar(100,200,342,42,4526,8567)
// rest
function SomarComRest(...numeros) {  
    const soma = numeros.reduce((total,numeroAtual)=>{ 
        total += numeroAtual; 
        return total;
    },0)
    return soma
}
console.log(SomarComRest(100,200,300,400,31,23,12,3,32,32,32,32,3,23,4,34,34,3,43,43))

// spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolSP = ['santos','palmeiras', 'bragantino','sao paulo']

const timesDeFutebolRJ = ['vasco','botafogo', 'fluminense','flamengo']

const timesDeFutebol = [...timesDeFutebolSP,...timesDeFutebolRJ]

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo:'gol',
    marca:'vw',
    motor:1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor:1.8
}

console.log(carroDaAna)

// desestruturacao
const motorDoCarroDaAna = carroDaAna.motor

const { motor:anaMotor } = carroDaAna
const { motor:juliaMotor } = carroDaJulia

const [time1, ...outrosTimes] = timesDeFutebol
console.log(time1)
console.log(outrosTimes)