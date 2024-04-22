import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useGetUser } from "./useGetUser";

const useSocket = () => {
  const socket = io("http://localhost:8000");

  const user = useGetUser();
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    if (user) {
      socket.emit("join", { user_id: user.user?.id });
    }
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return { socket, isConnected };
};

export default useSocket;
