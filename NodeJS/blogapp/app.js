const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");

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
    app.get('/', (req, res) => {
        res.send('Home Page!');
    });
    app.get('/posts', (req, res) => {
        res.send('Posts list');
    });

// Others   

    const PORT = 8081;
    app.listen(PORT, () => {
        console.log("Server running");
    });
