import { SearchIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useGetUsers from "@/hooks/usuGetUsers";
import { useGetUser } from "@/hooks/useGetUser";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";

const Search = () => {
  const { users } = useGetUsers({ query: "CLIENT" });
  const user = useGetUser();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false); // Initial state for dropdown menu

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOpen(true);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const router = useRouter();

  return (
    <DropdownMenu open={open} modal={false}>
      <div
        ref={dropdownRef}
        className="relative max-w-sm items-center flex space-x-2 p-2 pl-4 bg-gray-100 rounded-full max-md:hidden"
      >
        <DropdownMenuTrigger onClick={() => setOpen(true)}>
          <SearchIcon className="w-4 h-4" />
        </DropdownMenuTrigger>
        <input
          placeholder="Pesquisar"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          className="bg-transparent border-none text-xs py-0.5 focus:border-transparent focus:outline-none"
        />
        {searchQuery !== "" && (
          <DropdownMenuContent ref={dropdownRef} className=" mt-2 ml-44">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, idx) => (
                <Link
                  href={`/chat/${user.id}`}
                  className={`w-full h-14 flex object-cover p-2 rounded-lg transition-all hover:bg-accent`}
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/chat/${user.id}`); // Navigate to the chat URL
                  }}
                >
                  <Avatar>
                    <AvatarImage
                      alt="foto de perfil"
                      className="object-cover w-7 h-7 rounded-full z-10"
                    />
                    <AvatarFallback className="text-xs">{`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}</AvatarFallback>
                  </Avatar>
                  <div className="ml-2 w-44 flex items-center">
                    <h1 className="font-medium text-black text-start text-xs">
                      {user.firstName} {user.lastName}
                    </h1>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-500">Usuário não encontrado</p>
            )}
          </DropdownMenuContent>
        )}
      </div>
    </DropdownMenu>
  );
};

export default Search;
