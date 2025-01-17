import Image from "next/image";
import React from "react";
import CardAbout from "../utils/card-about";
import Header from "../utils/Header";
import { Button } from "../ui/button";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuBlocks } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="mx-20">
      <Header title="About Me" description="Transforming ideas into digital experiences" />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="order-2 md:order-1">
          <div className="font-bold text-white text-6xl">
            <span className="text-[#2196f3]">Hello, i&apos;am</span>
            <h1>Putu Rivan Anggana</h1>
          </div>
          <p className="text-gray-400 my-5 max-w-[600px] text-justify">
            a student at UPN Veteran Jakarta. I have a strong interest in
            technological advancements and am always enthusiastic about keeping
            up with the latest innovations in this field. Additionally, I am
            very passionate about sports, as I believe that maintaining a
            balance between body and mind is key to living a healthy and
            productive life.
          </p>
          <div className="flex flex-row gap-5">
            <Button size={"lg"}>Download CV</Button>
            <Button variant={"outline"} size={"lg"}>View Project</Button>
          </div>
        </div>

        <figure className="md:order-2 order-1">
          <Image src="/Me.png" alt="profile" width={500} height={500} />
        </figure>
      </div>

      <div className="flex flex-col md:flex-row md:gap-20 gap-5 my-10 items-center justify-center">
        <CardAbout
          title="Total Project"
          total={11}
          description="Innovative web Solutions crafted"
          icons={FaCode}
        />
        <CardAbout
          title="Certificate"
          total={7}
          description="Professional skills validated"
          icons={LiaCertificateSolid}
        />
        <CardAbout
          title="Years Of Experience"
          total={3}
          description="Continuous learning and growth"
          icons={LuBlocks}
        />
      </div>
    </section>
  );
};

export default About;
