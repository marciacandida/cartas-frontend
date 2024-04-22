import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";
import { IMessage, useGetMessages } from "@/hooks/useGetMessages";
import { axiosInstance } from "@/lib/axios";
import { useGetOneUser } from "@/hooks/useGetOneUser";

interface ChatProps {
  id: string;

  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ selectedUser, isMobile, id }: ChatProps) {
  const { messages, setMessages } = useGetMessages(id);
  const sendMessage = async (newMessage: IMessage) => {
    await axiosInstance
      .post("/sendmessage", newMessage)
      .then((res) => {
        setMessages([...messages, res.data]);
      })
      .catch((err) => console.error(err));
  };
  const { user } = useGetOneUser(id);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={user} />

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
