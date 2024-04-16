import React from "react";

interface IFormRoot {
  children: React.ReactNode;
}

function formRoot({ children }: IFormRoot) {
  return (
    <div className="w-[30%] h-[50%] flex flex-col border border-slate-500 p-10 rounded-lg">
      {children}
    </div>
  );
}

export default formRoot;
