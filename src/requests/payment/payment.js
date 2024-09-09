const { body } = require('express-validator');

const paymentRequest = [
  body('numberOfPaytment').isString().trim(),
  body('amount').isString().trim(),
  body('currency').isString().trim(),
  body('paymentMethod').isString().trim(),
];

module.exports = paymentRequest;
