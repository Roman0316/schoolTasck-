const { Router } = require('express');

const wrap = require('../utils/wrap');
const { studentController } = require('../controllers/index');
const { validateRequest } = require('../middlewares/index');
const { studentRequest } = require('../requests/student/index');

const studentRouter = Router();

studentRouter.get(
  '/students',
  validateRequest(studentRequest),
  wrap(async (req, res) => {
    const students = await studentController.getStudentsList(req.query);
    res.json(students);
  }),
);

module.exports = studentRouter;
