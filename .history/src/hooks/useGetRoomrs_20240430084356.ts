import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
import { response } from "express";
import { ISOStringFormat } from "date-fns";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
}

export const useGetRoom = (consultorId: string) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const { user } = useGetUser();
  useEffect(() => {
    console.log(consultorId);
    const fetchUser = async () => {
      console.log("1", user?.id);
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

    fetchUser();
    return;
  }, [consultorId, user]);

  return { room };
};
