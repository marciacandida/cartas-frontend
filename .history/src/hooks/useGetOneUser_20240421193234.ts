import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { IUser } from "./useGetUser";
import { response } from "express";

export const useGetOneUser = () => {
  const [user, setUser] = useState<IUser>();
  const fetchUser = async (id: string) => {
    await axiosInstance
      .get(`/getuser/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
    return user;
  };
  return { fetchUser };
};
