import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export interface IConsultorProps {
  id: string;
  firstName: string;
  lastName: string;
  photo: string | undefined;
  expertise: string | undefined;
}

const ConsultorCard = ({
  id,
  firstName,
  lastName,
  photo,
  expertise,
}: IConsultorProps) => {
  return (
    <Card className="lg:w-[300px] ">
      <CardHeader className="p-0 h-48 items-center flex justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-[90px] rounded-t-lg bg-first z-0 bg-hero-pattern"></div>
        <Avatar className="object-cover w-24 h-24 rounded-full z-10">
          <AvatarImage
            src={photo}
            alt=""
            className="object-cover w-24 h-24 rounded-full z-10"
          ></AvatarImage>
          <AvatarFallback className="text-2xl">{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className=" space-y-2 px-2 text-center">
        <p className="text-xl max-md:text-lg mt-2 font-bold uppercase">{`${firstName} ${lastName}`}</p>
        <p className="text-sm  py-1 px-1 text-first">{expertise}</p>
        {/* <p className="text-sm text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        </p> */}
      </CardContent>
      <CardFooter className="w-full flex items-center justify-center">
        <Link
          href={`/profile/consultant/${id}`}
          className=" bg-white text-first hover:text-white max-md:text-white transition-all md:hover:bg-first max-md:bg-first px-10 py-2 rounded-lg"
        >
          Ver perfil
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ConsultorCard;
