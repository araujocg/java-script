// const somarTresNumeros = (num1, num2, num3)=>{
//     return soma = num1 + num2 + num3
// }
// console.log(somarTresNumeros(3,7,1))

//

// function somaNumerosInfi1(){
//     let soma = 0
//     const args = Array.from(arguments)
//     for(const a of args){
//         soma += a
//     }
//     return soma
// }
// console.log(somaNumerosInfi1(1,2,3,4,5))

//

function somaNumerosInfi2(){
    const args = Array.from(arguments)
    return args.reduce((acumulador, valor) =>  acumulador += valor)
    // return args.reduce((acumulador, valor) => {
    //     return acumulador += valor
    // })
    
}

console.log(somaNumerosInfi2(5,10,15,20))


