const { Sequelize } = require('sequelize');
const { dbConfig } = require('../config/dotenv');

const {
  Student, Referer, Payment, Lesson, StudLesson, RefLesson,
} = require('../models/index');

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
Payment.initialize(sequelize);
Lesson.initialize(sequelize);
StudLesson.initialize(sequelize);
RefLesson.initialize(sequelize);

// associate models
Student.associate(sequelize.models);
Lesson.associate(sequelize.models);
StudLesson.associate(sequelize.models);
RefLesson.associate(sequelize.models);

module.exports = {
  Sequelize,
  sequelize,
  Student,
  Referer,
  Payment,
  Lesson,
  StudLesson,
  RefLesson,
};
