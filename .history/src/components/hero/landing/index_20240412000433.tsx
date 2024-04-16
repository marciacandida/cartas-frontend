import RoundButton from "@/components/buttons/RoundButton";
import React from "react";

const LandingHero = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-10 ">
      <div className="w-1/2">
        <h1 className="text-7xl">
          <span className="text-pink-600">Acesse</span> a consultoria de onde
          você estiver
        </h1>
        <div className="flex">
          <RoundButton text="Entrar" variation="primary" px={10} py={3} />
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default LandingHero;
