"use client";

import RoundButton from "@/components/buttons/RoundButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LandingHero = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-20 space-x-5 ">
      <div className="w-1/2 space-y-8">
        <h1 className="text-6xl uppercase">
          <span className="text-first">Acesse</span> a consultoria de onde{" "}
          <span className="text-first">você</span> estiver!
        </h1>
        <p className="text-xl">
          Converse com um dos nossos profissionais por R$ 1,99/min.
        </p>
        <p className="uppercase text-sm text-paragraph">
          registe-se na aplicação como
        </p>
        <div className="flex space-x-5">
          <RoundButton
            text="Cliente"
            variation="primary"
            px={"80px"}
            py={"12px"}
            onClick={() => router.push("/auth")}
          />
          <RoundButton
            text="Consultor"
            variation="secundary"
            px={"80px"}
            py={"12px"}
            onClick={() => router.push("/auth")}
          />
        </div>
      </div>
      <div className="w-[450px] h-[450px] flex items-center justify-center bg-pink-100 rounded-full overflow-hidden">
        <img
          src="/landing.png"
          width={300}
          height={500}
          alt="surprised woman"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LandingHero;
