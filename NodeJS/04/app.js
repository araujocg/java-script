const express = require("express");
const app = express();

app.get("/", function (req, res) {
    // res.send("Problema do GET resolvido!")
    
    res.sendFile(__dirname + "/html/index.html") // __dirname é a rota para o diretorio da aplicação no caso essa sendo o 04
    // sendfile serve para mandar um arquivo
});

app.get("/sobre", function (req, res) {
    // res.send("Minha página Sobre"); // send SÓ PODE ser enviado uma unica vez dentro da sua função de rota
    // res.send("Essa mensagem não vai chegar a aparecer");

    res.sendFile(`${__dirname}/html/sobre.html`)
});

app.get("/blog", function (req, res) {
    res.send("Minha página blog");
})

app.get("/ola/:nome/:cor", function(req,res){ // Quando colocar um parametro é obrigatório passá-lo 
    res.send(`<h1>Olá ${req.params.nome}, Seja Bem Vindo! </h1> <h2 style="color:blue">Sua cor favorita é ${req.params.cor}</h2>`);
})

app.listen(3000, '0.0.0.0', () => { // sempre a ultima linha de código
    console.log("Servidor rodando normalmente!");
}); 