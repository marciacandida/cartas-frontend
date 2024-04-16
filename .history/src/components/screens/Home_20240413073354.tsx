import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Home = () => {
  return (
    <section className="flex items-center justify-center ">
      <div className="grid grid-cols-3">
        <Card className="w-[300px] ">
          <CardHeader className="p-0 ">
            <img
              src="https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
              alt=""
              className="object-contain"
            />
          </CardHeader>
          <CardContent>
            <p className="text-xl">kelvin Celso</p>
          </CardContent>
          <CardDescription className="px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aliquid eligendi, porro sunt, soluta facilis voluptas molestias
              itaque natus, repellat voluptatum delectus! Deleniti, cum!
              Suscipit molestias consequuntur accusamus facilis officia.
            </p>
          </CardDescription>
        </Card>
      </div>
    </section>
  );
};

export default Home;
