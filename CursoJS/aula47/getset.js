const obj1 = {
    listaString: ["Inscreva-se", "Ative o sino", "Brazilian Dev"],
    get primeiraString(){ 
        return this.listaString.length? this.listaString[0] : null;
    },
    set primeiraString(item) { // só é usado quando vc tenta mudar o valor dentro dele como a linha: obj1.primeiraString = "Deixa um like";
        this.listaString.unshift(item);
    }
};
console.log(obj1.primeiraString);
delete obj1.primeiraString;
obj1.primeiraString = "Deixa um like";
console.log(obj1.primeiraString);

//

const obj2 = {a: 2};

Object.defineProperty(obj2, "prop", {
    get (){
        return this.a;
    },
    set(x){
        this.a = x;
    }
});
console.log(obj2.prop);
obj2.prop = 5;
console.log(obj2.prop);

//

const str = "computada";

const obj = {
    a:"abc",
    get [str](){
        return this.a;
    },
    set [str](novoValor){
        this.a = novoValor;
    }
}
console.log(obj.computada);
obj.computada = "xyz";
console.log(obj.computada);