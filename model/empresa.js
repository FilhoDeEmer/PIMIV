const sequelize = require('./database.js').sequelize
const { DataTypes } = require('sequelize');
const Empresa = sequelize.define('Empresa', {
    codigo_empresa: { type: DataTypes.INTEGER, primaryKey: true },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },



    
}, {timestamps: false});



module.exports = {Empresa};