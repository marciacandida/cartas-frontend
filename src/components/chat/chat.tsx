import { UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";
import { IMessage, useGetMessages } from "@/hooks/useGetMessages";
import { axiosInstance } from "@/lib/axios";
import { useGetOneUser } from "@/hooks/useGetOneUser";
import useSocket from "@/hooks/useSocket";
import { useGetUser } from "@/hooks/useGetUser";
import { toast } from "../ui/use-toast";

interface ChatProps {
  id: string;
  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ selectedUser, isMobile, id }: ChatProps) {
  const { messages, setMessages } = useGetMessages(id);
  const { socket } = useSocket();
  const sendMessage = async (newMessage: IMessage) => {
    await axiosInstance
      .post("/sendmessage", newMessage)
      .then((res) => {
        setMessages([...messages, res.data]);
        toast({ title: "Mensagem enviada com sucesso", description: "" });
      })
      .catch((err) =>
        toast({ title: "Erro ao enviar mensagem", description: err })
      );
  };
  const { user } = useGetOneUser(id);
  const loggedUser = useGetUser();

  socket.on("sendMessage", (data: { message: IMessage; to: string }) => {
    if (loggedUser.user?.id !== data.to) return;
    setMessages([...messages, data.message]);
  });

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={user} loggedUser={loggedUser.user} />

      <ChatList
        id={id}
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
