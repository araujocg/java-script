// Multiplicação de numeros usando .map()

const numbers = [1,4,5,9,14,23]

/*
const doubleNumbers = numbers.map(function(elem){
    return elem*2
})
*/

/*
function doubleNumber(num){
    return num*2
}
const doubleNumbers = numbers.map(doubleNumber)
*/

const doubleNumbers = numbers.map( num => num*2)

console.log(doubleNumbers)

// Fahrenheit para Celsius usando .map()

const fahrenheit = [0,32,45,50,75,80,120]

const celsius = fahrenheit.map(props => {
    return (
        Math.round((props-32) * 5/9)
    )
})
console.log(celsius)