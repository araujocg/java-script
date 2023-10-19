const resposta = [
    {nome:"gelar"},
    {nome:"matar"},
    {nome:"lunar"},
    {nome:"leite"}
]

let letterAlreadyClicked = []
let erros = 0
let respostaSorteada = ''
let divr = []
let divt = []
const imagemForca = document.getElementById('imagem-forca')

////////////////////////////////////
function iniciarJogo(){
    const indiceAleatorio = Math.floor(Math.random() * resposta.length)
    respostaSorteada = resposta[indiceAleatorio]
    letterAlreadyClicked.length = 0;
    erros = 0
    divr.length = 0;
    divt.length = 0;
    for (let i = 1; i <= respostaSorteada.nome.length; i++) {
        divr.push(document.getElementById(`letra_resposta0${i}`));
    }
    for (let i = 1; i <= 26; i++) {
        divt.push(document.getElementById(`letra_teclado${i}`));
    }
}
function desistirJogo(){
    letterAlreadyClicked = []
    erros = 0
    imagemForca.style.backgroundImage = `url(imagens/imagem-forca0${erros}.png)`
    divr.forEach(div => div.textContent = '')
    divr.length = 0;
    divt.forEach (div => {
        div.style.background = '#FFF'
        div.style.color = '#000'
    } )
}

//////////////////////////////////////

// função principal
function forcaFunction(letra){ 
    if (!alreadyClicked(letra)){
        letterAlreadyClicked.push(letra)
        if (check(letra)){
            atualizarDivrComLetras(respostaSorteada.nome, letra)
            atualizarDivtCORRETO(letra)
        } else{
            atualizarDivtERRO(letra) 
            if (erros<6){
                erros++
                console.log(erros)
                imagemForca.style.backgroundImage = `url(imagens/imagem-forca0${erros}.png)`
            } else{
                
            }
        }
    } else {
        window.alert('Esta letra já foi clicada.')
    }
}


/////////////////////////////////////////

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

//////////////////////////////////////////

function atualizarDivrComLetras(palavra, letra) {
    const posicoes = foundPositionLetter(palavra, letra);
    
    for (const posicao of posicoes) {
        divr[posicao].textContent = letra;
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

/////////////////////////////////////////////

function atualizarDivtCORRETO(letra) {
    const numero = letra.charCodeAt(0) - 97
    divt[numero].style.color = '#53c553'
    divt[numero].style.background = '#7c7c7c'
}
function atualizarDivtERRO(letra) {
    const numero = letra.charCodeAt(0) - 97
    divt[numero].style.color = '#6e0303'
    divt[numero].style.background = '#7c7c7c'
}

///////////////////////////////////////////////

function atualizarDivrComLetras(palavra, letra) {
    const posicoes = foundPositionLetter(palavra, letra);
    
    for (const posicao of posicoes) {
        divr[posicao].textContent = letra;
    }
}



