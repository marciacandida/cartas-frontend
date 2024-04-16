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
      className={`rounded-lg text-sm hover:scale-110 transition-all ${
        variation === "primary"
          ? "bg-first text-white "
          : "border border-first text-first hover:bg-first hover:text-white"
      } `}
      {...rest}
    >
      {text}
    </button>
  );
}

export default RoundButton;
