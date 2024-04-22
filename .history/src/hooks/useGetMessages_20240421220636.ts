import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useGetUser } from "./useGetUser";
export interface IMessage {
  message: string;
  from: string;
  to: string;
  createdAt?: Date;
}
export const useGetMessages = (receiver: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { user } = useGetUser();

  useEffect(() => {
    console.log("this", user?.id, receiver);
    const fetchMesssages = async () => {
      await axiosInstance
        .get("/getmessages", {
          params: {
            sender: user?.id,
            receiver: receiver,
          },
        })
        .then((res) => {
          console.log("worked");
          setMessages(res.data);
        })
        .catch((err) => console.log(err));
    };
    return () => {
      fetchMesssages();
    };
  }, [user]);
  console.log(messages);
  return {
    messages,
  };
};
