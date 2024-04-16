import React from "react";

interface IButtonInterface extends React.Component<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secondary";
}

function roundButton() {
  return <button className="rounded bg">roundButton</button>;
}

export default roundButton;
