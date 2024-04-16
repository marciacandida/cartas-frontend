import React from "react";
import RoundButton from "../buttons/roundButton";

const Header = () => {
  return (
    <div className="w-screen flex justify-between items-center py-5 px-5 text-sm text-pink-700">
      <div></div>
      <div className="flex space-x-3">
        <p>
          Como funciona <span className="divider"></span>
        </p>
        <p>Sobre nós</p>
        <p>Consultores online</p>
        <p>Perguntas Frequentes</p>
        <p>Preços</p>
      </div>
      <div>
        <RoundButton text="Entrar" variation="primary" />
      </div>
    </div>
  );
};

export default Header;
