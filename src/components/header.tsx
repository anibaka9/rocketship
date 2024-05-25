import Image from "next/image";
import Logo from "./logo.png";
import Link from "next/link";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="bg-[#1e293b] py-4 px-6 flex items-center justify-between gap-4">
      <Link className="flex items-center gap-2" href="/">
        <Image
          alt="Rocket"
          className="h-8 w-8 rounded"
          src={Logo}
          height={32}
          width={32}
        />
        <h1 className="text-2xl font-bold">Interplanetary Delivery</h1>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca] md:hidden">
            Menu
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="bg-[#1e293b] text-white">
          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="hover:underline" href="/products">
                Products
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="hover:underline" href="/delivery">
                Delivery
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </SheetClose>
            <div className="flex items-center gap-2">
              <SheetClose asChild>
                <Link
                  className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]"
                  href="/cart"
                >
                  Cart
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]"
                  href="/login"
                >
                  Login
                </Link>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden md:flex items-center gap-4">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/products">
          Products
        </Link>
        <Link className="hover:underline" href="/delivery">
          Delivery
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="hidden md:flex items-center gap-2">
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
