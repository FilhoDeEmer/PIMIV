const sequelize = require('./database.js').sequelize
const { DataTypes } = require('sequelize');
const Empresa = require('./empresa.js').Empresa
const Funcionario = sequelize.define('Funcionario', {
    codigo_funcionario: { type: DataTypes.INTEGER, primaryKey: true },
    codigo_empresa: {
        type: DataTypes.INTEGER, references: {
            model: Empresa,

            key: 'codigo_empresa',
        }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },


    rua: {
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    numero: {
        type: DataTypes.INTEGER,
    },
    cidade: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.INTEGER,
    },



}, { timestamps: false });



module.exports = { Funcionario };