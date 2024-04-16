import React from "react";

interface IButtonInterface extends React.Component<HTMLButtonElement> {
  text: string;
}

function roundButton() {
  return <button className="rounded ">roundButton</button>;
}

export default roundButton;
