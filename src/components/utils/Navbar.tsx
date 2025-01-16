import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-5 w-full h-[70px] fixed top-0 z-50 backdrop-blur-md shadow-lg shadow-[#1f243c]">
      <div className="flex lg:gap-10 gap-5 border border-gray-800 hover:border-blue-500 px-4 py-2 rounded-3xl">
        <Link href="#hero" className="Link-navbar">
          Home
        </Link>
        <Link href="#about" className="Link-navbar">
          About
        </Link>
        <Link href="#portfolio" className="Link-navbar">
          Portfolio
        </Link>
        <Link href="#contact" className="Link-navbar">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
