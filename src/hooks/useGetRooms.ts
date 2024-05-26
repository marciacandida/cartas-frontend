import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser, useGetUser } from "./useGetUser";
import { toast } from "@/components/ui/use-toast";

interface IRoom {
  id: string;
  expiry: Date;
  consultor: IUser;
  client: IUser;
}

export const useGetRooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const { user } = useGetUser();

  useEffect(() => {
    const fetchRooms = async () => {
      await axiosInstance
        .get(`/get-rooms/${user?.id}`)
        .then((response) => setRooms(response.data))
        .catch((error) => console.error(error));
    };

    fetchRooms();
    return;
  }, [user, rooms]);

  return { rooms };
};
