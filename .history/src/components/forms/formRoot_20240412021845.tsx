import React from "react";

interface IFormRoot {
  children: React.ReactNode;
}

function formRoot({ children }: IFormRoot) {
  return <div className="w-[20%] h-[50%] flex flex-col ">{children}</div>;
}

export default formRoot;
