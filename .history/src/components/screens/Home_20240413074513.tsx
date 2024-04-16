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
          <CardContent className="text-white space-y-2">
            <p className="text-xl mt-2 font-bold uppercase">kelvin Celso</p>
            <p className="text-md bg-white text-pink-800">Software developer</p>
            <p className="text-sm text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            </p>
          </CardContent>
          <CardFooter className="w-full flex items-center justify-center">
            <Button variant={"default"} className="w-[80%]">
              Ver perfil
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Home;
