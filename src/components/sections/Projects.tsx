import React from "react";
import Image from "next/image";

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
  description: "See upcoming Space X launches! Made with NextJS",
  technologies: ["React", "Node"],
  websiteUrl: "https://future-store-demo.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Future-Store"
}, {
  name: "Captain Avocados",
  imageUrl: "/avocados.png",
  description: "Avocados store made with Next JS!",
  technologies: ["React", "Node"],
  websiteUrl: "https://future-store-demo.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Future-Store"
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
      <h3 className={"text-4xl font-bold text-center"}>
        Projects
      </h3>
      <section className={"w-full flex flex-nowrap gap-8 overflow-auto py-5"}>
        {PROJECTS.map(({ websiteUrl, name, imageUrl, technologies, description, repositoryUrl }) => <div
          className={" min-w-[300px] min-h-[400px] rounded-2xl dark:bg-indigo-900/30 shadow-2xl h-full"}>
          <h4 className={"w-full text-center p-2 text-2xl"}>{name}</h4>
          <div className={"relative w-full h-[240px]"}>
            <Image fill alt={name} src={imageUrl || ""}  quality={100}/>
          </div>
          <div className={"p-2 flex flex-col mt-3"}>
            <p className={"text-center"}>{description}</p>
            <span className={"text-center space-x-2.5"}>
            <a className={"text-blue-800 inline"} href={websiteUrl} target={"_blank"}>Demo</a>
            <a className={"text-blue-800 inline"} href={repositoryUrl} target={"_blank"}>Code</a>
            </span>
          </div>
        </div>)}
      </section>


    </>
  );
};

export default Projects;