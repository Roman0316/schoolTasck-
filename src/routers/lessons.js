const { Router } = require('express');

const wrap = require('../utils/wrap');
const { lessonController } = require('../controllers/index');
// const { validateRequest } = require('../middlewares/index');

const lessonRouter = Router();

lessonRouter.post(
  '/',
  wrap(async (req, res) => {
    const lesson = await lessonController.createLesson(req.body);
    res.json(lesson);
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
