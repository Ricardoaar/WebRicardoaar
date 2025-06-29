"use client";
import React, { useState } from "react";
import { ISkill, SkillCategory, SkillCategoryEnum } from "@/constants/skills/types";
import { skills } from "@/constants/skills";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";
import GrowOnHover from "@/components/animations/GrowOnHover";

interface ISkillProps {
  skill: ISkill;
}

const Skill = React.memo(({ skill }: ISkillProps) => {
  return (
    <GrowOnHover className="w-full">
      <div className="card-hover p-6 text-center group cursor-pointer">
        <div className="flex flex-col items-center space-y-4">
          {/* Skill icon with enhanced styling */}
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 group-hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 md:w-10 md:h-10 text-primary-600 dark:text-primary-400">
              {skill.icon}
            </div>
          </div>
          
          {/* Skill name with better typography and contrast */}
          <h4 className="font-semibold text-secondary-900 dark:text-gray-200 text-sm md:text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {skill.name}
          </h4>
        </div>
      </div>
    </GrowOnHover>
  );
});

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory>("backend");
  const selectedSkills = skills[selectedSkill];

  const categories = [
    { key: "backend" as SkillCategory, label: "Backend", icon: "⚙️" },
    { key: "frontend" as SkillCategory, label: "Frontend", icon: "🎨" },
    { key: "others" as SkillCategory, label: "Others", icon: "🛠️" },
  ];

  return (
    <div className="w-full my-">
      {/* Section header */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary">
          Skills & Technologies
        </h2>
        <p className="text-lg md:text-xl text-secondary-400 dark:text-white max-w-3xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
        </p>
      </div>

      <FadeInDiv 
        delay={AnimationTiming.SKILLS.duration}
               duration={AnimationTiming.SKILLS.duration}
        className="w-full mt-4"
      >
        {/* Enhanced category navigation with better contrast */}
        <div className="flex justify-center mb-12">
          <nav className="glass-card rounded-2xl p-2 shadow-soft">
            <ul className="flex space-x-2">
              {categories.map((category) => (
                <li key={category.key}>
            <GrowOnHover>
              <button
                      aria-label={`View ${category.label.toLowerCase()} skills`}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                        selectedSkill === category.key
                          ? "bg-primary-600 text-white shadow-glow"
                          : "text-secondary-700 dark:text-gray-300 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                      }`}
                      onClick={() => setSelectedSkill(category.key)}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.label}</span>
              </button>
            </GrowOnHover>
          </li>
              ))}
        </ul>
      </nav>
        </div>

        {/* Skills grid with enhanced layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {selectedSkills.map((skill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>

        
    </FadeInDiv>
    </div>
  );
};

const OptimizedSkills = React.memo(Skills);

export default OptimizedSkills;