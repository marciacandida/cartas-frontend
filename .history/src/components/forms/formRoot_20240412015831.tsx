import React from "react";

interface IFormRoot {
  children: React.ReactNode;
}

function formRoot({ children }: IFormRoot) {
  return <div>{children}</div>;
}

export default formRoot;
