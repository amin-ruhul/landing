import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-[#0C1712] x-[2.25rem] md:px-[6.25rem] space-y-4 pb-4 md:space-y-0 md-pb-0">
      <div>
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={128}
          height={56}
        />
      </div>
      <ul className="text-white text-[1.125rem] flex items-center space-x-[1.5rem] lg:space-x-[2.5rem]">
        <li>
          <Link href={"/"}>Home</Link>{" "}
        </li>
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
        <Link href="/checkout">
          <div>
            <Image
              src="/assets/icons/cart.svg"
              alt="logo"
              width={22}
              height={22}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
