require('dotenv').config();

// API PORT
const PORT = process.env.API_PORT;

// Frontend URL
const URL = process.env.FRONTEND_URL;

// JWT Secret
const secret = process.env.JWT_ACCESS_SECRET_KEY;

// Referer
const referer = {
  firstName: process.env.REFERER_FIRST_NAME,
  lastName: process.env.REFERER_LAST_NAME,
  surName: process.env.REFERER_SUR_NAME,
  email: process.env.REFERER_EMAIL,
  telephone: process.env.REFERER_TELEPHONE,
  password: process.env.REFERER_PASSWORD,
};

const dbConfig = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  dialect: 'postgres',
};

// sequelize cli required environments
const production = dbConfig;
const development = dbConfig;

module.exports = {
  dbConfig,
  PORT,
  production,
  development,
  secret,
  referer,
  URL,
};
