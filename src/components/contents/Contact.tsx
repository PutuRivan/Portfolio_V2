import React from "react";
import Header from "../utils/Header";
import Image from "next/image";
import Link from "next/link";
import { Socials } from "@/data/Contact";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full flex flex-col gap-10 items-center justify-center z-10"
    >
      <Header title="Contact" description="Get in touch with me" />
      <div className="card bg-slate-800/50 hover:bg-slate-700/50 hover:border border-blue-500 transition-all duration-300 ease-in-out w-96 z-10">
        <figure className="px-10 pt-10 z-10">
          <Image
            src="/me.png"
            alt="contact"
            width={500}
            height={500}
            className="rounded-full transition-all duration-300 ease-in-out shadow-sky-500 scale-100 hover:scale-110 z-10"
          />
        </figure>
        <div className="card-body items-center text-center gap-5">
          <h2 className="card-title text-white">Let&apos;s Connect</h2>
          <p className="text-white text-center">Check My Social Media</p>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          {Socials.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              className="z-10"
            >
              <Image
                src={social.Logo}
                alt={social.name}
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
        <div className="card-actions items-center justify-center my-5">
          <Link
            href="mailto:puturivana.d@gmail.com"
            className="btn btn-primary"
          >
            <p>Mail Me!</p>
            <CgMail size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
