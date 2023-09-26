import { config } from "dotenv";
config();

const { PORT } = process.env;
const { DB_URI } = process.env;
const {GEN_SALT} = process.env;
const {JWT_SECRET} = process.env;

export const Config = {
  PORT,
  DB_URI,
  GEN_SALT,
  JWT_SECRET
};
