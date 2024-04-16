import React from "react";

const Header = () => {
  return (
    <div className="w-screen bg-pink-700 flex justify-between items-center py-2 px-5 text-sm">
      <div></div>
      <div className="flex space-x-3">
        <p>Como funciona</p>
        <p>Sobre nós</p>
        <p>Consultores online</p>
        <p>Perguntas Frequentes</p>
        <p>Preços</p>
      </div>
    </div>
  );
};

export default Header;
