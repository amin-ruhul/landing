import Image from "next/image";
import Blog from "../components/blog";
import Contact from "../components/contact";
import HeroSection from "../components/hero";
import Footer from "../components/layout/Footer";
import ShowCase from "../components/showcase";

export default function Home() {
  return (
    <div className="bg-[#F7F8FA] w-full">
      <HeroSection />
      <div className="px-[2.25rem] lg:px-[6.25rem]">
        <ShowCase />
      </div>

      <Blog />
      <div className="p-[2.25rem] lg:p-[6.25rem]">
        <Contact />
      </div>
    </div>
  );
}
