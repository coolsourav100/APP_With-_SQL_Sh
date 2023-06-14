const Sequlize = require('sequelize');
const sequelize = require('../util/database')

const User = sequelize.define('user',{
    id:{
        type:Sequlize.INTEGER ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:Sequlize.STRING ,
    email:Sequlize.STRING
})

module.exports = User