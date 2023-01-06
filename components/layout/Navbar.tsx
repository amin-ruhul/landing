import Image from "next/image";

function Navbar() {
  return (
    <nav className=" flex items-center justify-between">
      <div>
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={128}
          height={56}
        />
      </div>
      <ul className="text-white text-[1.125rem] flex items-center space-x-[2.5rem]">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center space-x-[2.5rem]">
        <Image
          src="/assets/icons/search.svg"
          alt="logo"
          width={22}
          height={22}
        />

        <Image src="/assets/icons/cart.svg" alt="logo" width={22} height={22} />
      </div>
    </nav>
  );
}

export default Navbar;
