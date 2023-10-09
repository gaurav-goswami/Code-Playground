function getAllConnectedClients(io, roomId, userSocketMap) {
    // gives a map
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        return {
            socketId,
            username : userSocketMap[socketId]
        }
    });     
}

export default getAllConnectedClients;