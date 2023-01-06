import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex items-center py-[5rem] justify-between bg-[#0C1712] px-[6.25rem]">
      <div className="text-[#ffffff]">
        <h1 className="text-[4.375rem] landing-[5.125rem] ">
          Authentic Home <br /> food in UK
        </h1>
        <p>
          What2Eat is a courier service in which authentic home cook <br /> food
          is delivered to a customer.
        </p>
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
