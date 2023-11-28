const sequelize = require('./database.js').sequelize
const { DataTypes } = require('sequelize');
const Holerite = sequelize.define('Holerite', {
    COD_FOLHA: { type: DataTypes.INTEGER, primaryKey: true },
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


}, { timestamps: false });

module.exports = { Holerite };