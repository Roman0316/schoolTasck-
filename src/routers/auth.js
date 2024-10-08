const { Router } = require('express');

const path = require('path');
const wrap = require('../utils/wrap');
const { authController } = require('../controllers/index');
const { authMiddleware, validateRequest } = require('../middlewares/index');
const { loginRequest, registerRequest } = require('../requests/auth/index');

const authRouter = Router();

authRouter.post(
  '/login',
  validateRequest(loginRequest),
  wrap(async (req, res) => {
    const accessToken = await authController.loginStudent(req.body);
    res.json({ accessToken });
  }),
);

authRouter.post(
  '/invite',
  authMiddleware,
  wrap(async (req, res) => {
    const inviteHref = await authController.createInviteLink(req.user);
    res.json(inviteHref);
  }),
);

authRouter.get(
  '/register',
  wrap(async (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
  }),
);

authRouter.post(
  '/register',
  validateRequest(registerRequest),
  wrap(async (req, res) => {
    await authController.registerStudent(req.body);
    res.status(200).end();
  }),
);

module.exports = authRouter;
