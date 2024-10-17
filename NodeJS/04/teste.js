const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Drakie1amantedemusicas',{
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(function(){
        console.log("Conectado com sucesso!");
    })
    .catch(function(err){
        console.log(`Erro ao se conectar: ${err}`);
    })