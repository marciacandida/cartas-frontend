import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IUser } from "./useGetUser";
import { toast } from "@/components/ui/use-toast";

export const useGetOneUser = (id: string) => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const fetchUser = async () => {
      await axiosInstance
        .get(`/getuser/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error(error));
    };
    fetchUser();
    return;
  }, [id]);

  return { user, setUser };
};
