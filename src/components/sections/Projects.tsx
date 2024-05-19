import React from "react";
import Image from "next/image";
import Tag from "../components/Tag/Tag";

interface IProject {
  name: string;
  imageUrl?: string;
  description: string;
  technologies: string[];
  websiteUrl: string;
  repositoryUrl: string;
}

const PROJECTS: IProject[] = [{
  name: "Future Store",
  imageUrl: "/futureStore.jpg",
  description: "Store with future thematic made with next JS",
  technologies: ["React", "Node"],
  websiteUrl: "https://future-store-demo.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Future-Store"
}, {
  name: "Captain Launches",
  imageUrl: "/launches.png",
  description: "See upcoming Space X launches!",
  technologies: ["React", "Node"],
  websiteUrl: "https://future-store-demo.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Future-Store"
}, {
  name: "Captain Avocados",
  imageUrl: "/avocados.png",
  description: "Avocados store made with Next JS!",
  technologies: ["React", "Node"],
  websiteUrl: "captain-avocados.vercel.app",
  repositoryUrl: "https://github.com/Ricardoaar/Captain-Avocados"
}, {
  name: "Pokechems",
  imageUrl: "/pokechems.png",
  description: "Pokedex demo made with React!",
  technologies: ["React", "Node"],
  websiteUrl: "https://runchems-pokedex.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Runchems-Pokedex"
}];

const Projects = () => {
  return (
    <>
      <h3 className={"text-3xl font-bold text-center mt-2"}>
        Projects
      </h3>
      <section className={"w-full flex justify-center  align-baseline gap-8 flex-wrap py-5"}>
        {PROJECTS.map(({ websiteUrl, name, imageUrl, technologies, description, repositoryUrl }) =>

          <div
            className={"w-full flex  rounded md:shadow-xl shadow-sm md:flex-row flex-col items-center"}>
            <div className={"relative  h-[350px] md:w-[60%] w-[100%]"}>
              <Image className={"rounded"} fill alt={name} src={imageUrl || ""} quality={100} />
            </div>
            <div className={"flex flex-col  justify-center items-center px-2 mt-4 w-[40%]"}>
              <h4 className={"w-full text-center p-4 text-2xl"}>{name}</h4>

              <p className={"text-center"}>{description}</p>
              <span className={"text-center space-x-2.5 mt-2 space-y-2"}>
            <a className={"text-blue-800 inline"} href={websiteUrl} target={"_blank"}>Demo</a>
            <a className={"text-blue-800 inline"} href={repositoryUrl} target={"_blank"}>Code</a>

                <div className={"flex gap-2 justify-center  "}>
                    {technologies.map((technology) => {
                      return <Tag>{technology}</Tag>;
                    })}
                </div>

            </span>
            </div>
          </div>)}
      </section>
    </>
  );
};

export default Projects;