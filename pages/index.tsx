import HeroSection from "../components/hero";
import Footer from "../components/layout/Footer";
import ShowCase from "../components/showcase";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="px-[6.25rem]">
        <ShowCase />
      </div>
    </div>
  );
}
