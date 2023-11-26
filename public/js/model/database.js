const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('HERMES', 'sa', '123456789', {
    host: 'localhost',
    dialect: 'mssql'
})
export default Sequelize;