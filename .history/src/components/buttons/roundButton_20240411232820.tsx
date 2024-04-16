import React from "react";

interface IButtonInterface extends React.Component<HTMLButtonElement> {
  text: string;
}

function roundButton() {
  return <button>roundButton</button>;
}

export default roundButton;
