import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full bg-blue-950 text-white">
        <nav className="w-11/12 mx-auto flex py-5 lg:py-7 justify-start lg:justify-between items-center flex-col lg:flex-row gap-2">
          <span className="font-bold text-2xl">
            Nexora<span className="text-blue-600">.</span>
          </span>
          <ul className="flex gap-1 lg:gap-2 lg:flex-row flex-col font-semibold items-center text-sm">
            <Link
              href="/"
              className="cursor-pointer outline-0 text-mauve-400 hover:text-blue-950 hover:bg-white p-3 rounded-lg"
            >
              <li>Home</li>
            </Link>

            <Link
              href="/about"
              className="text-mauve-400 hover:text-blue-950 hover:bg-white p-3 rounded-lg cursor-pointer"
            >
              <li>About</li>
            </Link>

            <Link
              href="/services"
              className="text-mauve-400 hover:text-blue-950 hover:bg-white p-3 rounded-lg cursor-pointer"
            >
              <li>Services</li>
            </Link>

            <Link
              href="/portfolio"
              className="text-mauve-400 hover:text-blue-950 hover:bg-white p-3 rounded-lg cursor-pointer"
            >
              <li>Portfolio</li>
            </Link>

            <Link
              href="/pricing"
              className="text-mauve-400 hover:text-blue-950 hover:bg-white p-3 rounded-lg cursor-pointer"
            >
              <li>Pricing</li>
            </Link>

            <Link
              href="/contact"
              className="text-mauve-400 hover:text-blue-950 hover:bg-white p-3 rounded-lg cursor-pointer"
            >
              <li>Contact</li>
            </Link>
            <Link href="/contact">
              <button className=" text-blue-950 bg-white py-3 px-4 rounded-md cursor-pointer outline-0 border hover:border hover:bg-blue-950 hover:text-white">
                Get Started
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
