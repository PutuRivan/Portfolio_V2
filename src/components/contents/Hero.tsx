import { Socials } from "@/data/Contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiShootingStarFill } from "react-icons/pi";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section id="hero" className="py-44 flex flex-col items-center justify-center">
      {/* Badge */}
      <div className="flex flex-row gap-3 border border-[#fff] px-6 py-3 rounded-xl opacity-[0.9] ">
        <PiShootingStarFill size={24} fill="#2196f3" />
        <h1 className="text-white">Fullstack Developer</h1>
      </div>
      {/* Title */}
      <div className="flex flex-col gap-4 text-3xl lg:text-6xl justify-center mt-5">
        <div className="flex flex-row gap-4">
          <h1 className="text-white font-bold">Exploring</h1>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Technology,
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <h1 className="text-white font-bold">Embracing</h1>
          <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Innovation,
          </span>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg text-gray-400 my-5 max-w-[600px] text-center mx-2 md:mx-0">
          I&apos;m a dedicated student with a passion for technological
          advancements and fitness. Discover my journey and projects
        </p>
      </div>
      {/* Social */}
      <div className="flex flex-row gap-5 z-10">
        {Socials.map((social, index) => (
          <Link key={index} href={social.link} target="_blank">
            <Image src={social.Logo} alt={social.name} width={35} height={35} />
          </Link>
        ))}
      </div>
      {/* More Button */}
      <div className="my-5 z-10 flex flex-row gap-5">
        <Button variant={"outline"} size={"lg"}>
          <Link href={"#about"}>More About</Link>
        </Button>
        <Button  size={"lg"} className="px-11">
          <Link href={"#portfolio"}>Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
