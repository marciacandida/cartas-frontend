import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useGetUser } from "./useGetUser";
import createSocketInstance from "@/lib/socketSingleton";

const useSocket = () => {
  const socket = createSocketInstance();
  const user = useGetUser();
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (!user) return;

    const onConnect = () => {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    };

    const onDisconnect = () => {
      setIsConnected(false);
      setTransport("N/A");
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    // Emit join event if user is present
    if (user) {
      socket.emit("join", { user_id: user.user?.id });
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [user, socket]); // Dependencies: user and socket

  return { socket, isConnected };
};

export default useSocket;
