"use client";
import React from "react";
import RoundButton from "../buttons/RoundButton";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between items-center py-5 px-8 text-sm border border-b-pink-800 bg-white ">
      <div></div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="pesquisar" />
        <Button type="submit" className="bg-first">
          <SearchIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default HomeHeader;
