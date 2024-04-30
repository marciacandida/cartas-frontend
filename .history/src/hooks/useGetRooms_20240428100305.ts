import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
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
  const [rooms, setRooms] = useState<IRoom | null>(null);
  const { user } = useGetUser();
  useEffect(() => {
    console.log("clientId", clientId);
    const fetchUser = async () => {
      if (clientId) console.log("hereeee");
      return await axiosInstance
        .get(`/get-rooms/${user?.id}`)
        .then((response) => setRooms(response.data))
        .catch((error) => console.log(error));
    };
    return () => {
      fetchUser();
    };
  }, [consultorId, clientId]);

  return { rooms };
};
