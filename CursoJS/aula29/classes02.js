
class Dev {
    constructor(nome, idade, principalLinguagem, typeOfDev) {
        this.nome = nome
        this.idade = idade
        this.principalLinguagem = principalLinguagem
        this.typeOfDev = typeOfDev
    }
    saudacao() {
        console.log(`Sou Dev ${this.typeOfDev}, tenho ${this.idade} anos, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}  `)
    }
}


class FrontEndDev extends Dev {
    constructor(nome, idade, principalLinguagem, typeOfDev, framework) {
        super(nome, idade, principalLinguagem, typeOfDev, framework)
        this.typeOfDev = 'FrontEnd'
    }
}

class BackEndDev extends Dev {
    constructor(nome, idade, principalLinguagem, typeOfDev, bancoDeDados) {
        super(nome, idade, principalLinguagem, typeOfDev, bancoDeDados)
        this.typeOfDev = 'BackEnd'
    }
}

const frontend1 = new FrontEndDev('Mario', 34, 'JavaScript', 'React')
const backend1 = new BackEndDev('Oliver', 45, 'C#', 'SQL Server')


console.log(frontend1)
frontend1.saudacao()

console.log(backend1)
backend1.saudacao()

/*
const Dev = function(nome, idade, principalLinguagem, typeOfDev){
    this.nome = nome
    this.idade = idade
    this.principalLinguagem = principalLinguagem
    this.typeOfDev = typeOfDev
    this.saudacao = function() {
        console.log(`Sou Dev ${this.typeOfDev}, tenho ${this.idade} anos, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}  `)
    }   
}


const FrontEndDev = function(nome, idade, principalLinguagem, typeOfDev, framework){
    const newDev = new Dev(nome, idade, principalLinguagem, typeOfDev, 'FrontEnd')
    newDev.framework = framework
    Object.setPrototypeOf(this, newDev)
}

const BackEndDev = function(nome, idade, principalLinguagem, typeOfDev, bancoDeDados){
    const newDev = new Dev(nome, idade, principalLinguagem, typeOfDev, 'BackEnd')
    newDev.bancoDeDados = bancoDeDados
    Object.setPrototypeOf(this, newDev)
}

const frontend1 = new FrontEndDev('Maria', 34, 'JavaScript', 'FrontEnd', 'React')
const backend1 = new BackEndDev('Oliver', 45, 'C#', 'BackEnd', 'SQL Server')


console.log(frontend1)
frontend1.saudacao()

console.log(backend1)
backend1.saudacao()
*/

// campos e membros privados

class Pessoa{
    #primeiroNome = "Gabriel";
    #sobreNome = "Jesus";
    get nome(){
        return `${this.#primeiroNome} ${this.#sobreNome}`;
    }
}
const pessoa = new Pessoa();
console.log(pessoa.nome);
//console.log(pessoa.#primeiroNome); ERRO por n ser acessivel fora da classe Pessoa
//console.log(pessoa.#sobreNome); ERRO 

