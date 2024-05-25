import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface IUser {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  type: "CLIENT" | "CONSULTOR";
  bio: string;
  role: "ADMIN" | "USER";
  balance: number;
  birth_date?: Date;
  expertise?: string;
  credit: number;
  photo?: string;
}

export const useGetUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async (id: string) => {
      await axiosInstance
        .get(`/getuser/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error));
    };
    try {
      const res = localStorage.getItem("user");
      if (!res) {
        router.push("/auth");
        return;
      }
      fetchUser(JSON.parse(res).id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // useEffect(() => {
  //   const checkAdminRoute = async () => {
  //     try {
  //       const res = localStorage.getItem("user");
  //       if (!res) {
  //         router.push("/auth");
  //         return;
  //       }

  //       const user = JSON.parse(res);
  //       const pathname = window.location.pathname;
  //       if (pathname === "/admin" && user.email !== "admin@gmail.com") {
  //         router.push("/auth?admin");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   checkAdminRoute();
  // }, [router]);

  return { user };
};
