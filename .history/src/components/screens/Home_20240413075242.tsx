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
    <section className="flex items-center justify-center p-10  ">
      <div className="grid grid-cols-3 border border-pink-800 p-5 gap-5">
        {arr.map((arr, idx) => (
          <ConsultorCards />
        ))}
      </div>
    </section>
  );
};

export default Home;
