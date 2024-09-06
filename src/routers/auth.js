const { Router } = require('express');

const path = require('path');
const wrap = require('../utils/wrap');
const { authController } = require('../controllers/index');
const { authMiddleware, validateRequest } = require('../middlewares/index');
// const { registrationRequest, loginRequest, changePasswordRequest } = require('../requests/auth/index');

const authRouter = Router();

authRouter.post(
  '/login',
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
  wrap(async (req, res) => {
    const user = await authController.registerStudent(req.body);
    res.json(user);
  }),
);

module.exports = authRouter;
