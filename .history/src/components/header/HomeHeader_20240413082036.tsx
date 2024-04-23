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
    <div className="w-full flex justify-between items-center py-5 px-8 text-sm border border-b-pink-800 ">
      <div>
        <p className="text-xl">
          <span className="text-pink-800">Ciganos</span> Encantados
        </p>
      </div>
      <div className="flex space-x-5  text-pink-800">
        <p className="underline-animation cursor-pointer">Como funciona</p>
        <p className="underline-animation cursor-pointer">Sobre nós</p>
        <p className="underline-animation cursor-pointer">Consultores online</p>
        <p className="underline-animation cursor-pointer">
          Perguntas Frequentes
        </p>
        <p className="underline-animation cursor-pointer">Preços</p>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="pesquisar" />
        <Button type="submit" className="bg-pink-800">
          <SearchIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default HomeHeader;
