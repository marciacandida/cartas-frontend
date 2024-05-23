import { IUser } from "@/hooks/useGetUser";

export interface adminTableTypes {
  id: IUser["id"];
  name: IUser["firstName"];
  credit: IUser["balance"];
  status: "paid" | "unpaid";
}
