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
    <section className="flex flex-col w-full">
      <HomeHeader />
      <section className="flex flex-col p-10 w-full">
        <h1 className="text-4xl">Encontrar consultores</h1>
        <div className="h-60">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 bg-pink-800 h-52"></div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

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
