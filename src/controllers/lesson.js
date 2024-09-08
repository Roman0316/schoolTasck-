const { BadRequest } = require('http-errors');

const ErrorMessages = require('../constants/ErrorMessages');
const { Lesson } = require('../services/sequelize');

async function createLesson({ title, description, date }) {
  const lesson = await Lesson.findOne({ where: { title, date } });
  if (lesson) throw new BadRequest(ErrorMessages.lesson_alredy_exists);
  return Lesson.create({
    title,
    description,
    date,
  });
}

async function getLessonsList() {
  return Lesson.findAndCountAll();
}

module.exports = {
  createLesson,
  getLessonsList,
};
