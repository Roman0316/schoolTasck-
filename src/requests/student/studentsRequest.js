const { query } = require('express-validator');

const studentsRequest = [
  query('orderBy').isString().trim(),
  query('typeOfSort').default('ASC')
    .isString()
    .trim()
    .isLength({ min: 3, max: 255 })
    .withMessage('The type of sort cannot be less than 3 and more than 255 characters'),
];

module.exports = studentsRequest;
