const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


// config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Connection with database MySql
    const sequelize = new Sequelize('teste'/* Nome do Banco de dados*/, 'root', 'Drakie1amantedemusicas',{
        host: "localhost",
        dialect: "mysql"
    });

// Routes
    app.get('/cad', function(req,res){
        res.render('form')
    })

app.listen(8081, function(){
    console.log("Servidor Rodando!");
});