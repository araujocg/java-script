const resposta = [
    {nome:"gelar"},
    {nome:"matar"},
    {nome:"lunar"},
    {nome:"leite"}
]

const indiceAleatorio = Math.floor(Math.random() * resposta.length)
const respostaSorteada = resposta[indiceAleatorio]
const letterAlreadyClicked = []
const divr = []
for (let i = 1; i <= respostaSorteada.nome.length; i++) {
    divr.push(document.getElementById(`letra_resposta0${i}`));
}
const divt = []
for (let i = 1; i <= 26; i++) {
    divt.push(document.getElementById(`letra_teclado${i}`));
}
//

//

//
function atualizarDivtERRO(letra) {
    const numero = letra.charCodeAt(0) - 97
    divt[numero].style.color = '#6e0303'
    divt[numero].style.background = '#7c7c7c'
}
function atualizarDivtCORRETO(letra) {
    const numero = letra.charCodeAt(0) - 97
    divt[numero].style.color = '#53c553'
    divt[numero].style.background = '#7c7c7c'
}

function atualizarDivrComLetras(palavra, letra) {
    const posicoes = foundPositionLetter(palavra, letra);
    
    for (const posicao of posicoes) {
        divr[posicao].textContent = letra;
    }
}

//

//
function foundPositionLetter(palavra, letra) {
    const position = [];

    for (let p = 0; p < palavra.length; p++) {
        if (palavra[p] === letra) {
            position.push(p);
        }
    }
    return position;
}


//

//
function alreadyClicked(letra){ // verificar se a letra ja foi clicada
    return letterAlreadyClicked.includes(letra)
}

//

// verificar se a letra esta na palavra
function check(letra){ 
    if (respostaSorteada.nome.includes(letra)){
        return true
    } else {
        return false
    }
}

//

// função principal
function forcaFunction(letra){ 
    if (!alreadyClicked(letra)){
        letterAlreadyClicked.push(letra)
        if (check(letra)){
            atualizarDivrComLetras(respostaSorteada.nome, letra)
            atualizarDivtCORRETO(letra)
        } else{
            atualizarDivtERRO(letra) 
        }
    } else {
        window.alert('Esta letra já foi clicada.')
    }
}
