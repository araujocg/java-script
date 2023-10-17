const umaPromessa = new Promise((resolve, reject) =>{
    let soma = 1+3
    if (soma === 2){
        resolve('Tudo certo')
    } else{
        reject('Deu Ruim')  // usar o reject n é obrigatório!!
    }
})
console.log('esperando promise...')
umaPromessa.then((resultado)=>{
    console.log(`Valor do then: ${resultado}`) // caso seja resolve*
}).catch((erro)=>{
    console.error(`Valor do catch: ${erro}`) // caso seja reject*
}).finally(()=>{
    console.log(`Independente do resultado eu sempre estarei aqui`) // sempre vai aparecer independente do resultado
})

console.log('Isso vai acontecer antes da promise')

///////////////////////////////////////

const promessa1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Promise 1 resolvida')
    }, 1000)
})
const promessa2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Promise 2 resolvida')
    }, 500)
})
const promessa3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Promise 3 resolvida')
    }, 100)
})

Promise.all([promessa1, promessa2, promessa3]).then((messages) =>{
    console.log(messages)
})

Promise.race([promessa1, promessa2, promessa3]).then((message) =>{
    console.log(message) // se o tempo for msm/se n tiver tempo de diferença = vou rodar sempre o primeiro parametro
                         // se tiver um delay pre definido rodar sempre o primeiro a ser rodado/ com menor tempo de delay
})

