function funcaopesada() {  
    let execucoes = 0;
    for(let i = 0; i < 1000000000;i++){
        execucoes++
    }
    return execucoes
}

const funcaoPesadaPromise = new Promise((resolve,reject)=>{
    try{
        let execucoes = 0;
        for(let i = 0; i < 1000000000;i++){
            execucoes++
        }
        resolve(execucoes) 
    }   catch(e){
        reject('Erro no processamento da funcao')
    }
})

const promiseComParametro = (login,senha)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(`logado com o usuario: ${login}`)},3000)
    })
}


async function funcaoPrincipal() {  
    console.log('inicio')
    // await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro=> console.log(erro))

    promiseComParametro('tallyson@gmail.com','12345678').then(resultado=>console.log(resultado))

    try{
        const resultado = await funcaoPesadaPromise
        console.log(resultado)
    }catch(erro){
        console.log(erro)
    }

    console.log('fim')
}

funcaoPrincipal()