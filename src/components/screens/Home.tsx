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
import HomeHeader from "../header/HomeHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const arr = [1, 2, , 3, 4, 5, 6, 8, 9, 10, 11];

const Home = () => {
  return (
    <section className="flex flex-col w-full space-y-5 text-white">
      <HomeHeader />
      <section className="flex flex-col px-10 py-2 w-full">
        <div className="h-52">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 bg-pink-800 h-52 items-center justify-center flex text-white">
                    {index + 1}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <h1 className="text-3xl my-5">
          Encontre os melhores{" "}
          <span className="text-pink-800">consultores!</span>
        </h1>
        <p className="text-sm mb-2 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quas
          odio, debitis, harum vitae, suscipit nostrum facilis modi deserunt
        </p>
        <div className="grid grid-cols-3  p-5 gap-10">
          {arr.map((arr, idx) => (
            <ConsultorCards />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
