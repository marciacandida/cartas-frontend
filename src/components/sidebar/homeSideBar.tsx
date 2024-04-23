"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Collapsible } from "../ui/collapsible";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  ChevronsUpDown,
  CircleDollarSign,
  MessageCircleIcon,
  SearchIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useGetUsers from "@/hooks/usuGetUsers";
import { MenuState } from "@/lib/recoil";
import { useRecoilState } from "recoil";

interface ISidbar {
  className?: string;
}

export function HomeSidebar({ className }: ISidbar) {
  const { users } = useGetUsers({ query: "CLIENT" });
  const pathname = usePathname();
  const [opens, setOpens] = useRecoilState(MenuState);
  return (
    <>
      {opens && (
        <div
          className="absolute top-0 right-0 bg-black/10 left-0 bottom-0 z-50"
          onClick={() => setOpens(false)}
        />
      )}
      <div
        className={cn(
          `fixed top-0 bottom-0 left-0 z-50 pb-12 w-64 border-r border-first transition-all bg-white ${
            opens ? "translate-x-0" : "-translate-x-64"
          }`
        )}
      >
        <div className="py-[10px]">
          <div className="py-2 px-4">
            <Link href={"/home"}>
              <p className="text-xl">
                <span className="text-first">Ciganos</span>{" "}
                <span className="text-black">Encantados </span>
              </p>
            </Link>
          </div>
          <div className="flex mx-2  items-center space-x-2 p-2 pl-4 bg-gray-100 rounded-full mt-16">
            <SearchIcon className="w-4 h-4" />
            <input
              placeholder="Pesquisar"
              className=" bg-transparent border-none text-sm focus:border-transparent focus:outline-none"
            />
          </div>
          <div className="p-2 mt-6">
            <div className="">
              <Link
                href={"/pricing"}
                className={`w-full font-medium text-sm text-black flex object-cover py-4 px-2 rounded-lg transition-all hover:bg-accent space-x-4`}
              >
                <MessageCircleIcon className="w-5 h-5 " />
                <p>Comprar Créditos</p>
              </Link>
              <Link
                href={"/pricing"}
                className={`w-full font-medium text-sm text-black flex object-cover py-4 px-2  rounded-lg transition-all hover:bg-accent space-x-4`}
              >
                <CircleDollarSign className="w-5 h-5 " />
                <p>Conversas</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
