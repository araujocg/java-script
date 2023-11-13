const cincoMil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000)
})
const mil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise mil resolvida"), 1000)
})
const quinhentos = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise quinhentos resolvida"), 500)
})
const cem = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise cem resolvida"), 100)
})

const resolvedoraDePromisesAssincronas =  async()  => { // quando tem o async eu estou dizendo q a função q tem algum tipo de codigo rodando dentro dela q é assíncrono e que 
    const resultado1 = await cincoMil() // await serve para o programar esperar concluir e ai ir pra proxima linha
    const resultado2 = await quinhentos()
    const resultado3 = await cem()
    const resultado4 = await mil()

    console.log(`Mensagem: ${resultado1}, ${resultado2},  ${resultado3}, ${resultado4} `)
}
resolvedoraDePromisesAssincronas()

//

function setTimeoutAsync(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }
  
  // Waits for timeout - no error thrown
  await setTimeoutAsync(3000);