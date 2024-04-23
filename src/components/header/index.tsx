"use client";
import React from "react";
import RoundButton from "../buttons/RoundButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between items-center py-[12px] px-8 text-sm fixed border-B bg-white border-b-first shadow-md">
      <div>
        <p className="text-xl">
          <span className="text-first">Ciganos</span> Encantados
        </p>
      </div>
      <div className="flex space-x-5  text-first">
        <p className="underline-animation cursor-pointer">Como funciona</p>
        <p className="underline-animation cursor-pointer">Sobre nós</p>
        <p className="underline-animation cursor-pointer">Consultores online</p>
        <p className="underline-animation cursor-pointer">
          Perguntas Frequentes
        </p>
        <p className="underline-animation cursor-pointer">Preços</p>
      </div>
      <div>
        <RoundButton
          text="Entrar"
          variation="primary"
          px={"40px"}
          py={"10px"}
          onClick={() => router.push("/auth")}
        />
      </div>
    </div>
  );
};

export default Header;
