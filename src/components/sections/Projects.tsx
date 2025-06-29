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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="relative rounded-2xl overflow-hidden shadow-large group cursor-pointer"
        onMouseEnter={showBackdropDetails}
        onMouseLeave={hideBackdropDetails}
      >
        {/* Project image */}
        <div className="aspect-video relative overflow-hidden">
          <Image 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
            fill 
            alt={name} 
            src={imageUrl || ""} 
            quality={100} 
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Project details overlay */}
        {showDetails && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center p-8 text-white">
            <div className="space-y-6">
              {/* Project title */}
              <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {name}
              </h3>

              {/* Project description */}
              <p className="text-lg leading-relaxed text-center text-gray-200 max-w-2xl mx-auto">
                {description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-2">
                {technologies.map((technology) => (
                  <Tag key={technology} className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                    {technology}
                  </Tag>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex justify-center gap-4 pt-4">
                <a 
                  href={websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary bg-white text-black hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a 
                  href={repositoryUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
      carousel.scroll({ behavior: "smooth", left: focusIndex * carousel.offsetWidth });
    }
  }, [focusIndex]);

  return (
    <div className="w-full">
      {/* Section header */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-secondary-400 dark:text-white max-w-3xl mx-auto">
          A showcase of my best work, demonstrating creativity, technical skills, and problem-solving abilities.
        </p>
      </div>

      {/* Project carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation buttons with better contrast */}
        {focusIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 dark:bg-secondary-800/90 shadow-large hover:bg-white dark:hover:bg-secondary-700 transition-all duration-200 flex items-center justify-center group"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 text-secondary-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {focusIndex !== PROJECTS.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 dark:bg-secondary-800/90 shadow-large hover:bg-white dark:hover:bg-secondary-700 transition-all duration-200 flex items-center justify-center group"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 text-secondary-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth"
        >
          {PROJECTS.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Project project={project} />
            </div>
          ))}
        </div>

        {/* Carousel indicators with better contrast */}
        <div className="flex justify-center mt-8 space-x-2">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setFocusIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === focusIndex
                  ? "bg-primary-600 scale-125"
                  : "bg-secondary-300 dark:bg-secondary-600 hover:bg-secondary-400 dark:hover:bg-secondary-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;