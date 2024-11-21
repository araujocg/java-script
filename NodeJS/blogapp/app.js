const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// Config
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
        console.log("ERRO: " + err);
    })

// bodyParser

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

//  Public
    app.use(express.static(path.join(__dirname, "public")));

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
