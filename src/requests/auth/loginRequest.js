const { body } = require('express-validator');

const loginRequest = [
  body('email').exists().trim().isEmail(),
  body('password').exists().isString().trim(),
  body('role').exists().isString().trim()
    .withMessage('Wrong user role'),
];

module.exports = loginRequest;
