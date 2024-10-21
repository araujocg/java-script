const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste'/* Nome do Banco de dados*/, 'root', 'Drakie1amantedemusicas',{
    host: "localhost",
    dialect: "mysql"
});

// sequelize.authenticate()
//     .then(function(){
//         console.log("Conectado com sucesso!");
//     })
//     .catch(function(err){
//         console.log(`Erro ao se conectar: ${err}`);
//     })

const Posts = sequelize.define('posts',{
    title: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT
    }
})

// Posts.create({
//     title: "CORALINE",
//     content: "terror, suspense, stop Motion"    only create
// })

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    surName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

User.create({
    name: "Guilherme",
    surName: "Araújo Magalhães",
    age: 19,
    email: "Draki.araujo@gmail.com"
})

// User.sync({force:true}); create a table