const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")

const app = express();

// HandleBars
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }));
    app.set('view engine', 'handlebars');
// bodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
// Routes
    app.get('/', (req,res) => {
        res.render('home')
    })
// Others
    const PORT = 8081;
    app.listen(PORT, ()=>{
        console.log("Server running");
    });
