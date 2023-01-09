import Image from "next/image";
import { getProduct } from "../api/product";
import Blog from "../components/blog";
import Contact from "../components/contact";
import HeroSection from "../components/hero";
import Footer from "../components/layout/Footer";
import ShowCase from "../components/showcase";

type Data = {
  id: number;
  name: string;
  price: number;
  quantity_available: number;
  image: string;
  vat: number;
  addons: [];
};

export default function Home({ foodData }: Data[]) {
  return (
    <div className="bg-[#F7F8FA] w-full">
      <HeroSection />
      <div className="px-[2.25rem] lg:px-[6.25rem]">
        <ShowCase foodData={foodData} />
      </div>

      <Blog />
      <div className="p-[2.25rem] lg:p-[6.25rem]">
        <Contact />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getProduct();
  if (res?.data) {
    return {
      props: {
        foodData: res.data,
      },
    };
  }

  return {
    props: { foodData: null },
  };
}
