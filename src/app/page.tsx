"use client";
import About from "@/components/contents/About";
import Contact from "@/components/contents/Contact";
import Hero from "@/components/contents/Hero";
import Portofolio from "@/components/contents/Portofolio";
import Navbar from "@/components/utils/Navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col my-44 gap-32 z-10">
        <Hero />
        <About />
        <Portofolio />
        <Contact />
      </main>
    </>
  );
};

export default Home;
