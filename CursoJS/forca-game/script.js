const resposta = [
    {nome:"gelar"},
    {nome:"matar"},
    {nome:"lunar"},
    {nome:"leite"}
]
const indiceAleatorio = Math.floor(Math.random() * resposta.length)
const respostaSorteada = resposta[indiceAleatorio]
console.log(respostaSorteada)
const letterAlreadyClicked = []

function foundPositionLetter(palavra, letra){
    const position = []

    for (let p = 0; p < palavra.length; p++){
        if (palavra[p] === letra){
            position.push(p)
        }
    }
    return position
}

function alreadyClicked(letra){ // verificar se a letra ja foi clicada
    return letterAlreadyClicked.includes(letra)
}

function check(letra){ // verificar se a letra esta na palavra
    if (respostaSorteada.nome.includes(letra)){
        return true
    } else {
        return false
    }
}


function forcaFunction(letra){ // função principal
    if (!alreadyClicked(letra)){
        letterAlreadyClicked.push(letra)
        if (check(letra)){
            const position = foundPositionLetter(respostaSorteada.nome, letra) 
            if (position.length > 0) {
                window.alert(`${letra} foi encontrada nas posições ${position.join(', ')}`)
            }
        }
    } else {
        window.alert('Esta letra já foi clicada.')
    }
}

//////// ESTA MOSTRANDO JA A POSIÇÃO DA LETRA EM QUESTÃO
//////// AGR ACHO Q JA ESTA NA HORA DE COMEÇAR A COLOCAR A LETRA NA CORRETA NO PRA APARECER AO INVEZ DE MANDAR UM WINDOW.ALERT XD