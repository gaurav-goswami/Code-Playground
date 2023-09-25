import mongoose from "mongoose";
import app from "./app.js";
import { Config } from "./config/config.js";
import http from "http";

const connectDatabase = async () => {
  try {
    const connected = await mongoose.connect(Config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connected) console.log("Successfully connected to database");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
    process.exit(1);
  }
}

const startServer = async () => {
  try {
    const PORT = Config.PORT;
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });

    connectDatabase();
  } catch (error) {
    console.log(`Something went wrong while starting server`);
    process.exit(1);
  }
};
startServer();
