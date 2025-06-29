"use client";
import React from "react";
import { EXPERIENCES, IExperience } from "@/constants/experiences";
import Link from "next/link";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";
import GrowOnHover from "@/components/animations/GrowOnHover";
import { ARROW_SVG } from "@/constants/utils.icons";
import { Tag } from "@/components/components/Tag";

const Experience = ({ experience, index }: { experience: IExperience, index: number }) => {
  const { company, website, title, years, description, technologies } = experience;

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-300 dark:from-primary-500 dark:to-secondary-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 shadow-glow"></div>
      
      {/* Experience card */}
      <div className="ml-16 mb-12">
        <GrowOnHover>
          <div className="card-hover p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <Link 
                    className="group" 
                    aria-label={`Visit ${company} page`} 
                    href={website} 
                    target="_blank"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {company}
                    </h3>
                  </Link>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mt-1">
                    {title}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {years}
                  </span>
                </div>
              </div>

              {/* Description with better contrast */}
              <p className="text-secondary-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {description}
              </p>

              {/* Technologies with better contrast */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Tag key={technology} className="bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">
                    {technology}
                  </Tag>
                ))}
              </div>

              {/* External link indicator with better contrast */}
              <div className="mt-6">
                <Link 
                  href={website}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  <span>Visit company</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </GrowOnHover>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="text-center space-y-6 my-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary">
          Professional Experience
        </h2>
        <p className="text-lg md:text-xl text-secondary-400 dark:text-white max-w-3xl mx-auto">
          My journey through various roles and companies, building expertise and delivering value.
        </p>
      </div>

      <FadeInDiv
        delay={AnimationTiming.EXPERIENCE.delay}
        duration={AnimationTiming.EXPERIENCE.duration}
        className="w-full max-w-5xl mx-auto"
      >
        {/* Timeline container */}
        <div className="relative">
          {EXPERIENCES.map((experience, index) => (
            <Experience 
              key={experience.title} 
              experience={experience} 
              index={index}
            />
          ))}
          
          {/* Timeline end cap */}
          <div className="absolute left-6 bottom-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 shadow-glow"></div>
        </div>

    
      </FadeInDiv>
    </div>
  );
};

export default Experiences;