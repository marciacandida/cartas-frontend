import { useEffect, useState } from "react";
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
  }, [user, socket]); // Dependencies: user and socket

  return { socket, isConnected };
};

export default useSocket;
