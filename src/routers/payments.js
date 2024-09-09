const { Router } = require('express');

const wrap = require('../utils/wrap');
const { paymentController } = require('../controllers/index');
const { validateRequest } = require('../middlewares/index');
const { paymentRequest } = require('../requests/payment/index');

const paymentRouter = Router();

paymentRouter.post(
  '/',
  validateRequest(paymentRequest),
  wrap(async (req, res) => {
    await paymentController.createPaymentInform(req.body);
    res.status(200).end();
  }),
);

paymentRouter.get(
  '/:numberOfPaytment',
  wrap(async (req, res) => {
    const paytment = await paymentController.getPaymentInform(req.params);
    res.json(paytment);
  }),
);

module.exports = paymentRouter;
