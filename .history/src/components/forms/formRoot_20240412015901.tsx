import React from "react";

interface IFormRoot {
  children: React.ReactNode;
}

function formRoot({ children }: IFormRoot) {
  return <div className="w-[30%] h-[50%]">{children}</div>;
}

export default formRoot;
