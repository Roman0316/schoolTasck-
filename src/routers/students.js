const { Router } = require('express');

const wrap = require('../utils/wrap');
const { studentController } = require('../controllers/index');
// const { validateRequest } = require('../middlewares/index');

const studentRouter = Router();

studentRouter.post(
  '/students',
  wrap(async (req, res) => {
    const students = await studentController.getStudentsList(req.query);
    res.json(students);
  }),
);

module.exports = studentRouter;
