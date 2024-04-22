import React, { ReactNode } from "react";

interface IProvider {
  children: ReactNode;
}

const reduxProvider = ({ children }: IProvider) => {
  return <div>{children}</div>;
};

export default reduxProvider;
