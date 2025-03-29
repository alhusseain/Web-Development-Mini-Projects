const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres', 'postgres', 'user', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize;