import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { consultoriasType } from "../../../types/consultoriasType";

interface Props {
  data: consultoriasType;
}

const ConsultoriasCard = ({ data }: Props) => {
  return (
    <Card className="bg-transparent rounded-lg ">
      <CardHeader className="text-pink-800 font-semibold">
        {data.title}
      </CardHeader>
      <CardContent>
        <p className="text-sm font-light">{data.paragraph}</p>
      </CardContent>

      <CardFooter className="space-x-4">
        <p className="text-paragraph text-xs">{data.duration} horas</p>
        <div className="w-1 h-1 rounded-full bg-paragraph" />
        <p className="text-paragraph text-xs">
          {new Date(data.date).toLocaleDateString()}{" "}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ConsultoriasCard;
