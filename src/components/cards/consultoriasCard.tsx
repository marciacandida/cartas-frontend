import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const ConsultoriasCard = () => {
  return (
    <Card className="bg-transparent rounded-lg">
      <CardHeader className="text-pink-800 font-semibold">
        Lorem ipsum, dolor sit
      </CardHeader>
      <CardContent>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ex
          deserunt quae. Adipisci laborum unde earum atque nobis cupiditate
          illo? Vel molestiae repellendus dolorum sint deleniti corrupti fuga
          obcaecati magni.
        </p>
      </CardContent>
      <CardFooter className="space-x-4">
        <p className="text-paragraph text-xs">30min</p>
        <div className="w-1 h-1 rounded-full bg-paragraph" />
        <p className="text-paragraph text-xs">19/04/2024</p>
      </CardFooter>
    </Card>
  );
};

export default ConsultoriasCard;
