import { useEffect, useState } from "react";

interface IUser {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  type: "CLIENT" | "CONSULTOR";
}

export const useGetUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    try {
      const res = localStorage.getItem("user");
      if (!res) return;
      setUser(JSON.parse(res));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { user };
};
