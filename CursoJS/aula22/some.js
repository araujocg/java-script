// Verificando se tem um  numero primo dentro do array usando .some()
const array = [1,6,8,14,44]

function isPrime(value){
    for (i=2; i<value;i++){
        if(value % i === 0){
            return false
        }
    }
    value > 1
    
}
console.log(array.some(isPrime))

// Verificando por condições em valores/objetos usando .some()
const team = [
    {id:12,name:"Topper Harley",pilot:false},
    {id:21,name:"Ramada Thompson",pilot:true},
    {id:34,name:"Pete Thompson",pilot:false},
    {id:50,name:"Kowalskki",pilot:false}
]
console.log( team.some( props => props.pilot == true ) )
// ou 
/*
const algumPiloto = team.some(props => props.pilot == true)
console.log(algumPiloto)
*/
