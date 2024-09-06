const { v4: uuid } = require('uuid');

const { hashPassword, generateAccessToken } = require('../utils/authHelpers');
const { referer } = require('../config/dotenv');
const { userRoles } = require('../constants/index');

module.exports = {
  up: async (queryInterface) => {
    const {
      firstName, lastName, surName, email, telephone, password,
    } = referer;
    const hashedPassword = await hashPassword(password);
    await queryInterface.bulkInsert('referers', [
      {
        id: uuid(),
        firstName,
        lastName,
        surName,
        email,
        telephone,
        password: hashedPassword,
        role: userRoles.referer,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('referers', { email: referer.email });
  },
};
