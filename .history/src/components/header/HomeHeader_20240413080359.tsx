"use client";
import React from "react";
import RoundButton from "../buttons/RoundButton";
import { useRouter } from "next/navigation";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-between items-center py-5 px-8 text-sm border border-b-pink-800 ">
      <div>
        <p className="text-xl">
          <span className="text-pink-800">Cartas</span> Misticas
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
      <div>
        <RoundButton
          text="Entrar"
          variation="primary"
          px={"40px"}
          py={"12px"}
          onClick={() => router.push("/auth")}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
