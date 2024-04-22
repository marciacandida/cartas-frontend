import { io, Socket } from "socket.io-client";

let socketInstance: Socket | null = null;

const createSocketInstance = () => {
  if (!socketInstance) {
    socketInstance = io("http://localhost:8000");
  }
  return socketInstance;
};

export default createSocketInstance;
