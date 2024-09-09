const { BadRequest } = require('http-errors');

const ErrorMessages = require('../constants/ErrorMessages');
const { Lesson, StudLesson, RefLesson } = require('../services/sequelize');

async function createLesson({ id, role }, { title, description, date }) {
  const result = await Lesson.findOne({ where: { title, date } });
  if (result) throw new BadRequest(ErrorMessages.lesson_alredy_exists);
  const lesson = await Lesson.create({
    title,
    description,
    date,
  });
  if (role === 'referer') {
    await RefLesson.create({
      refererId: id,
      lessonId: lesson.id,
    });
  } else {
    await StudLesson.create({
      studentId: id,
      lessonId: lesson.id,
    });
  }
  return lesson;
}

async function getLessonsList() {
  const { count, rows: lessons } = await Lesson.findAndCountAll();
  return { count, lessons };
}

module.exports = {
  createLesson,
  getLessonsList,
};
