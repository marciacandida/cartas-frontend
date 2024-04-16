import React from "react";
import RoundButton from "../buttons/RoundButton";

const Header = () => {
  return (
    <div className="w-screen flex justify-between items-center py-5 px-8 text-sm fixed">
      <div>
        <p className="text-xl">
          <span className="text-pink-600">Cartas</span> Misticas
        </p>
      </div>
      <div className="flex space-x-5  text-pink-600">
        <p className="underline-animation cursor-pointer">Como funciona</p>
        <p className="underline-animation cursor-pointer">Sobre nós</p>
        <p className="underline-animation cursor-pointer">Consultores online</p>
        <p className="underline-animation cursor-pointer">
          Perguntas Frequentes
        </p>
        <p className="underline-animation cursor-pointer">Preços</p>
      </div>
      <div>
        <RoundButton text="Entrar" variation="primary" px={8} py={3} />
      </div>
    </div>
  );
};

export default Header;
