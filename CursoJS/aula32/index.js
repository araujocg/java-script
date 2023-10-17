const concoMil = () => Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000)
})
const mil = () => Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise mil resolvida"), 1000)
})
const quinhentos = () => Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise quinhentos resolvida"), 500)
})
const cem = () => Promise((resolve, reject) =>{
    setTimeout(() => resolve("promise cem resolvida"), 100)
})

const resolvedoraDePromisesAssincronas = () => {
    const resultado1 = cincoMil()
    const resultado2 = quinhentos()
    const resultado3 = cem()
    const resultado4 = mil()

    console.log(`Mensagem: ${resultado1}, ${resultado2},  ${resultado3}, ${resultado4} `)
}