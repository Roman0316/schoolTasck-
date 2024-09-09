const { BadRequest } = require('http-errors');

const { Payment } = require('../services/sequelize');
const ErrorMessages = require('../constants/ErrorMessages');

async function createPaymentInform({
  numberOfPaytment, amount, currency, paymentMethod,
}) {
  const payment = await Payment.findOne({ where: { numberOfPaytment } });
  if (payment) throw new BadRequest(ErrorMessages.payment_already_exists);
  return Payment.create({
    numberOfPaytment,
    amount,
    currency,
    paymentMethod,
    status: 'pay',
  });
}

async function getPaymentInform({ numberOfPaytment }) {
  return Payment.findAll({ where: { numberOfPaytment } });
}

module.exports = {
  createPaymentInform,
  getPaymentInform,
};
