const { Server } = require("socket.io");
const { Config } = require("./config/config.js");
const EVENTS = require("./Events.js");
const getAllConnectedClients = require("./helper/connectedClients.js");

const socketConnection = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: `${Config.CLIENT_URL}`
        }
    })

    const userSocketMap = {}

    io.on("connection", (socket) => {

        socket.on(EVENTS.JOIN, ({ roomId, username }) => {
            userSocketMap[socket.id] = username;
            socket.join(roomId)
            const clients = getAllConnectedClients(io, roomId, userSocketMap);
            console.log(clients);

            clients.forEach(({ socketId }) => {
                io.to(socketId).emit(EVENTS.JOINED, {
                    clients,
                    username,
                    socketId: socket.id
                })
            })
        })

    })
}

module.exports = socketConnection