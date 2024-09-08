const { Student } = require('../services/sequelize');

async function getStudentsList({ orderBy, typeOfSort }) {
  const { count, rows: users } = await Student.findAndCountAll({
    attributes: {
      exclude: ['password'],
    },
    order: [
      ['createdAt', 'ASC'],
      [orderBy, typeOfSort]],

  });
  return { count, users };
}

module.exports = {
  getStudentsList,
};
