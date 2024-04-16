import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secondary";
}

function RoundButton({ text, variation, ...rest }: IButtonProps) {
  return (
    <button
      className={`rounded-full px-10 py-3 text-sm hover:scale-110${
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
