const saudacao = (nome) => console.log(`Olá ${nome}`)

const processoEntradaUsuario = (callback) =>{
    const nome = "Almeida"
    callback(nome)
}

processoEntradaUsuario(saudacao)

/****************************************/

const callback = e => alert(`Aconteceu um evento ${e.type}`)

window.addEventListener('click', callback)

/*****************************************/

const somar = (x,y) => x+y

const calcular = (x,y,computar) => computar(x,y)

const resultado = calcular(20,30,somar)

console.log(resultado)

/******************************************/

const arr = [1,2,3]

const newArr = arr.map((x) => x + x)

console.log(newArr)

