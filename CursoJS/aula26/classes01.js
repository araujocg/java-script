// Classes não são hoisted ou seja classes n são jogadas pra cima do codigo quando ele é carregado, então a gente n consegue chamar um classes sem antes ter passado
class Jogo {
    nome = "Minecraft";
    color = "green"
}
const jogo = new Jogo()
console.log(jogo)

//

class Carro {
    constructor(nome, ano){
        this.nome = nome
        this.ano = ano
    }
}

const carro1 = new Carro("Audi", 2020)
const carro2 = new Carro("Ferrari", 2010)

console.log(carro1, carro2)

//

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas 
    }
    anunciar(){
        console.log(`A alura indica o livro ${this.nome} da editora ${this.editora}, com um total de ${this.paginas} paginas !`)
    }
}
livro1 = new Livro('Harry poter', 'Youtube', 100)
livro1.anunciar()