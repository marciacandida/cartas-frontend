import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser } from "./useGetUser";
import { response } from "express";

interface IRoom {
  expiry: Date;
  consultor: IUser;
}

export const useGetRoom = (clientId: string, consultorId: string) => {
  const [room, setRoom] = useState<IRoom>();
  useEffect(() => {
    const fetchUser = async () => {
      await axiosInstance
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
