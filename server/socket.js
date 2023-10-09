import { Server } from "socket.io";
import {Config as conf}  from "./config/config.js";
import EVENTS from "./Events.js";
import getAllConnectedClients from "./helper/connectedClients.js";

const socketConnection = (httpServer) => {
    const io = new Server(httpServer, {
        cors : {
            origin : `${conf.CLIENT_URL}`
        }
    })
    
    const userSocketMap = {}

    io.on("connection" , (socket) => {
 
        socket.on(EVENTS.JOIN , ({roomId, username}) => {
            userSocketMap[socket.id] = username;
            socket.join(roomId)
            const clients = getAllConnectedClients(io, roomId, userSocketMap);
            console.log(clients);

            clients.forEach(({socketId}) => {
                io.to(socketId).emit(EVENTS.JOINED , {
                    clients,
                    username,
                    socketId : socket.id
                })
            })
        })

    })
}

export default socketConnection