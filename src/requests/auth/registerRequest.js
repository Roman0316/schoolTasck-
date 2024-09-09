const { body } = require('express-validator');

const passwordSchema = require('./passwordSchema');

const registerRequest = [
  body('firstName').exists().isString().isLength({ min: 1, max: 255 })
    .withMessage('The first name cannot be less than 1 and more than 255 characters')
    .trim(),
  body('lastName').exists().isString().isLength({ min: 1, max: 255 })
    .withMessage('The last name cannot be less than 1 and more than 255 characters')
    .trim(),
  body('surName').exists().isString().isLength({ min: 1, max: 255 })
    .withMessage('The sur name cannot be less than 1 and more than 255 characters')
    .trim(),
  body('telephone').exists().isString().isLength({ min: 1, max: 255 })
    .withMessage('The telephone cannot be less than 1 and more than 255 characters')
    .trim(),
  body('email').exists().trim().isEmail()
    .withMessage('Wrong email'),
  body('password').exists().trim(),
  passwordSchema,
];

module.exports = registerRequest;
