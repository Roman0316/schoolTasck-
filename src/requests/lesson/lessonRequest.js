const { body } = require('express-validator');

const lessonRequest = [
  body('title').isString().trim(),
  body('description').isString().trim(),
];

module.exports = lessonRequest;
