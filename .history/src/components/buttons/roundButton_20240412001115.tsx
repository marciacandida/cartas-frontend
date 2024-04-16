import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secundary";
  px: number;
  py: number;
}

function RoundButton({ text, variation, px, py, ...rest }: IButtonProps) {
  return (
    <button
      className={`rounded-full px-[${px}px] py-[12px]  text-sm hover:scale-110 transition-all ${
        variation === "primary"
          ? "bg-pink-600 text-white "
          : "border border-pink-700 text-pink-600"
      } `}
      {...rest}
    >
      {text}
    </button>
  );
}

export default RoundButton;
