import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secundary";
  px: string;
  py: string;
}

function RoundButton({ text, variation, px, py, ...rest }: IButtonProps) {
  return (
    <button
      style={{
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }}
      className={`rounded-full text-sm hover:scale-110 transition-all ${
        variation === "primary"
          ? " text-white "
          : "border border-pink-700 text-pink-600 hover:bg-pink-600 hover:text-white"
      } `}
      {...rest}
    >
      {text}
    </button>
  );
}

export default RoundButton;
