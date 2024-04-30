import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
import { response } from "express";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
}

export const useGetRooms = (clientId: string | undefined) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    console.log(clientId);
    const fetchUser = async () => {
      if (clientId)
        return await axiosInstance
          .get(`/get-rooms/${clientId}`)
          .then((response) => setRooms(response.data))
          .catch((error) => console.log(error));
    };
    return () => {
      fetchUser();
    };
  }, [clientId]);

  return { rooms };
};
