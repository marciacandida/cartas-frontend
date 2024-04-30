import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser } from "./useGetUser";
import { response } from "express";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
}

export const useGetRoom = (
  clientId: string | undefined,
  consultorId: string
) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      if (clientId)
        return await axiosInstance
          .get(`/get-room`, {
            params: {
              clientId,
              consultorId,
            },
          })
          .then((response) => setRoom(response.data))
          .catch((error) => console.log(error));
    };
    return () => {
      fetchUser();
    };
  }, [consultorId]);

  return { room };
};
