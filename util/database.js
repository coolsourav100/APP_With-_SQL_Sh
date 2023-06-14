const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'sourav1234#', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
