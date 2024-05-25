import { io, Socket } from "socket.io-client";

let socketInstance: Socket | null = null;

const createSocketInstance = () => {
  if (!socketInstance) {
    socketInstance = io(process.env.NEXT_PUBLIC_API_URL ||"http://localhost:8000");
  }
  return socketInstance;
};

export default createSocketInstance;
