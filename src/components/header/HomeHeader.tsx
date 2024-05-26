"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleDollarSign, MenuIcon, MessageCircleIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import useSocket from "@/hooks/useSocket";
import { useSelector } from "react-redux";
import { selectUserId } from "@/lib/redux/features/user/userSlice";
import { useGetUser } from "@/hooks/useGetUser";
import { MenuState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import useGetUsers from "@/hooks/usuGetUsers";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Search from "./search";
import { Button } from "../ui/button";
import { useGetRooms } from "@/hooks/useGetRooms";
import { Skeleton } from "../ui/skeleton";
const HomeHeader = () => {
  const router = useRouter();
  const { isConnected, socket } = useSocket();
  const userId = useSelector(selectUserId);
  const user = useGetUser();
  const [opens, setOpens] = useRecoilState(MenuState);
  const { users } = useGetUsers({ query: "CONSULTOR" });
  const otherUsers = users.filter((u) => u.id !== user.user?.id);
  const { rooms } = useGetRooms();
  const [admin, setAdmin] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="fixed left-0  z-20 top-0 right-0 flex justify-between bg-white items-center h-16 px-4 text-sm border-b border-b-first  shadow-md transition-all">
      <div className="py-2">
        <Link href={"/home"}>
          <p className="text-xl">
            <span className="text-first">Ciganos</span>{" "}
            <span className="text-black">Encantados </span>
          </p>
        </Link>
      </div>
      <div className="space-x-5 flex items-center transition-all">
        {admin ? (
          <Link
            href={`/admin`}
            className=" text-white bg-first  px-10 py-2 rounded-lg"
          >
            Admin
          </Link>
        ) : (
          <>
            <div className="m-0 p-0 max-md:hidden space-x-5 transition-all flex items-center">
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger>
                    <Link href={"/pricing"}>
                      <div className="w-10 h-10 items-center justify-center flex bg-gray-100 rounded-full ">
                        <CircleDollarSign className="w-5 h-5 " />
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="-ml-7">
                    <p className="text-xs">Comprar créditos</p>
                  </TooltipContent>
                </Tooltip>
                {rooms[0] ? (
                  user.user?.type == "CLIENT" ? (
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger>
                        <Link href={`/chat/${rooms[0].consultor.id}`}>
                          <div className="w-10 h-10 items-center justify-center flex bg-gray-100 rounded-full ">
                            <MessageCircleIcon className="w-5 h-5 " />
                          </div>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="-ml-7">
                        <p className="text-xs">Conversas</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger>
                        <Link href={`/chat/${rooms[0].client.id}`}>
                          <div className="w-10 h-10 items-center justify-center flex bg-gray-100 rounded-full ">
                            <MessageCircleIcon className="w-5 h-5 " />
                          </div>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="-ml-7">
                        <p className="text-xs">Conversas</p>
                      </TooltipContent>
                    </Tooltip>
                  )
                ) : null}

                <Tooltip delayDuration={200}>
                  <TooltipTrigger className="w-10 h-10 bg-gray-100 rounded-full">
                    <p className="text-xs">
                      {user.user?.type === "CLIENT"
                        ? user.user?.balance
                        : user.user?.credit}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="-ml-9">
                    <p className="text-xs">
                      {user.user?.type === "CLIENT" ? "Crédito" : "Saldo"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 ">
                {user.user ? (
                  <>
                    <div className="max-md:hidden">
                      <p className=" text-xs">{`${user.user?.firstName} ${user.user?.lastName}`}</p>
                      <p className="text-paragraph text-[11px]">
                        {user.user?.type === "CLIENT" ? "Cliente" : "Consultor"}
                      </p>
                    </div>
                    <Avatar>
                      <AvatarImage
                        src={user.user?.photo}
                        alt="foto de perfil"
                        className="object-cover w-9 h-9 rounded-full z-10"
                      ></AvatarImage>
                      <AvatarFallback className="">{`${user.user?.firstName[0].toUpperCase()}${user.user?.lastName[0].toUpperCase()}`}</AvatarFallback>
                    </Avatar>
                  </>
                ) : (
                  <>
                    <div className="max-md:hidden items-center  flex-col flex justify-center space-y-2">
                      <Skeleton className="w-[74px] h-3 rounded-full bg-gray-400" />
                      <Skeleton className="w-[50px] h-2 rounded-full bg-gray-400" />
                    </div>
                    <Skeleton className="w-10 h-10 rounded-full bg-gray-400 mr-1" />
                  </>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {user.user?.type === "CONSULTOR" && (
                  <>
                    <Link href={`/profile/consultant/${user.user?.id}`}>
                      <DropdownMenuItem className="cursor-pointer">
                        Meu perfil
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
        <div className="md:hidden">
          <div
            className="p-2 bg-gray-100 rounded-full cursor-pointer"
            onClick={() => setOpens(true)}
          >
            <MenuIcon className="w-5 h-5 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
