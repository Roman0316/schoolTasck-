const { BadRequest, Unauthorized } = require('http-errors');

const { URL } = require('../config/dotenv');
const { Referer, Student } = require('../models/index');
const ErrorMessages = require('../constants/ErrorMessages');
const { hashPassword, comparePasswords, generateAccessToken } = require('../utils/authHelpers');

async function loginStudent({ email, password, role }) {
  if (role === 'referer') {
    const referer = await Referer.findOne({ where: { email } });
    if (!referer) throw new Unauthorized(ErrorMessages.auth_invalid_email_or_password);
    const validPassword = await comparePasswords(password, referer.password);
    if (!validPassword) throw new Unauthorized(ErrorMessages.auth_invalid_email_or_password);
    referer.token = await generateAccessToken({
      id: referer.id,
      email: referer.email,
      role: referer.role,
    });
    referer.save();
    return referer.token;
  }
  const student = await Student.findOne({ where: { email } });
  if (!student) throw new Unauthorized(ErrorMessages.auth_invalid_email_or_password);
  const validPassword = await comparePasswords(password, student.password);
  if (!validPassword) throw new Unauthorized(ErrorMessages.auth_invalid_email_or_password);
  return generateAccessToken({
    id: student.id,
    email: student.email,
    role: student.role,
  });
}

async function createInviteLink({ email, role }) {
  if (role !== 'referer') throw new Unauthorized(ErrorMessages.auth_invalid_user_role);
  const referer = await Referer.findOne({ where: { email } });
  const inviteLink = `${URL}/token=${referer.token}`;
  return inviteLink;
}

async function registerStudent({
  firstName, lastName, surName, telephone, email, password,
}) {
  const candidat = await Student.findOne({
    where: { email },
  });
  if (candidat) throw new BadRequest(ErrorMessages.auth_user_already_exists);
  const studentPassword = await hashPassword(password);
  return Student.create({
    firstName,
    lastName,
    surName,
    telephone,
    email,
    password: studentPassword,
  });
}

module.exports = {
  loginStudent,
  createInviteLink,
  registerStudent,
};
