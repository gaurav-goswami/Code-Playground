import app from "./app.js";
import { Config } from "./config/config.js";
import http from "http";

const startServer = async () => {
    try {
        const PORT = Config.PORT;
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server is running at PORT ${PORT}`)
        })
    } catch (error) {
        console.log(`Something went wrong while starting server`);
        process.exit(1);
    }
}
startServer();