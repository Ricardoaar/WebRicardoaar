"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Tag from "../components/Tag/Tag";
import { useToggle } from "@/hooks";
import { ARROW_SVG } from "@/constants/utils.icons";


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
  description: "Future Store is an innovative e-commerce platform designed to leverage the cutting-edge features of Next.js version 14. This project integrates the robust capabilities of the Shopify API to provide a seamless and efficient shopping experience. Additionally, it incorporates advanced caching techniques to ensure optimal performance and scalability.",
  technologies: ["React", "Node", "Typescript", "NextJs", "SCSS"],
  websiteUrl: "https://future-store-demo.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Future-Store"
}, {
  name: "Captain Launches",
  imageUrl: "/launches.png",
  description: "SpaceX Launch Tracker is a dynamic web application designed to provide users with up-to-date information on upcoming SpaceX launches. Leveraging the SpaceX API, this project offers real-time updates, detailed launch data, and an intuitive user interface to keep space enthusiasts informed about the latest in space exploration.",
  technologies: ["React", "Node", "Typescript", "TailwindCSS"],
  websiteUrl: "https://future-store-demo.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Future-Store"
}, {
  name: "Captain Avocados",
  imageUrl: "/avocados.png",
  description: "Avocados Store is a specialized e-commerce platform focused on providing fresh, high-quality avocados to consumers. Built with Next.js, this project utilizes modern web development technologies to deliver a fast, efficient, and user-friendly shopping experience.",
  technologies: ["React", "Node", "Typescript", "Next JS"],
  websiteUrl: "https://captain-avocados-afdlr44bi-captainrun.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Captain-Avocados"
}, {
  name: "Pokechems",
  imageUrl: "/pokechems.png",
  description: "Pokedex Demo is an interactive web application designed to provide users with comprehensive information about Pokémon. Built with React, this project offers a dynamic and engaging user interface that leverages the PokéAPI to fetch real-time data on various Pokémon species.",
  technologies: ["React", "Node"],
  websiteUrl: "https://runchems-pokedex.vercel.app/",
  repositoryUrl: "https://github.com/Ricardoaar/Runchems-Pokedex"
}];

const Project = ({ project }: { project: IProject }) => {
  const { websiteUrl, name, imageUrl, technologies, description, repositoryUrl } = project;
  const { state: showDetails, setTrue: showBackdropDetails, setFalse: hideBackdropDetails } = useToggle();

  return <div
    className={"flex justify-center rounded-xl relative items-center flex-nowrap w-full overflow-hidden"}
    onMouseOver={showBackdropDetails}
    onMouseLeave={hideBackdropDetails}>
    <div className={"md:h-[800px]  h-[400px] w-full relative"}>
      <Image className={"rounded-xl"} fill alt={name} src={imageUrl || ""} quality={100} />
    </div>

    {showDetails &&
      <div
        className={"flex-col bottom-0 text-white absolute h-full backdrop-blur-3xl backdrop-brightness-50 w-full justify-center flex"}>
        <h4 className={"w-full text-center p-4 text-2xl"}>{name}</h4>

        <p className={"text-center px-8"}>{description}</p>
        <span className={"text-center space-x-2.5 mt-2 space-y-2"}>
            <a className={"text-blue-200 inline"} href={websiteUrl} target={"_blank"}>Demo</a>
            <a className={"text-blue-200 inline"} href={repositoryUrl} target={"_blank"}>Code</a>

                <div className={"flex gap-2 justify-center  "}>
                    {technologies.map((technology) => {
                      return <Tag>{technology}</Tag>;
                    })}
                </div>

            </span>
      </div>}
  </div>;
};

const Projects: React.FC = () => {
  const [focusIndex, setFocusIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setFocusIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setFocusIndex(prevIndex => Math.min(prevIndex + 1, PROJECTS.length - 1));
  };

  React.useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      console.log({ carouselRef: carouselRef.current });
      carouselRef.current.scroll({ behavior: "smooth", left: focusIndex * carousel.offsetWidth });
    }
  }, [focusIndex]);

  return (
    <>
      <h3 className={"text-3xl font-bold text-center mt-2"}>Projects</h3>
      <div className="w-full relative">
        {focusIndex !== 0 && <button
          onClick={handlePrev}
          className="absolute left-[2px] top-1/2 p-2 rounded-full z-10 w-10 h-10 shadow-md dark:bg-blue-950 bg-sky-100"
        >
          {ARROW_SVG}
        </button>}
        <section
          ref={carouselRef}
          className={"w-full flex overflow-x-hidden"}
        >
          {PROJECTS.map((project, index) => (
            <div key={index} className={"w-full flex justify-center min-w-full"}>
              <Project project={project} />
            </div>
          ))}
        </section>
        {focusIndex !== PROJECTS.length - 1 && <button
          onClick={handleNext}
          className="absolute right-[2px] top-1/2  p-2 rounded-full dark:bg-blue-950 shadow-md bg-sky-100 w-10 h-10 rotate-180 z-10"
        >
          {ARROW_SVG}
        </button>}
      </div>
    </>
  );
};
export default Projects;