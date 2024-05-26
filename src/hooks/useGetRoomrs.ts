import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
import { toast } from "@/components/ui/use-toast";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
}

export const useGetRoom = (consultorId: string | undefined) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const { user } = useGetUser();
  useEffect(() => {
    const fetchUser = async () => {
      if (!user?.id) return;
      await axiosInstance
        .get(`/get-room`, {
          params: {
            clientId: user?.id,
            consultorId,
          },
        })
        .then((response) => setRoom(response.data))
        .catch((error) => console.error(error));
    };

    fetchUser();
    return;
  }, [consultorId, user]);

  return { room };
};
