// Verificando se todos os valores de um array são maiores que 10 usando .every()

const anotherArray = [12,5,8,130,44]

const allAbove10 = anotherArray.every(elem => elem > 10)
console.log(allAbove10)

// Verificando se todos são maiores de 18 anos

const assinantes = [
    {id:12, nome:'Francisco', age: 18},
    {id:48, nome:'Julia', age: 19},
    {id:6, nome:'Roberto', age: 36},
    {id:18, nome:'Claudio', age: 22},
    {id:79, nome:'Gabriel', age: 67},
]

const confirmacao = assinantes.every(props => {
    props.age >= 18
})

console.log(confirmacao)