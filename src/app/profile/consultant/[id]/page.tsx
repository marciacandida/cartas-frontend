import ConsultorProfile from "@/components/Profile/Consultor";
import Footer from "@/components/footer";
import HomeHeader from "@/components/header/HomeHeader";
import { HomeSidebar } from "@/components/sidebar/homeSideBar";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <HomeHeader />
      <HomeSidebar />
      <ConsultorProfile user_id={params.id} />
      <Footer />
    </main>
  );
};

export default page;
