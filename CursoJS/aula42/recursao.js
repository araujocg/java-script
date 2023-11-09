function somaRecursiva(n){
    if( n == 1 ){
        return 1;
    }
    return somaRecursiva(n-1);
}
console.log(somaRecursiva(5))

