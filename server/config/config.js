const {config} = require("dotenv");
config();

const { PORT, DB_URI, GEN_SALT, JWT_SECRET, MAIL_HOST, MAIL_USER, MAIL_PASS, SALT, CLIENT_URL, DOMAIN_URL } = process.env;

exports.Config = {
  PORT,
  DB_URI,
  GEN_SALT,
  JWT_SECRET, 
  MAIL_USER,
  MAIL_HOST,
  MAIL_PASS,
  SALT,
  CLIENT_URL,
  DOMAIN_URL
};
