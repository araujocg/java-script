const cincoMil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000)
})
const mil = () => new Promise((resolve, reject) =>{
    setTimeout(() => reject("promise mil resolvida"), 1000)
})

const resolvedoraDePromisesAssincronas =  async()  => { 
    await cincoMil().then((res) => {
        console.log(res)
    }).catch((err) =>console.log(err))
    await mil().then((res) => {
        console.log(res)
    }).catch((err) =>console.log(err))
}
resolvedoraDePromisesAssincronas()
/*
const cincoMil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000)
})
const mil = () => new Promise((resolve, reject) =>{
    setTimeout(() => reject("promise mil resolvida"), 1000)
})

const resolvedoraDePromisesAssincronas =  async()  => { 
    const resultado1 = await cincoMil().then((res) => {
        console.log(res)
        return res
    }).catch((err) =>console.log(err))
    const resultado2 = await mil().then((res) => {
        console.log(res)
    }).catch((err) =>console.log(err))
    console.log(`Mensagem: ${resultado1}, ${resultado2},  ${resultado3}, ${resultado4} `)
}
resolvedoraDePromisesAssincronas()
*/