function somaRecursiva(n){
    if( n == 1 ){
        return 1;
    }
    return somaRecursiva(n-1);
}
console.log(somaRecursiva(5));

//

function timeout(numero){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(numero),1000)
    })
}

async function contagemRegressiva(numero){
    if(numero<=0){
        return console.log('Feliz ano Novo!!'), parar();
    } 
    console.log(await timeout(numero));
    return contagemRegressiva(--numero);
}

contagemRegressiva(10);

//

function fatorial(n){
    if(n===1){
        return 1;
    }
    return n*fatorial(n-1);
}
console.log(fatorial(5));


