import React from "react";

interface IButtonProps extends React.Component<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secondary";
}

function roundButton({text, variation, ...rest}: IButtonProps) {
  return <button className={`rounded ${variation === 'primary'?   'bg-pink-700 '} `} {...rest}>roundButton</button>;
}

export default roundButton;
