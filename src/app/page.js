import Footer from "@/components/Footer";
import Blog from "@/components/Home/Blog";
import Explore from "@/components/Home/Explore";
import Hero from "@/components/Home/Hero";
import Publish from "@/components/Home/Publish";
import Suscribe from "@/components/Home/Suscribe";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="w-full  max-w-[1300px] mx-auto">
        <Hero />
        <Explore />
        <Publish />
        <Blog />
        <Suscribe />
        <Footer />
      </div>
    </main>
  );
}
