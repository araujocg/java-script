const resposta = [
    {nome:"gelar"},
    {nome:"matar"},
    {nome:"lunar"},
    {nome:"leite"}
]

const indiceAleatorio = Math.floor(Math.random() * resposta.length)
const respostaSorteada = resposta[indiceAleatorio]
const letterAlreadyClicked = []
const divs = []
console.log(respostaSorteada.nome)

for (let i = 1; i <= respostaSorteada.nome.length; i++) {
    divs.push(document.getElementById(`letra_resposta0${i}`));
}

function atualizarDivsComLetras(palavra, letra) {
    const posicoes = foundPositionLetter(palavra, letra);
    
    for (const posicao of posicoes) {
        divs[posicao].textContent = letra;
    }
}

function foundPositionLetter(palavra, letra) {
    const position = [];

    for (let p = 0; p < palavra.length; p++) {
        if (palavra[p] === letra) {
            position.push(p);
        }
    }
    return position;
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
            atualizarDivsComLetras(respostaSorteada.nome, letra)
        }
    } else {
        window.alert('Esta letra já foi clicada.')
    }
}
//////// ESTA MOSTRANDO JA A POSIÇÃO DA LETRA EM QUESTÃO
//////// AGR ACHO Q JA ESTA NA HORA DE COMEÇAR A COLOCAR A LETRA NA CORRETA NO PRA APARECER AO INVEZ DE MANDAR UM WINDOW.ALERT XD