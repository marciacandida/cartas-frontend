import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import ConsultorCards from "../cards/consultorCards";

const arr = [1, 2, , 3, 4, 5, 6, 8, 9, 10, 11];

const Home = () => {
  return (
    <section className="flex flex-col   p-10  ">
      <h1 className="text-4xl">Encontrar consultores</h1>
      <div className="grid grid-cols-3  p-5 gap-10">
        {arr.map((arr, idx) => (
          <ConsultorCards />
        ))}
      </div>
    </section>
  );
};

export default Home;
