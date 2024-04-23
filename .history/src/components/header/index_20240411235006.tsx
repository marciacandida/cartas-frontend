import React from "react";
import RoundButton from "../buttons/RoundButton";

const Header = () => {
  return (
    <div className="w-screen flex justify-between items-center py-5 px-8 text-sm">
      <div>
        <p className="text-xl">
          <span className="text-pink-600">Ciganos</span> Encantados
        </p>
      </div>
      <div className="flex space-x-5  text-pink-600">
        <p className="underline-animation">Como funciona</p>
        <p className="underline-animation">Sobre nós</p>
        <p className="underline-animation">Consultores online</p>
        <p className="underline-animation">Perguntas Frequentes</p>
        <p className="underline-animation">Preços</p>
      </div>
      <div>
        <RoundButton text="Entrar" variation="primary" />
      </div>
    </div>
  );
};

export default Header;
