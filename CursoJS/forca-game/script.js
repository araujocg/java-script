//Pegas as "respostas" de um banco de dados
const response = fetch('https://www.ime.usp.br/~pf/dicios/br-sem-acentos.txt')
console.log(response)

const resposta = [
    {nome:"gelar"},
    {nome:"matar"},
    {nome:"lunar"},
    {nome:"leite"}
]

let letterFound = new Set()
let letterAlreadyClicked = []
let divr = []
let divt = []
let erros = ''
let respostaSorteada = ''
let chamadaAgendada = false
let rodando = false
const imagemForca = document.getElementById('imagem-forca')

////////////////////////////////////
function iniciarJogo(){
    desistirJogo()
    chamadaAgendada = false
    const indiceAleatorio = Math.floor(Math.random() * resposta.length)
    respostaSorteada = resposta[indiceAleatorio]
    for (let i = 1; i <= respostaSorteada.nome.length; i++) {
        divr.push(document.getElementById(`letra_resposta0${i}`));
    }
    for (let i = 1; i <= 26; i++) {
        divt.push(document.getElementById(`letra_teclado${i}`));
    }
    rodando = true
}
function desistirJogo(){
    erros = 0
    imagemForca.style.backgroundImage = `url(imagens/imagem-forca0${erros}.png)`
    divr.forEach(div => div.textContent = '')
    divt.forEach(div => {div.style.color = '#000000', div.style.background = '#FFFFFF'})
    divr.length = 0
    divr.length = 0
    letterAlreadyClicked.length = 0
    rodando = false
}

//////////////////////////////////////

// função principal
function forcaFunction(letra){ 
    if (rodando){
        if (!alreadyClicked(letra)){
            letterAlreadyClicked.push(letra)
            if (check(letra)){
                atualizarDivrComLetras(respostaSorteada.nome, letra)
                atualizarDivtCORRETO(letra)
                verificarVitoria()
            } else{
                atualizarDivtERRO(letra) 
                if (erros<5){
                    erros++
                    imagemForca.style.backgroundImage = `url(imagens/imagem-forca0${erros}.png)`
                } else{
                    imagemForca.style.backgroundImage = `url(imagens/imagem-forca0${6}.png)`
                    rodando = false
                    setTimeout(() =>{
                        imagemForca.style.backgroundImage = `url(imagens/imagem-derrota.png)`
                        imagemForca.style.backgroundPosition = 'center center'
                    },1000)
                }
            }
        }
    }
}

/////////////////////////////////////////

function verificarVitoria() {
    if (letterFound.size === 5 && !chamadaAgendada) {
        letterFound.clear()
        rodando = false
        chamadaAgendada = true
        imagemForca.style.backgroundImage = `url(imagens/imagem-vitoria.png)`
        setTimeout(() =>{
            iniciarJogo()
        },3000)
        
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
        letterFound.add(posicao)
    }
}
function foundPositionLetter(palavra, letra) {
    const position = [];

    for (let p = 0; p < 5; p++) {
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
document.addEventListener('keydown', function(event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
        forcaFunction(event.key.toLowerCase())
    }
});



