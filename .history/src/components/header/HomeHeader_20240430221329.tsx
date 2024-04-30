"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  CircleDollarSign,
  MenuIcon,
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Search from "./search";
import { Button } from "../ui/button";
import { useGetRooms } from "@/hooks/useGetRooms";
const HomeHeader = () => {
  const router = useRouter();
  const { isConnected, socket } = useSocket();
  const userId = useSelector(selectUserId);
  const user = useGetUser();
  const [opens, setOpens] = useRecoilState(MenuState);
  const { users } = useGetUsers({ query: "CONSULTOR" });
  const otherUsers = users.filter((u) => u.id !== user.user?.id);
  const { rooms } = useGetRooms();
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
        {/* <Search /> */}
        <div className="m-0 p-0 max-md:hidden space-x-5 transition-all flex items-center">
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
                <p className="text-xs">Comprar créditos</p>
              </TooltipContent>
            </Tooltip>
            {rooms[0] ? (
              user.user?.type == "CLIENT" ? (
                <Tooltip delayDuration={200}>
                  <TooltipTrigger>
                    <Link href={`/chat/${rooms[0].consultor.id}`}>
                      <div className="p-2 bg-gray-100 rounded-full ">
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
                    <Link href={`/chat/${rooms[0].consultor.id}`}>
                      <div className="p-2 bg-gray-100 rounded-full ">
                        <MessageCircleIcon className="w-5 h-5 " />
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="-ml-7">
                    <p className="text-xs">Conversas</p>
                  </TooltipContent>
                </Tooltip>
              )
            ) : (
              <div></div>
            )}

            <Tooltip delayDuration={200}>
              <TooltipTrigger className="p-[10px] bg-gray-100 rounded-full">
                <p className="text-xs">{user.user?.balance}</p>
              </TooltipTrigger>
              <TooltipContent className="-ml-9">
                <p className="text-xs">Crédito</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 ">
            <div className="max-md:hidden">
              <p className=" text-xs">{`${user.user?.firstName} ${user.user?.lastName}`}</p>
              <p className="text-paragraph text-[11px]">
                {user.user?.type === "CLIENT" ? "Cliente" : "Consultor"}
              </p>
            </div>
            <Avatar>
              <AvatarImage
                // src={
                //   "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                // }
                alt="foto de perfil"
                className="object-cover w-9 h-9 rounded-full z-10"
              ></AvatarImage>
              <AvatarFallback className="">{`${user.user?.firstName[0].toUpperCase()}${user.user?.lastName[0].toUpperCase()}`}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {user.user?.type === "CONSULTOR" && (
              <>
                <Link href={`/profile/consultant/${user.user?.id}`}>
                  <DropdownMenuItem>Meu perfil</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuItem>
              <Button variant={"link"} onClick={handleLogout}>
                Sair
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
