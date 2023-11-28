const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const sequelize = new Sequelize('HERMES', 'sa', '123456789', {
    host: 'localhost',
    dialect: 'mssql'
})
module.exports = { sequelize };