import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secondary";
}

function RoundButton({ text, variation, ...rest }: IButtonProps) {
  return (
    <button
      className={`rounded-full  ${
        variation === "primary" ? "bg-pink-700 " : "border border-pink-700"
      } `}
      {...rest}
    >
      {text}
    </button>
  );
}

export default RoundButton;
