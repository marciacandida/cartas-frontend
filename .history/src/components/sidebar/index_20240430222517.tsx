"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useGetUsers from "@/hooks/usuGetUsers";
import { useGetUser } from "@/hooks/useGetUser";
import { useState } from "react";
import { useGetRooms } from "@/hooks/useGetRooms";

interface ISidbar {
  className?: string;
}

export function Sidebar({ className }: ISidbar) {
  const { users } = useGetUsers({ query: "CLIENT" });
  const pathname = usePathname();
  const user = useGetUser();
  const otherUsers = users.filter((u) => u.id !== user.user?.id);
  const { rooms } = useGetRooms();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUsers = otherUsers.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 z-0 pb-12 w-64 border-r border-first  bg-white max-lg:hidden"
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
              className={`w-full font-medium text-sm text-black flex object-cover py-2 px-2 rounded-lg transition-all hover:bg-accent ${
                pathname === "/home" && "bg-accent"
              }`}
            >
              Pagina Principal
            </Link>
            <Link
              href={"/pricing"}
              className={`w-full font-medium text-sm text-black flex object-cover py-2 px-2  rounded-lg transition-all hover:bg-accent ${
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
            value={searchQuery}
            onChange={handleSearchChange}
            className=" bg-transparent border-none text-sm focus:border-transparent focus:outline-none"
          />
        </div>
        <div className="">
          <h2 className="relative px-7 text-xs font-semibold tracking-tight text-first">
            Conversas
          </h2>
          <div className="p-2">
            {rooms.map((room, idx) => {
              const type = user.user?.type;
              return (
                <Link
                  href={`/chat/${
                    type === "CLIENT" ? room.consultor.id : room.client.id
                  }`}
                  className={`w-full h-14 flex object-cover p-2 rounded-lg transition-all hover:bg-accent ${
                    pathname === `/chat/${room.consultor.id}` && "bg-accent"
                  }`}
                  key={idx}
                >
                  <Avatar>
                    <AvatarImage
                      // src={
                      //   "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                      // }
                      alt="foto de perfil"
                      className="object-cover w-9 h-9 rounded-full z-10"
                    ></AvatarImage>
                    <AvatarFallback className="">{`${
                      type === "CLIENT"
                        ? room.consultor.firstName[0].toUpperCase()
                        : room.client.firstName[0].toUpperCase()
                    }${
                      type === "CLIENT"
                        ? room.consultor.lastName[0].toUpperCase()
                        : room.client.lastName[0].toUpperCase()
                    }`}</AvatarFallback>
                  </Avatar>
                  <div className="ml-2 w-44">
                    <h1 className="font-medium text-black text-start text-[15px]">
                      {type === "CLIENT"
                        ? room.consultor.firstName
                        : room.client.firstName + " " + type === "CLIENT"
                        ? room.consultor.lastName
                        : room.client.firstName}
                    </h1>
                  </div>
                  {/* <ListMusic className="mr-2 h-4 w-4" /> */}
                  {/* {playlist} */}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
