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
const contadora = criarContadora();
contadora();


