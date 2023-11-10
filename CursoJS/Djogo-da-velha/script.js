// Resolver o problema q deixa clicar nos quadrados dps q o jogo ja era pra ter acabado
let dSquare = [];
let squareAlreadyClicked = [];
let vez = 0;
let vezX = document.getElementById('vez_X');
let vezO = document.getElementById('vez_O');
let conter = document.getElementById('container_principal')

for (let i=1; i <= 9 ; i++){
    dSquare.push(document.getElementById(`quadrado0${i}`));
}

function game(pos){
    if(!alreadyClicked(pos)){
        squareAlreadyClicked.push(pos);
        if (vez % 2 == 0){
            trocaCor(pos, "X")
            console.log(dSquare.length)
            checkVictory("X")
        } else {
            trocaCor(pos, "O")
            checkVictory("O")
        }
        vez++;
    }
}

function checkVictory(letter){
    for (let i = 0; i < 3; i++) {
        if (
            dSquare[i * 3].textContent === letter &&
            dSquare[i * 3 + 1].textContent === letter &&
            dSquare[i * 3 + 2].textContent === letter
        ) {
            resetGame();
            return;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (
            dSquare[i].textContent === letter &&
            dSquare[i + 3].textContent === letter &&
            dSquare[i + 6].textContent === letter
        ) {
            resetGame();
            return;
        }
    }

    if (
        (dSquare[0].textContent === letter &&
            dSquare[4].textContent === letter &&
            dSquare[8].textContent === letter) ||
        (dSquare[2].textContent === letter &&
            dSquare[4].textContent === letter &&
            dSquare[6].textContent === letter)
    ) {
        resetGame();
        return;
    }

    function resetGame() {
        let dSquare = [];
        setTimeout(()=>{
            for (let i=1; i <= 9 ; i++){
                dSquare.push(document.getElementById(`quadrado0${i}`));
            }
            squareAlreadyClicked = [];
            vez = 0;
            for (let i = 0; i < 9; i++) {
                dSquare[i].textContent = '';
            }
        },1000)
    }
}

function alreadyClicked(pos){
    return squareAlreadyClicked.includes(pos);
}

function trocaCor(pos, letter){
    if(letter === "X"){
        dSquare[pos - 1].textContent = "X";
        dSquare[pos - 1].style.color = "var(--color01)";
        vezX.style.backgroundColor = "var(--color02)";
        vezX.style.color = "var(--color01)";
        vezO.style.backgroundColor = "var(--color01)";
        vezO.style.color = "var(--color02)";
    } else{
        dSquare[pos - 1].textContent = "O"; 
        dSquare[pos - 1].style.color = "var(--color01)";
        vezX.style.backgroundColor = "var(--color01)";
        vezX.style.color = "var(--color02)";
        vezO.style.backgroundColor = "var(--color02)";
        vezO.style.color = "var(--color01)";
    }
    
}
