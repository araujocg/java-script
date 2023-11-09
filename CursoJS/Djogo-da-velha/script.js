let divQuadrado = [];
let squareAlreadyClicked = [];
let vez = 0;
let vezX = document.getElementById('vez_X');
let vezO = document.getElementById('vez_O');

for (let i=1; i <= 9 ; i++){
    divQuadrado.push(document.getElementById(`quadrado0${i}`));
}

function alreadyClicked(pos){
    return squareAlreadyClicked.includes(pos);
}

function game(pos){
    if(!alreadyClicked(pos)){
        squareAlreadyClicked.push(pos);
        if (vez % 2 == 0){
            divQuadrado[pos - 1].textContent = "X";
            divQuadrado[pos - 1].style.color = "var(--color01)";
            vezX.style.backgroundColor = "var(--color02)";
            vezX.style.color = "var(--color01)";
            vezO.style.backgroundColor = "var(--color01)";
            vezO.style.color = "var(--color02)";
        } else {
            divQuadrado[pos - 1].textContent = "O"; 
            divQuadrado[pos - 1].style.color = "var(--color01)";
            vezX.style.backgroundColor = "var(--color01)";
            vezX.style.color = "var(--color02)";
            vezO.style.backgroundColor = "var(--color02)";
            vezO.style.color = "var(--color01)";
        }
        vez++;
    }
}

function trocaCorX(pos){
    divQuadrado[pos - 1].textContent = "X";
    divQuadrado[pos - 1].style.color = "var(--color01)";
    vezX.style.backgroundColor = "var(--color02)";
    vezX.style.color = "var(--color01)";
    vezO.style.backgroundColor = "var(--color01)";
    vezO.style.color = "var(--color02)";
}