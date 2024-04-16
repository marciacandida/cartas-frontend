import Home from "@/components/screens/Home";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const page = () => {
  return (
    <main className="flex w-screen bg-hero-pattern">
      <Sidebar className="w-[30%] h-screen  bg-white" />
      <Home />
    </main>
  );
};

export default page;
