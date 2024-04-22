"use client";
import React from "react";
import RoundButton from "../buttons/RoundButton";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  BadgeDollarSign,
  BellIcon,
  CircleDollarSign,
  MessageCircleIcon,
  SearchIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import useSocket from "@/hooks/useSocket";
import { useSelector } from "react-redux";
import { selectUserId } from "@/lib/redux/features/user/userSlice";
import { useGetUser } from "@/hooks/useGetUser";

const HomeHeader = () => {
  const router = useRouter();
  const { isConnected } = useSocket();
  const userId = useSelector(selectUserId);
  const user = useGetUser();
  console.log(isConnected);
  console.log(userId);
  console.log(user);
  return (
    <div className="fixed left-0  z-20 top-0 right-0 flex justify-between bg-white items-center h-16 px-4 text-sm border-b border-b-first  shadow-md">
      <div className="py-2">
        <Link href={"/home"}>
          <p className="text-xl">
            <span className="text-first">Cartas</span>{" "}
            <span className="text-black">Misticas </span>
          </p>
        </Link>
      </div>
      <div className="space-x-5 flex items-center ">
        <div className="flex max-w-sm items-center space-x-2 p-2 pl-4 bg-gray-100 rounded-full ">
          <SearchIcon className="w-4 h-4" />
          <input
            placeholder="Pesquisar"
            className=" bg-transparent border-none text-sm focus:border-transparent focus:outline-none"
          />
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <Link href={"/pricing"}>
                <div className="p-2 bg-gray-100 rounded-full ">
                  <CircleDollarSign className="w-5 h-5 " />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="-ml-7">
              <p>Comprar creditos</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <Link href={"/chat"}>
                <div className="p-2 bg-gray-100 rounded-full ">
                  <MessageCircleIcon className="w-5 h-5 " />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="-ml-7">
              <p>Conversas</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Link
          href={"/profile/consultant/user"}
          className="flex items-center space-x-2 "
        >
          <div>
            <p className=" text-xs">{`${user.user?.firstName} ${user.user?.lastName}`}</p>
            <p className="text-paragraph text-[11px]">
              {user.user?.type === "CLIENT" ? "Cliente" : "Consultor"}
            </p>
          </div>
          <div>
            <img
              src={
                "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
              }
              alt="foto de perfil"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
