import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col  md:flex-row md:items-center py-[5rem] justify-between bg-[#0C1712] px-[2.25rem] lg:px-[6.25rem]">
      <div className="w-full text-[#ffffff] mb-[4rem] lg:mb-0">
        <h1 className="text-[2.375rem]  md:text-[4.375rem] landing-[2.125rem] md:landing-[5.125rem] ">
          Authentic Home <br /> food in UK
        </h1>
        <p>
          What2Eat is a courier service in which authentic home cook <br /> food
          is delivered to a customer.
        </p>
        <div className="rounded-[0.625rem] w-full mt-[2.5rem]">
          <input
            type="text"
            placeholder="Search food you love"
            className="py-[1.188rem] border-0  outline-none text-black w-[70%] md:w-[70%] lg:w-[40%]  px-[1rem] rounded-l-[0.625rem]"
          />
          <button className="py-[1.188rem] px-[1rem] md:px-[1.813rem] bg-[#F3BA00] rounded-r-[0.625rem]">
            Search
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/cuate.svg"
          alt="hero-image"
          width={562}
          height={562}
        />
      </div>
    </section>
  );
}

export default HeroSection;
