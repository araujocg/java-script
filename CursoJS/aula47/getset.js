const obj1 = {
    listaString: ["Inscreva-se", "Ative o sino", "Brazilian Dev"],
    get primeiraString(){ 
        return this.listaString.length? this.listaString[0] : null;
    },
    set primeiraString(item) { // só é usado quando vc tenta mudar o valor dentro dele como a linha: obj1.primeiraString = "Deixa um like";
        this.listaString.unshift(item);
    }
};
console.log(obj1.primeiraString); // Inscreva-se
delete obj1.primeiraString;
obj1.primeiraString = "Deixa um like";
console.log(obj1.primeiraString); // Deixa um like

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
console.log(obj2.prop); // 2
obj2.prop = 5;
console.log(obj2.prop); // 5

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
console.log(obj.computada); // abc
obj.computada = "xyz";
console.log(obj.computada); // xyz

//

class Usuario {
    #primeiroNome = "Brazilian";
    #segundoNome = "Dev";

    get nomeCompleto(){
        return `${this.#primeiroNome} ${this.#segundoNome}`
    }
    set nomeCompleto(value){
        [this.#primeiroNome, this.#segundoNome] = value.split(" ");
    }
}

const usuario = new Usuario();
console.log(usuario.nomeCompleto); // Brazilian Dev
usuario.nomeCompleto = "joão", "Almeida";
console.log(usuario.nomeCompleto); // joão Almeida

//

class ClasseStringTeste {
    static #strInterna = "uma string teste";
    static get str(){
        return this.#strInterna;
    }
    static set str(value){
        this.#strInterna = value;
    }
}

console.log(ClasseStringTeste.str); // uma string teste
ClasseStringTeste.str = "teste de string";
console.log(ClasseStringTeste.str); // teste de string