import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";
import { IMessage } from "@/hooks/useGetMessages";
import { axiosInstance } from "@/lib/axios";

interface ChatProps {
  id: string;
  messages: IMessage[];
  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ messages, selectedUser, isMobile, id }: ChatProps) {
  const [messagesState, setMessages] = React.useState<IMessage[]>(messages);

  const sendMessage = async (newMessage: IMessage) => {
    await axiosInstance
      .post("/sendmessage", newMessage)
      .then((res) => {
        setMessages([...messagesState, res.data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        id={id}
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
