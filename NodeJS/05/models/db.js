const Sequelize = require('sequelize');

// Connection with database MySql
const sequelize = new Sequelize('teste', 'root', 'Drakie1amantedemusicas',{
    host: "localhost",
    dialect: "mysql"
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}