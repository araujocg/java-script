function init01(){
    const nome="Uma string";
    function mostrarNome01(){
        console.log(nome);
    }
    mostrarNome01();
}

init01();

//

function init02(){
    const nome="Uma string";
    function mostrarNome02(){
        console.log(nome);
    }
    return mostrarNome02();
}

init02();

//

function criarContadora(){
    let contador = 0;
    return function(){
        contador++;
        console.log(contador);
    }
}
let contadora = criarContadora()
contadora(); // 1
contadora(); // 2

//

function soma(num1){
    return (num2) =>{
        if(!num2){
            return num1;
        }
        return soma(num1 + num2);
    }
}
console.log(soma(2)(3)(5)(10)(4)(-1)());



