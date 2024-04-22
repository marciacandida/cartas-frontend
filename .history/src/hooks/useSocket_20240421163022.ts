import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useGetUser } from "./useGetUser";

const useSocket = () => {
  const user = useGetUser();
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  // Create socket instance once and reuse it
  const socket = useState(() => io("http://localhost:8000"))[0];

  useEffect(() => {
    if (!user) return; // Return early if no user is available

    // Event handlers
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

    // Add event listeners
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    // Emit join event if user is present
    if (user) {
      socket.emit("join", { user_id: user.user?.id });
    }

    // Clean up event listeners on component unmount
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [socket, user]); // Ensure dependencies include both socket and user

  return { socket, isConnected };
};

export default useSocket;
