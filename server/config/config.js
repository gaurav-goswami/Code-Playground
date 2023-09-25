import { config } from "dotenv";
config();

const { PORT } = process.env;
const { DB_URI } = process.env;

export const Config = {
    PORT,
    DB_URI
};