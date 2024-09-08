const { BadRequest } = require('http-errors');

const { Payment } = require('../services/sequelize');
const ErrorMessages = require('../constants/ErrorMessages');

async function createPaymentInform({
  numberOfPayment, amount, currency, paymentMethod,
}) {
  const payment = await Payment.findOne({ where: { numberOfPayment } });
  if (payment) throw new BadRequest(ErrorMessages.payment_already_exists);
  return Payment.create({
    numberOfPayment,
    amount,
    currency,
    paymentMethod,
    status: 'pay',
  });
}

async function getPaymentInform({ numberOfPayment }) {
  return Payment.findAll({ where: { numberOfPayment } });
}

module.exports = {
  createPaymentInform,
  getPaymentInform,
};
