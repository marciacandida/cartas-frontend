import React, { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { UserData } from "@/app/data";
import {
  ChevronLeft,
  Info,
  Phone,
  StepBack,
  StepBackIcon,
  TimerIcon,
  Video,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import ConsultorProfile from "../Profile/Consultor";
import { IUser } from "@/hooks/useGetUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTimer } from "react-timer-hook";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ChatTopbarProps {
  selectedUser?: IUser;
}

export const TopbarIcons = [{ icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  const time = new Date();
  const expiryTime = new Date(time.getTime() + 600 * 100);
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: expiryTime,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="w-full flex p-4 justify-between items-center border-b">
      <div className="max-lg:flex max-lg:flex-col max-lg:space-y-5">
        <div className="flex">
          <Link href={"/chat"} className="lg:hidden mr-3">
            <ChevronLeft />
          </Link>
          <Link href={"/home"} className="lg:hidden ">
            <p className="text-xl">
              <span className="text-first">Cartas</span>{" "}
              <span className="text-black">Misticas </span>
            </p>
          </Link>
        </div>

        <Link href={"/profile"}>
          <div className="flex items-center gap-2">
            <Avatar className="flex justify-center items-center">
              <AvatarImage
                src={
                  "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                }
                alt={selectedUser?.firstName}
                width={6}
                height={6}
                className="w-10 h-10 "
              />
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="font-medium">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</span>
              <span className="text-xs text-paragraph">Active 2 mins ago</span>
            </div>
          </div>
        </Link>
      </div>
      {/* </DrawerTrigger>
        <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[60%] rounded-none">
          <DrawerClose>
            <div className="flex justify-between">
              <ChevronLeft className="text-pink-800" />
            </div>
          </DrawerClose>
          <ScrollArea className="h-screen">
            <ConsultorProfile />
            <ConsultorProfile />
          </ScrollArea>
        </DrawerContent>
      </Drawer> */}

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>
            {TopbarIcons.map((icon, index) => (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                  "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
              >
                <TimerIcon size={20} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="-ml-24">
          <DropdownMenuLabel>Meus minutos</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div style={{ textAlign: "center" }}>
            <div>
              <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
              <span>{seconds}</span>
            </div>
            <p>{isRunning ? "Running" : "Not running"}</p>
            {/* <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button
              onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time);
              }}
            >
              Restart
            </button> */}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={!isRunning}>
        <AlertDialogContent className="max-sm:rounded-md max-sm:mx-0 max-sm:px-2 max-sm:w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Os seus minutos acabaram</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in
              ex ea molestiae aut distinctio.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex w-full justify-end max-sm:justify-center">
            <Link
              href={`/pricing`}
              className=" text-white text-sm font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3"
            >
              Comprar mais minutos
            </Link>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
