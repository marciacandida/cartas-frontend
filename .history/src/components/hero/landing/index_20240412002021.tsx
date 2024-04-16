import RoundButton from "@/components/buttons/RoundButton";
import React from "react";

const LandingHero = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-10 ">
      <div className="w-1/2 space-y-8">
        <h1 className="text-6xl uppercase">
          <span className="text-pink-600">Acesse</span> a consultoria de onde{" "}
          <span className="text-pink-600">você</span> estiver!
        </h1>
        <p className="uppercase text-sm font-bold">
          registe-se na aplicação como:
        </p>
        <div className="flex space-x-5">
          <RoundButton
            text="Cliente"
            variation="primary"
            px={"60px"}
            py={"12px"}
          />
          <RoundButton
            text="Consultor"
            variation="secundary"
            px={"60px"}
            py={"12px"}
          />
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default LandingHero;
