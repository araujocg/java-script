// Verificando se a alguma pizza com a inicial 'm' e retornando o primeiro valor encontrado
const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]
const foundPizza = pizzas.find(pizza => {
    return pizza.startsWith("m")
})
console.log(foundPizza)
// Verificando se a alguma fruta chamada "cereja" dentro de frutas
const frutas = [
    { name: "jaca", quantity: 2},
    { name: "banana", quantity: 0},
    { name: "cereja", quantity: 5}
]
console.log(frutas.find(fruta =>{
    return ( fruta.name === "cereja" )
}))