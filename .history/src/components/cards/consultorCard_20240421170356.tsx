import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { IUser } from "@/hooks/useGetUser";

export interface IConsultorProps {
  firstName: string;
  lastName: string;
}

const ConsultorCard = ({ firstName, lastName }: IConsultorProps) => {
  return (
    <Card className="w-[300px]">
      <CardHeader className="p-0 h-48 items-center flex justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-[90px] rounded-t-lg bg-first z-0"></div>
        <img
          src="https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
          alt=""
          className="object-cover w-24 h-24 rounded-full z-10"
        />
      </CardHeader>
      <CardContent className=" space-y-2 px-2 text-center">
        <p className="text-xl mt-2 font-bold uppercase">{`${firstName} ${lastName}`}</p>
        <p className="text-sm  py-1 px-1 text-first">Software developer</p>
        <p className="text-sm text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        </p>
      </CardContent>
      <CardFooter className="w-full flex items-center justify-center">
        <Link
          href={"/profile"}
          className=" bg-white text-first hover:text-white transition-all hover:bg-first px-10 py-2 rounded-lg"
        >
          Ver perfil
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ConsultorCard;
