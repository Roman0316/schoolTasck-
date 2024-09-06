const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { authRouter } = require('./routers/index');
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

app.use(ErrorHandler);

module.exports = app;
