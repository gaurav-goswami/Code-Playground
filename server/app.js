import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { Config as conf } from "./config/config";

const app = express();
app.use(cors({
    origin : process.env.CLIENT_URL,
    credentials : true,
    methods : ["GET" , "POST" , "PUT", "DELETE"]
}))
app.use(express.json());
app.use(cookieParser());

export default app;
