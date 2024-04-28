import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserData } from "@/app/data";
import { ChevronLeft, Info, TimerIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { IUser } from "@/hooks/useGetUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTimer } from "react-timer-hook";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";

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
    autoStart: false,
  });

  const [timerStarted, setTimerStarted] = useState(false);
  const handleStartTimer = () => {
    setTimerStarted(true); // Set the state to indicate timer has started
    start(); // Start the timer
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full flex p-4 justify-between items-center border-b">
      <div className="max-lg:flex max-lg:flex-col max-lg:space-y-5">
        <div className="flex">
          <Link href={"/chat"} className="lg:hidden mr-3">
            <ChevronLeft />
          </Link>
          <Link href={"/home"} className="lg:hidden ">
            <p className="text-xl">
              <span className="text-first">Ciganos</span>{" "}
              <span className="text-black">Encantados </span>
            </p>
          </Link>
        </div>

        <Link href={"/profile"}>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                // src={
                //   "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                // }
                alt="foto de perfil"
                className="object-cover w-9 h-9 rounded-full z-10"
              ></AvatarImage>
              <AvatarFallback className="">{`${selectedUser?.firstName[0].toUpperCase()}${selectedUser?.lastName[0].toUpperCase()}`}</AvatarFallback>
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

      <div>
        <button onClick={handleStartTimer}>start timer</button>
      </div>

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
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={!isRunning && timerStarted}>
        <AlertDialogContent className="max-sm:rounded-md max-sm:mx-0 max-sm:px-2 max-sm:w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Os seus minutos acabaram</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in
              ex ea molestiae aut distinctio.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form className="space-y-3">
            <div className="flex items-center space-x-2">
              <Input type="number" required min={10} value={10} />
              <span>min</span>
            </div>

            <div className="flex w-full justify-end max-sm:justify-center space-x-3">
              <Link
                href={`/pricing`}
                className=" text-first text-sm font-medium transition-all border-2 border-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3"
              >
                Comprar mais minutos
              </Link>
              <button className=" text-white text-sm  flex items-center font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3">
                <span>Continuar</span>
              </button>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
