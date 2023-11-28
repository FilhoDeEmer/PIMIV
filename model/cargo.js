const sequelize = require('./database.js').sequelize
const { DataTypes } = require('sequelize');
/* const Empresa = require('./empresa.js').Empresa */
const Cargo = sequelize.define('Cargo', {
    codigo_cargo: { type: DataTypes.INTEGER, primaryKey: true },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}, { timestamps: false });

module.exports = { Cargo };