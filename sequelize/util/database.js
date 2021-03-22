const Sequelize = require('sequelize');

const sequelize = new Sequelize('online_shop', 'root', 'cybage@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
