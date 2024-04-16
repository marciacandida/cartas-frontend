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
        <div className="h-32">
          <Carousel className="w-full max-w-2xl">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex  items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          dolore eaque dicta quae culpa! Nostrum, blanditiis? Vitae facere
          dolore minima tempore nobis incidunt, veritatis, reiciendis veniam
          deserunt, quod architecto nemo!
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
