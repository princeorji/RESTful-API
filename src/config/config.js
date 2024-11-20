require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  CONTACT_PASSWORD: process.env.CONTACT_PASSWORD,
};
