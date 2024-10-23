const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');


// config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

    // Connection with database MySql
        const sequelize = new Sequelize('teste', 'root', 'Drakie1amantedemusicas',{
            host: "localhost",
            dialect: "mysql"
        });

        const Posts = sequelize.define('posts',{
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.TEXT
            }
        })

// Routes
    app.get('/form', function(req,res){
        res.render('form');
    });
    app.post('/add', function(req,res){
        // res.send("Form has been sent");
        // res.send(`${req.body.title}`);
        Posts.create({
            title: req.body.title,
            content: req.body.content 
        })
    });

app.listen(8081, function(){
    console.log("Servidor Rodando!");
});