const { Student } = require('../services/sequelize');

async function getStudentsList({ orderBy, typeOfSort }) {
  const { count, rows: students } = await Student.findAndCountAll({
    attributes: {
      exclude: ['password'],
    },
    order: [
      ['createdAt', 'ASC'],
      [orderBy, typeOfSort]],

  });
  return { count, students };
}

module.exports = {
  getStudentsList,
};
