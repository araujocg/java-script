const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Problema do GET resolvido!")
});

app.get("/sobre", function (req, res) {
    res.send("Minha página Sobre");
});

app.get("/blog", function (req, res) {
    res.send("Minha página blog")
})

app.listen(8081, function () {
    console.log("Servidor rodando normalmente!")
}); // sempre a ultima linha de código