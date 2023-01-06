import Image from "next/image";

function Footer() {
  return (
    <section className="bg-[#1AC073]">
      <div className="text-[#ffffff] px-[6.25rem]">
        <footer className=" flex items-center justify-between   py-[2.188rem]">
          <div className="text-[1.5rem] font-semibold landing-[1.25rem]">
            WHAT2EAT
          </div>
          <ul className="text-white text-[1.125rem] flex items-center space-x-[2.5rem]">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center space-x-[.5rem]">
            <Image
              src="/assets/icons/facebook.svg"
              alt="logo"
              width={17}
              height={17}
            />

            <Image
              src="/assets/icons/instra.svg"
              alt="logo"
              width={17}
              height={17}
            />
          </div>
        </footer>
        <div className="border-b"></div>
        <div className="text-center text-[0.75rem] py-[1rem]">
          Copyright @2021 What2Eat
        </div>
      </div>
    </section>
  );
}

export default Footer;
