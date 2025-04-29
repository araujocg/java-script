const incluir = (arquivo)=> {
    try{
        arquivo.forEach(dado => {
            console.log(`Lido: ${dado.nome}`);
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = incluir;