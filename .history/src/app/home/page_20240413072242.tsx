import Home from "@/components/screens/Home";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const page = () => {
  return (
    <main>
      <Sidebar className="w-[30%] h-screen " />
      <Home />
    </main>
  );
};

export default page;
