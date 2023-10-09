import { io } from "socket.io-client";

export const initSocket = async () => {
    const options = {
        'force new connection' : 'true',
        reconnectionAttempt : 'Infinity',
        timeout : 20000,
        transports : ['websocket']
    };
    return io(import.meta.env.VITE_REACT_APP_SOCKET_URL, options);
}