import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Skill_data } from "@/data/Skills";
import CTA from "../utils/CTA";
import CardStackDetail from "../utils/card-stack-detail";
import { ExternalLink } from "lucide-react";

interface Props {
  technologies: number[];
  title: string;
  description: string;
  image: string;
  features: string[];
  role: string;
}

const ProjectDetail = ({
  features,
  technologies,
  title,
  description,
  image,
  role,
}: Props) => {
  // Map technologies ID to Skill_data
  const tech = technologies
    .map((data) => Skill_data.find((item) => item.id === data))
    .filter((item) => item !== undefined); // Filter to remove undefined

  return (
    <section className="z-50 ">
      <CTA />

      <div className="z-50 grid grid-cols-2 gap-5">
        <div className="z-50 flex flex-col gap-5">
          <div className="z-50 flex flex-col gap-5">
            <h1 className="z-50 text-4xl font-bold">{title}</h1>
            <p className="text-justify">{description}</p>
          </div>
          <div>
            <h1 className="z-50 text-3xl font-bold my-2">Technologies :</h1>

            <div className="z-50 flex flex-wrap gap-5">
              {tech.map((item, index) => (
                <CardStackDetail
                  key={index}
                  TechStackIcon={item.Image}
                  Language={item.skill_name}
                />
              ))}
            </div>
          </div>
          <div className="z-50 flex flex-row gap-5 justify-center">
            <Button size={"lg"}>
              <Image
                src="/Contact/gitwhite.png"
                alt="github"
                width={20}
                height={20}
              />
              <p>Github</p>
            </Button>
            <Button variant={"outline"} size={"lg"}>
              <ExternalLink size={24} />
              <p>Live Demo</p>
            </Button>
          </div>
        </div>

        <div className="flex items-start flex-col justify-start">
          <figure className="z-50">
            <Image src={image} alt={title} width={700} height={700} className="z-50 rounded-3xl hover:rounded-xl scale-100 hover:scale-105 transition-all duration-300 "/>
          </figure>
          <div className="my-5 flex flex-col gap-5">
            <h1>
              <span className="font-bold text-xl">Role :</span> {role}
            </h1>
            <ul className="list-disc">
              <h1 className="text-2xl font-bold"> Feature</h1>
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
