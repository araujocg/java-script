// antigamente ->

const myColors1 = ['red','blue', 'green']
const lastColor1 = myColors1[myColors1.length - 1]
console.log(lastColor1) // Output: green


// atualmente / dps do ECMAScript 2022 ->

const myColors2 = ['red','blue', 'green']
const lastColor2 = myColors2.at(-1)
console.log(lastColor2) // Output: green

//O método at() também aceita números positivos, que podemos usar para acessar o índex da lista.

const myColors3 = ['red','blue', 'green']
const lastColor3 = myColors3.at(0)
console.log(lastColor3)// Output: red
