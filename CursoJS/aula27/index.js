for (let i=0; i<=10; i++){
    var j = i
}
console.log(i,j) // vai dar erro no i pq com o let a variavel ela nunca escapa do bloco em q ela esta dando mais conforto pra quem esta usando let

/**************************************************/

let z = 10
z = 20  // vai funcionar normalmente

const x = 10
x = 20 // vai dar erro

/***************************************************/

const arr = [1,3,6,7] // O normal é usar const pra arrays e objetos
arr.push(5)

const obj = {a:1, b:2}
obj.c = 3