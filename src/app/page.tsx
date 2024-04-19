import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero/landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center  ">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
