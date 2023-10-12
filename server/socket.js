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
                    memberName : username,
                    socketId: socket.id
                })
            })
        })

        socket.on(EVENTS.CODE_CHANGE , ({roomId, code}) => {
            socket.in(roomId).emit(EVENTS.CODE_CHANGE , {code})
        }) 
        socket.on(EVENTS.SYNC_CODE , ({socketId, code}) => {
            console.log("inside sync code in server" , code , socketId);
            io.to(socketId).emit(EVENTS.CODE_CHANGE , {code})
        }) 

        socket.on('disconnecting' , () => {
            const rooms = [...socket.rooms];
            console.log("disconnected");
            rooms.forEach((roomId) => {
                socket.in(roomId).emit(EVENTS.DISCONNECTED , {
                    socketId : socket.id,
                    username : userSocketMap[socket.id]
                })
            });
            delete userSocketMap[socket.id];
            socket.leave();
        })
    })
}

module.exports = socketConnection