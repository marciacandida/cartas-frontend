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
import { ChevronsUpDown } from "lucide-react";
import { usePathname } from "next/navigation";

interface ISidbar {
  className?: string;
}

export function Sidebar({ className }: ISidbar) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "pb-12 w-[30%] text-pink-800 border border-r-pink-800  h-screen"
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <p className="text-xl">
            <span className="text-pink-800">Cartas</span>{" "}
            <span className="text-black">Misticas </span>
          </p>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight ">
            Navegação
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className={`w-full justify-start text-black ${
                pathname === "/home" && "bg-accent"
              }`}
            >
              Pagina Principal
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-black"
            >
              Comprar Créditos
            </Button>
          </div>
        </div>

        <div className="py-2">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              <h2 className="relative px-6 text-lg font-semibold tracking-tight">
                Conversas
              </h2>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ScrollArea className="h-[300px] px-2">
                <div className="space-y-1 p-2">
                  {/* {playlists?.map((playlist) => ( */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-normal"
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="flex justify-center items-center">
                        <AvatarImage
                          src={
                            "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                          }
                          alt={"kelvin"}
                          width={6}
                          height={6}
                          className="w-8 h-8 rounded-full"
                        />
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-black">
                          {"kelvin"}
                        </span>
                      </div>
                    </div>
                    {/* <ListMusic className="mr-2 h-4 w-4" /> */}
                    {/* {playlist} */}
                  </Button>
                  {/* ))} */}
                </div>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
