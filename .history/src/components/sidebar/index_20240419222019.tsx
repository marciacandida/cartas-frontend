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
import { ChevronsUpDown, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ISidbar {
  className?: string;
}

export function Sidebar({ className }: ISidbar) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 z-0 pb-12 w-64 border-r border-first  bg-white"
      )}
    >
      <div className="space-y-4 py-[10px]">
        <div className="py-2 px-4">
          <Link href={"/home"}>
            <p className="text-xl">
              <span className="text-first">Ciganos</span>{" "}
              <span className="text-black">Encantados </span>
            </p>
          </Link>
        </div>
        <div className="p-2">
          <h2 className="mb-2 px-5 text-xs font-semibold tracking-tight text-first">
            Navegação
          </h2>
          <div className="">
            <Link
              href={"/home"}
              className={`w-full font-semibold text-sm text-black flex object-cover py-2 px-2 rounded-lg transition-all hover:bg-accent ${
                pathname === "/home" && "bg-accent"
              }`}
            >
              Pagina Principal
            </Link>
            <Link
              href={"/pricing"}
              className={`w-full font-semibold text-sm text-black flex object-cover py-2 px-2  rounded-lg transition-all hover:bg-accent ${
                pathname === "/pricing" && "bg-accent"
              }`}
            >
              Comprar Créditos
            </Link>
          </div>
        </div>

        <div className="flex mx-2  items-center space-x-2 p-2 pl-4 bg-gray-100 rounded-full ">
          <SearchIcon className="w-4 h-4" />
          <input
            placeholder="Pesquisar"
            className=" bg-transparent border-none text-sm focus:border-transparent focus:outline-none"
          />
        </div>
        <div className="">
          <h2 className="relative px-7 text-xs font-semibold tracking-tight text-first">
            Conversas
          </h2>
          <div className="p-2">
            {/* {playlists?.map((playlist) => ( */}
            <Link
              href={"/chat"}
              className={`w-full h-14 flex object-cover p-2 rounded-lg transition-all hover:bg-accent ${
                pathname === "/chat" && "bg-accent"
              }`}
            >
              <img
                src={
                  "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                }
                alt="foto de perfil"
                className="rounded-full"
              />
              <div className="ml-2 w-44">
                <h1 className="font-semibold text-black text-start text-[15px]">
                  {"Kelvin"}
                </h1>
                <p className="truncate text-xs text-paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  nesciunt, sint hic ducimus consectetur veniam quidem, at optio
                  ratione eaque ex magni impedit saepe laudantium! Architecto
                  repellat corporis est quod.
                </p>
              </div>
              {/* <ListMusic className="mr-2 h-4 w-4" /> */}
              {/* {playlist} */}
            </Link>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
