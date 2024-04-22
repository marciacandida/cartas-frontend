import { useState } from "react";

interface IUser {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
}

export const useGetUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  try {
    const res = localStorage.getItem("user");
    if (!res) return;
    setUser(JSON.parse(res));
  } catch (err) {
    console.error(err);
  }
  return { user };
};
