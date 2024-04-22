import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser } from "./useGetUser";
import { response } from "express";

export const useGetOneUser = (id?: string | string[]) => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const fetchUser = async () => {
      await axiosInstance
        .get(`/getuser/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error));
    };
    return () => {
      fetchUser();
    };
  }, [id]);

  return { user };
};
