import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
import { response } from "express";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
}

export const useGetRooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const { user } = useGetUser();

  useEffect(() => {
    const fetchUser = async () => {
      console.log("this is user", user);
      return await axiosInstance
        .get(`/get-rooms/${user?.id}`)
        .then((response) => setRooms(response.data))
        .catch((error) => console.log(error));
    };
    return () => {
      fetchUser();
    };
  }, [user]);

  return { rooms };
};
