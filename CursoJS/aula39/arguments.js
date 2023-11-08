///////////////////////////////////// arguments

const somarTresNumeros = (num1, num2, num3)=>{
    return soma = num1 + num2 + num3
}
console.log(somarTresNumeros(3,7,1)) // 11

//

function somaNumerosInfi1(){
    let soma = 0
    const args = Array.from(arguments)
    for(const a of args){
        soma += a
    }
    return soma
}
console.log(somaNumerosInfi1(1,2,3,4,5)) // 15

//

function somaNumerosInfi2(){
    const args = Array.from(arguments) // o arguments na vdd é um objeto em vc tem q fazer isso para "transformar" ele em um array
    return args.reduce((acumulador, valor) =>  acumulador += valor)
    // return args.reduce((acumulador, valor) => {
    //     return acumulador += valor
    // })
}
console.log(somaNumerosInfi2(5,10,15,20)) // 50


////////////////////////////////////// Rest Parameters


function somaNumerosInfo3(a,b,c,...rest){ // Rest Parameters tem q sempre ser o ultimo // Rest Parameters já é um array
    return rest.reduce((acumulador, valor) => acumulador += valor)
}
console.log(somaNumerosInfo3(5,10,15,20,60)) // 80

//

function multiplicaPeloPrimeiro1(...rest){
    for ( r of rest ){
        console.log(r*rest[0])
    }
}
multiplicaPeloPrimeiro1(5,10,15,20,60) // 25 50 75 100 300

//

function multiplicaPeloPrimeiro2(multiplicador,...rest){
    return rest.map((num) => console.log(num*multiplicador))
}
multiplicaPeloPrimeiro2(5,10,15,20,60) // 50 75 100 300

//////////////////////////////////// Spread Operator

const ListaDeNumeros = [1,2,2]
const somarTresNum = (num1,num2,num3) =>{
    return num1 + num2 + num3
}
console.log(somarTresNum(...ListaDeNumeros)) // 5

//

const listaNumeros1 = [1,2,3]
const listaNumeros2 = [4,5,6]
const listaTotal = [...listaNumeros1,...listaNumeros2]
console.log(listaTotal) // [1,2,3,4,5,6]

//

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
const objCopy = {...obj1,...obj2, abcd:1234}
console.log(objCopy) // { a: 1, b: 2, c: 3, d: 4, abcd: 1234 }



