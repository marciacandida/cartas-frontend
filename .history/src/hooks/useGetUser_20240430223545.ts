import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

export interface IUser {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  type: "CLIENT" | "CONSULTOR";
  bio: string;
  balance: number;
}

export const useGetUser = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async (id: string) => {
      await axiosInstance
        .get(`/getuser/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error));
    };
    try {
      const res = localStorage.getItem("user");
      if (!res) return;
      fetchUser(JSON.parse(res).id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { user };
};
