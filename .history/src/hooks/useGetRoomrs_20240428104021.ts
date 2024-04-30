import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
import { response } from "express";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
}

export const useGetRoom = (consultorId: string) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const { user } = useGetUser();
  useEffect(() => {
    console.log(user?.id);
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
        .catch((error) => console.log(error));
    };
    return () => {
      fetchUser();
    };
  }, [consultorId, user]);

  return { room };
};
