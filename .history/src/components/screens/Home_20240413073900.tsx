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
        <Card className="w-[300px] bg-pink-800">
          <CardHeader className="p-0 h-48">
            <img
              src="https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
              alt=""
              className="object-cover w-full h-48"
            />
          </CardHeader>
          <CardContent className="text-white">
            <p className="text-xl mt-2">kelvin Celso</p>
            <p className="text-lg">Software developer</p>
            <p className="text-sm text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aliquid eligendi, porro sunt, soluta facilis voluptas molestias
              itaque natus, repellat voluptatum delectus! Deleniti, cum!
              Suscipit molestias consequuntur accusamus facilis officia.
            </p>
          </CardContent>
          <CardDescription className="px-5"></CardDescription>
        </Card>
      </div>
    </section>
  );
};

export default Home;
