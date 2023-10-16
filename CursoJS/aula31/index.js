const umaPromessa = new Promise((resolve, reject) =>{
    let soma = 1+3
    if (soma === 2){
        resolve('Tudo certo')
    } else{
        reject('Deu Ruim')
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