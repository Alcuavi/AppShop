const Sequelize = require('sequelize');
const Connect = require('../config/sequelizeConfig').getConnection();

const User = Connect.define('users', {
        id: {
            type: Sequelize.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
        },
        user: {
            type: Sequelize.STRING(45)
        },
        pass: {
            type: Sequelize.STRING(256)
        }
});


module.exports = User;