import Image from "next/image";
import Logo from "./logo.png";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#1e293b] py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          alt="Rocket"
          className="h-8 w-8"
          src={Logo}
          height={32}
          width={32}
        />
        <h1 className="text-2xl font-bold">Interplanetary Delivery</h1>
      </div>
      <nav className="flex items-center gap-4">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/#products">
          Products
        </Link>
        <Link className="hover:underline" href="/#delivery">
          Delivery
        </Link>
        <Link className="hover:underline" href="/#about">
          About
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link
          className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]"
          href="/cart"
        >
          Cart
        </Link>
        <Link
          className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]"
          href="/login"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
