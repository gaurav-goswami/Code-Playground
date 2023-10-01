import { config } from "dotenv";
config();

const { PORT, DB_URI, GEN_SALT, JWT_SECRET, MAIL_HOST, MAIL_USER, MAIL_PASS, SALT } = process.env;

export const Config = {
  PORT,
  DB_URI,
  GEN_SALT,
  JWT_SECRET, 
  MAIL_USER,
  MAIL_HOST,
  MAIL_PASS,
  SALT
};
