const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {Config} = require("./config/config.js");
const errorMiddleware = require("./middleware/errorMiddleware.js");
const AuthRouter = require("./routes/Auth.js");
const PlaygroundRouter = require("./routes/Playground.js");

const app = express();
app.use(cors({
  origin: Config.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/playground" , PlaygroundRouter);

app.use(errorMiddleware);
module.exports = app;