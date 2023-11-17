let resultado;

function ehMaiorComCurrying(a){
    let result = false;
    return function ehMaiorComCurrying2(b){
        if(!b){
            return result;
        }
        result = a > b;
        a = b;
        return ehMaiorComCurrying2;
    }
}

resultado = ehMaiorComCurrying(2)(5)(1)();
console.log(resultado);