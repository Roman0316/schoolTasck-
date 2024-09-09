const { Router } = require('express');

const wrap = require('../utils/wrap');
const { lessonController } = require('../controllers/index');
const { validateRequest } = require('../middlewares/index');
const { lessonRequest } = require('../requests/lesson/index');

const lessonRouter = Router();

lessonRouter.post(
  '/',
  validateRequest(lessonRequest),
  wrap(async (req, res) => {
    await lessonController.createLesson(req.user, req.body);
    res.status(200).end();
  }),
);

lessonRouter.get(
  '/',
  wrap(async (req, res) => {
    const lessonsList = await lessonController.getLessonsList();
    res.json(lessonsList);
  }),
);

module.exports = lessonRouter;
