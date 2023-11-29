const sequelize = require('./database.js').sequelize
const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const Usuario = sequelize.define('Usuario', {
    cod_usuario: { type: DataTypes.INTEGER, primaryKey: true },

    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senhahash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});


Usuario.prototype.validPassword = async function (password) {
    var result = bcrypt.compareSync(password, this.senhahash);
    console.log(`bcrypt: ${result}`);
    return result;
};


module.exports = { Usuario };