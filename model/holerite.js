const sequelize = require('./database.js').sequelize
const { DataTypes } = require('sequelize');
const { Funcionario } = require('./funcionario.js');
const Holerite = sequelize.define('Holerite', {
    COD_FOLHA: { type: DataTypes.INTEGER, primaryKey: true },
    COD_FUNCIONARIO: { type: DataTypes.INTEGER, references: {
        model: Funcionario,
        key: 'codigo_funcionario'
    } },
    VALORPROVENTOS: {
        type: DataTypes.TEXT,
    },
    VALORDESCONTOS: {
        type: DataTypes.TEXT,
    },
    VALORLIQUIDO: {
        type: DataTypes.TEXT,
    },
    FAIXAIRRF: {
        type: DataTypes.TEXT,
    },
    FGTSMES: {
        type: DataTypes.TEXT,
    },
    MENSAGEM: {
        type: DataTypes.TEXT,
    },


}, { timestamps: false, tableName: 'Holerite' });

module.exports = { Holerite };