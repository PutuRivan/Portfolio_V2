import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuBlocks } from "react-icons/lu";
import Header from "../utils/Header";
import CardProject from "../utils/card-project";
import CardCertificates from "../utils/card-certificates";
import CardStack from "../utils/card-stack";
import { Project } from "@/data/Project";
import { Skill_data } from "@/data/Skills";
import { Certificates } from "@/data/Certificates";

const Portofolio = () => {
  return (
    <section id="portfolio">
      <Header
        title="Portfolio Showcase"
        description="Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path."
      />
      <Tabs defaultValue="Projects" className=" flex flex-col items-center ">
        <TabsList className="flex items-center justify-center bg-transparent border-2 border-gray-800 rounded-lg p-5 ">
          <TabsTrigger value="Projects">
            <div className="flex flex-col items-center p-3 py-53  ">
              <FaCode size={32} />
              <h1>Projects</h1>
            </div>
          </TabsTrigger>
          <TabsTrigger value="Certificates">
            <div className="flex flex-col items-center p-3 py-5">
              <LiaCertificateSolid size={32} />
              <h1>Certificates</h1>
            </div>
          </TabsTrigger>
          <TabsTrigger value="Stack">
            <div className="flex flex-col items-center p-3 py-5">
              <LuBlocks size={32} />
              <h1>Tech Stack</h1>
            </div>
          </TabsTrigger>
        </TabsList>
        {/* Projects */}
        <TabsContent value="Projects">
          <div className="grid grid-cols-3 gap-5 mx-10">
            {Project.map((project) => (
              <CardProject
                key={project.id}
                id={project.id}
                Img={project.img}
                Title={project.name}
                Description={project.description}
                ProjectLink={project.link}
              />
            ))}
          </div>
        </TabsContent>
        {/* Certificates */}
        <TabsContent value="Certificates">
          <div className="grid grid-cols-3 gap-5 mx-10">
            {Certificates.map((sertif, index) => (
              <CardCertificates key={index} ImgSertif={sertif.link} />
            ))}
          </div>
        </TabsContent>
        {/* Stack */}
        <TabsContent value="Stack">
          <div className="grid grid-cols-7 gap-5 mx-10">
            {Skill_data.map((skill, index) => (
              <CardStack
                key={index}
                TechStackIcon={skill.Image}
                Language={skill.skill_name}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Portofolio;
