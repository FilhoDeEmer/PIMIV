import {sequelize} from './database.js';
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
});

export default Funcionario;