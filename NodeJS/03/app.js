const http = require('http');

http.createServer(function(req, res){
    res.end("Olá usuario");
}).listen(8081);

console.log("Servidor foi criado");