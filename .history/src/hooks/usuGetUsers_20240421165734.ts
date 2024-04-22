import { useEffect, useState } from "react";
import { IUser } from "./useGetUser";
import { axiosInstance } from "@/lib/axios";

interface IGetUser {
  query: string;
}

const useGetUsers = ({ query }: IGetUser) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      await axiosInstance
        .get("/getUsers", {
          params: {
            query: query ? query : null,
          },
        })
        .then((res) => setUsers(res.data))
        .catch((err) => console.error(err));
    };
    return () => {
      fetchUsers();
    };
  }, []);
  return users;
};
export default useGetUsers;
