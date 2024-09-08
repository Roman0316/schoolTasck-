const { Router } = require('express');

const wrap = require('../utils/wrap');
const { paymentController } = require('../controllers/index');
// const { validateRequest } = require('../middlewares/index');

const paymentRouter = Router();

paymentRouter.post(
  '/',
  wrap(async (req, res) => {
    const payment = await paymentController.loginStudent(req.body);
    res.json(payment);
  }),
);

paymentRouter.get(
  '/:numberOfPayment',
  wrap(async (req, res) => {
    const paytment = await paymentController.getPaymentInform(req.params);
    res.json(paytment);
  }),
);

module.exports = paymentRouter;
