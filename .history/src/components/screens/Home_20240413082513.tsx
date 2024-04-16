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
    <section className="flex flex-col w-full space-y-5">
      <HomeHeader />
      <section className="flex flex-col p-10 w-full">
        <div className="h-60">
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
          <span className="text-pink-800">consultores</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quas
          odio, debitis, harum vitae, suscipit nostrum facilis modi deserunt
          maiores quod. Reprehenderit magni deleniti ipsa esse accusamus!
          Repellat, accusantium nisi!
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
