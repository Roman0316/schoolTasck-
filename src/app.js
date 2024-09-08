const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {
  authRouter, paymentRouter, studentRouter, lessonRouter,
} = require('./routers/index');
const { ErrorHandler, authMiddleware } = require('./middlewares/index');

const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({ status: 'Hello World!' });
});

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/auth', authRouter);
// app.use(authMiddleware);
app.use('/api/payment', paymentRouter);
app.use('/api/student', studentRouter);
app.use('/api/lesson', lessonRouter);

app.use(ErrorHandler);

module.exports = app;
