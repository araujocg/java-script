const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const user = require("./routes/user");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
require("./models/post");
require("./models/category");

const Category = mongoose.model('category');
const Post = mongoose.model('post');

const app = express();

// Config
// Session

    app.use(session({
        secret: "NODEJS",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash());

// MiddleWare

    app.use((req,res,next)=>{
        res.locals.success_msg = req.flash("success_msg");
        res.locals_error_msg = req.flash("error_msg");
        next()
    })

// HandleBars

    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        helpers: {
            eq: function (a, b) {
                return String(a) === String(b);
            }
        },
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }));
    app.set('view engine', 'handlebars');

// Mongoose

    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/blogapp").then(() => {
        console.log("Connect!");
    }).catch((err) => {
        console.log("ERRO on app.js 47: " + err);
    })

// bodyParser

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

//  Public
    app.use(express.static(path.join(__dirname, "public")));

    app.use((req,res,next) => {
        console.log("MiddleWare!");
        next();
    })

// Routes

    app.use("/admin", admin);
    app.use("/user", user);

    app.get('/', (req, res) => {
        Post.find().populate("category").sort({data: "desc"}).then((posts) => {
            res.render("index", {posts: posts});
        })
        .catch((err) => {
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/404");
        })
    });

    app.get('/categories', (req,res) => {
        Category.find().sort({data: "desc"}).then((categories) =>{
            res.render("categories/index", {categories: categories});
        })
        .catch((err) => {
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/404");
        })
    })

    app.get('/post/:slug', (req, res) =>{
        Post.findOne({slug: req.params.slug}).populate("category").then((post) =>{
            if(post){
                res.render("post/index", {post: post})
            } else{
                req.flash("error_msg", "Está postagem não existe");
                res.redirect("/");
            }
        }).catch((err) =>{
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/404");
        })
    })

    app.get('/categories/:slug', (req,res) =>{
        Category.findOne({slug: req.params.slug}).then((category) =>{
            Post.find({category: category._id}).then((posts) =>{
                res.render("categories/posts", {posts: posts, category: category});
            })
        }).catch((err) =>{
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/404");
        })
    })

    app.get('/404', (req,res) => {
        res.send("Erro 404!")
    });

    app.get('/posts', (req, res) => {
        res.send('Posts list');
    });

// Others   

    const PORT = 8081;
    app.listen(PORT, () => {
        console.log("Server running");
    });
