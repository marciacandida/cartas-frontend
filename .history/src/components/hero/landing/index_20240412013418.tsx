import RoundButton from "@/components/buttons/RoundButton";
import Image from "next/image";
import React from "react";

const LandingHero = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-20 ">
      <div className="w-1/2 space-y-8">
        <h1 className="text-6xl uppercase">
          <span className="text-pink-600">Acesse</span> a consultoria de onde{" "}
          <span className="text-pink-600">você</span> estiver!
        </h1>
        <p>Fale 10 min por apenas 10.00 reais</p>
        <p className="uppercase text-sm">registe-se na aplicação como:</p>
        <div className="flex space-x-5">
          <RoundButton
            text="Cliente"
            variation="primary"
            px={"80px"}
            py={"12px"}
          />
          <RoundButton
            text="Consultor"
            variation="secundary"
            px={"80px"}
            py={"12px"}
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center ">
        <Image
          src={"/landing.png"}
          width={300}
          height={500}
          alt="surprised woman"
        />
      </div>
    </div>
  );
};

export default LandingHero;
