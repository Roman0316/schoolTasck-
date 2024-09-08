const authRouter = require('./auth');
const paymentRouter = require('./payments');
const studentRouter = require('./students');
const lessonRouter = require('./lessons');

module.exports = {
  authRouter,
  paymentRouter,
  studentRouter,
  lessonRouter,
};
