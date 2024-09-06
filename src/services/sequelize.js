const { Sequelize } = require('sequelize');
const { dbConfig } = require('../config/dotenv');

const { Student, Referer } = require('../models/index');

const {
  host, user, database, password, port, dialect,
} = dbConfig;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect,
});

// initialize models
Student.initialize(sequelize);
Referer.initialize(sequelize);

// associate models

module.exports = {
  Sequelize,
  sequelize,
  Student,
};
