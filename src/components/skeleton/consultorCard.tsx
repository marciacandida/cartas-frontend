import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export const ConsultorCardSkeleton = () => {
  return (
    <Card className="lg:w-[300px]">
      <CardHeader className="p-0 h-48 items-center flex justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-[90px] rounded-t-lg bg-first z-0 bg-hero-pattern"></div>
        <div className=" w-24 h-24 rounded-full  bg-[#F1F5F9] z-10">
          <Skeleton className="w-24 h-24 rounded-full bg-gray-400" />
        </div>
      </CardHeader>
      <CardContent className="flex items-center flex-col     justify-center space-y-4 px-2 text-center">
        <Skeleton className="h-5 mt-4 w-48 bg-gray-400" />
        <Skeleton className="h-3 py-1  w-40 bg-gray-400" />
        {/* <p className="text-sm text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        </p> */}
      </CardContent>
      <CardFooter className="w-full flex items-center justify-center">
        <div className=" bg-white transition-all px-10 py-2 rounded-lg">
          <Skeleton className="h-4 w-24 bg-gray-400 " />
        </div>
      </CardFooter>
    </Card>
  );
};
