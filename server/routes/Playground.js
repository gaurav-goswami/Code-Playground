const PlaygroundController = require("../controllers/Playground");
const isAuthenticated = require("../middleware/authMiddleware");

const Router = require("express").Router();

Router.post("/create-playground", isAuthenticated, PlaygroundController.createPlayground);
Router.put("/join-playground", isAuthenticated, PlaygroundController.joinPlayground);
Router.put("/leave-playground", isAuthenticated, PlaygroundController.leavePlayground);
Router.get("/check-playground/:roomId" , isAuthenticated, PlaygroundController.playgroundCheck);

module.exports = Router;