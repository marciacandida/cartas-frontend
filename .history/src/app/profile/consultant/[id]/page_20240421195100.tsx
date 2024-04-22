import ConsultorProfile from "@/components/Profile/Consultor";
import Footer from "@/components/footer";
import HomeHeader from "@/components/header/HomeHeader";
import Home from "@/components/screens/Home";
import { Sidebar } from "@/components/sidebar";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <HomeHeader />
      <ConsultorProfile user_id={params.id} />
      <Footer />
    </main>
  );
};

export default page;
