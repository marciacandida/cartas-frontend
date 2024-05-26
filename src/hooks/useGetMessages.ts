import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useGetUser } from "./useGetUser";
import { toast } from "@/components/ui/use-toast";
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
    const fetchMesssages = async () => {
      await axiosInstance
        .get("/getmessages", {
          params: {
            sender: user?.id,
            receiver: receiver,
          },
        })
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => console.error(err));
    };
    return () => {
      fetchMesssages();
    };
  }, [user]);

  return {
    messages,
    setMessages,
  };
};
