//email - store string null=false
// password store string null = false
const sequelize = require('sequelize');
const database = require('../db')

module.exports = (sequelize, DataTypes) => {


    const User = sequelize.define('user', {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return User;

}