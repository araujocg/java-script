const resposta = [
    {nome:"gelar"},
    {nome:"matar"},
    {nome:"lunar"},
    {nome:"leite"}
]
const indiceAleatorio = Math.floor(Math.random() * resposta.length)
const respostaSorteada = resposta[indiceAleatorio]

function check(letra){
    if(resposta.some(props => props.nome.includes({letra}))){
        return true
    } else {
        return false
    }
}
console.log(respostaSorteada)
console.log(check("a"))
// checar se a letra esta na palavra