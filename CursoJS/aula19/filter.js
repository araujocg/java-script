// filtrando os numeros repetidos usando o .filter()
const array = [2,3,4,5,4,12,19,7,2,5]
const filtro = array.filter((elem, index, arr) =>{
    return arr.indexOf(elem) === index
})

console.log(filtro)