const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


// config
    // Template Engine
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine', 'handlebars');

    //body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
// Routes
    app.get('/form', function(req,res){
        res.render('form');
    });
    app.get('/', function(req,res){
        Post.findAll({order: [['id','DESC']]}).then((posts)=>{
            res.render('home', {posts: posts});
        })
    })
    app.post('/add', function(req,res){
        // res.send("Form has been sent");
        // res.send(`${req.body.title}`);
        Post.create({
            title: req.body.title,
            content: req.body.content 
        }).then(() => {
            res.redirect('/');
        }).catch(err => {
            res.send(`error on sent: ${err}`);
        })
    });
    app.get('/delete/:id', function(req,res){
        Post.destroy({
            where:{'id': req.params.id}
        }).then(()=>{
            console.log
        })
    })

app.listen(8081, function(){
    console.log("Servidor Rodando!");
});