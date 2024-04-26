"use client";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import useGetUsers from "@/hooks/usuGetUsers";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect } from "react";
import { useGetUser } from "@/hooks/useGetUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ISidbar {
  className?: string;
}

export function MobileView({ className }: ISidbar) {
  const { users } = useGetUsers({ query: "CLIENT" });
  const user = useGetUser();
  const otherUsers = users.filter((u) => u.id !== user.user?.id);
  const pathname = usePathname();

  const matches = useMediaQuery("only screen and (min-width: 1024px)");
  const router = useRouter();
  useEffect(() => {
    if (matches) {
      router.push(`/chat/${users[0]?.id}`);
    }
  }, [matches, router]);

  return (
    <div className={cn("pb-12 w-full")}>
      <div className="">
        <div className="absolute left-0 top-0 right-0 space-y-4 bg-white pt-4">
          <div className="py-2 px-4">
            <Link href={"/home"}>
              <p className="text-xl">
                <span className="text-first">Ciganos</span>{" "}
                <span className="text-black">Encantados </span>
              </p>
            </Link>
          </div>

          <div className="flex mx-2  items-center space-x-2 p-2 pl-4 bg-gray-100 rounded-full ">
            <SearchIcon className="w-4 h-4" />
            <input
              placeholder="Pesquisar"
              className=" bg-transparent border-none text-sm focus:border-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="p-2 mt-32">
          {otherUsers.map((user, idx) => (
            <Link
              href={`/chat/${user.id}`}
              className={`w-full flex object-cover p-2 rounded-lg transition-all hover:bg-accent ${
                pathname === `/chat/${user.id}` && "bg-accent"
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
                <AvatarFallback className="">{`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}</AvatarFallback>
              </Avatar>
              <div className="ml-2 w-[80%] sm:w-[85%] md:w-[90%]  lg:w-[95%]">
                <h1 className="font-medium text-black text-start text-[15px]  ">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="truncate text-xs text-paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  nesciunt, sint hic ducimus consectetur veniam quidem, at optio
                  ratione eaque ex magni impedit saepe laudantium! Architecto
                  repellat corporis est quod.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
