import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { UserData } from "@/app/data";
import {
  ChevronLeft,
  Info,
  Phone,
  StepBack,
  StepBackIcon,
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

interface ChatTopbarProps {
  selectedUser: UserData;
}

export const TopbarIcons = [{ icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <div className="w-full h-16 flex p-4 justify-between items-center border-b">
      {/* <Drawer direction="right">
        <DrawerTrigger> */}
      <Link href={"/profile"}>
        <div className="flex items-center gap-2">
          <Avatar className="flex justify-center items-center">
            <AvatarImage
              src={
                "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
              }
              alt={selectedUser.name}
              width={6}
              height={6}
              className="w-10 h-10 "
            />
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="font-medium">{selectedUser.name}</span>
            <span className="text-xs text-paragraph">Active 2 mins ago</span>
          </div>
        </div>
      </Link>
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
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
}
