// Limpar esse codigo
let dSquare = [];
let squareAlreadyClicked = [];
let vez = 0;
let gamePaused = false;
let vX = 0;
let vO = 0;
let victoryX = document.getElementById('victory-X')
let victoryO = document.getElementById('victory-O')
let vezX = document.getElementById('vez_X');
let vezO = document.getElementById('vez_O');

for (let i=1; i <= 9 ; i++){
    dSquare.push(document.getElementById(`quadrado0${i}`));
}

function game(pos){
    if(!gamePaused){
        if(!alreadyClicked(pos)){
            squareAlreadyClicked.push(pos);
            if (vez % 2 == 0){
                trocaCor(pos, "X");
                checkVictory("X");
            } else {
                trocaCor(pos, "O");
                checkVictory("O");  
            }
            vez++;
            checkVelha();
            console.log(squareAlreadyClicked)
        }
    }
}

function checkVictory(letter){
    for (let i = 0; i < 3; i++) {
        if (
            dSquare[i * 3].textContent === letter && dSquare[i * 3 + 1].textContent === letter && dSquare[i * 3 + 2].textContent === letter
        ) {
            victory(letter);
            return;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (
            dSquare[i].textContent === letter && dSquare[i + 3].textContent === letter && dSquare[i + 6].textContent === letter
        ) {
            victory(letter);
            return;
        }
    }

    if (
        (dSquare[0].textContent === letter && dSquare[4].textContent === letter && dSquare[8].textContent === letter) ||
        (dSquare[2].textContent === letter && dSquare[4].textContent === letter && dSquare[6].textContent === letter)
    ){
        victory(letter);
        return;
    }

    function victory(letter){
        if(letter == "X"){
            vX++;
            victoryX.textContent = vX;
        } else{
            vO++;
            victoryO.textContent = vO;
        }
        resetGame()
    }
}

function checkVelha(){
    if(squareAlreadyClicked.length == 9){
        resetGame()
    }
}

function resetGame() {
    gamePaused = true;
    setTimeout(()=>{
        squareAlreadyClicked = [];
        vez = 0;
        for (let i = 0; i < 9; i++) {
            dSquare[i].textContent = '';
        }
        //victory[letter]++;
        gamePaused = false;
    },1000)
};

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
