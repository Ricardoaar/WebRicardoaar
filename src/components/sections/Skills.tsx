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
  return <GrowOnHover
    className={"md:w-32 w-20"} aria-label={`Skill: ${skill.name}`}>  {skill.icon} {skill.name}</GrowOnHover>;
});


const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState<SkillCategory>("backend");
  const selectedSkills = skills[selectedSkill];

  return <>
    <h3 className={"text-3xl font-bold text-center mt-2"}>Skills</h3>
    <FadeInDiv delay={AnimationTiming.SKILLS.duration}
               duration={AnimationTiming.SKILLS.duration}
               className={"w-full justify-center flex flex-col items-center pt-10  md:pt-0"}>


      <nav className={"dark:bg-indigo-900/20  shadow-md w-full max-w-4xl py-4"}>
        <ul className={"flex justify-evenly items-center w-full text-center"}>
          <li>
            <GrowOnHover>
              <button aria-label={"View backend skills"}
                      className={selectedSkill === SkillCategoryEnum.BACKEND ? "font-black text-xl" : ""}
                      onClick={() => setSelectedSkill("backend")}>Backend
              </button>
            </GrowOnHover>
          </li>
          <li>
            <GrowOnHover>
              <button
                aria-label={"View frontend skills"}
                className={selectedSkill === SkillCategoryEnum.FRONTEND ? "font-black text-xl" : ""}

                onClick={() => setSelectedSkill("frontend")}>Frontend
              </button>
            </GrowOnHover>
          </li>
          <li>
            <GrowOnHover>
              <button
                aria-label={"View others skills"}
                className={selectedSkill === SkillCategoryEnum.OTHERS ? "font-black text-xl" : ""}
                onClick={() => setSelectedSkill("others")}>Others
              </button>
            </GrowOnHover>
          </li>
        </ul>
      </nav>

      <div
        className={"gap-10 overflow-y-scroll pt-2 grid grid-cols-2 md:grid-cols-3 shadow-md text-center place-items-center w-full max-w-4xl pb-8 dark:bg-indigo-950/10 md:h-96 h-[27rem] "}>
        {selectedSkills.map((skill) => {
          return <Skill skill={skill} key={skill.name} />;
        })}
      </div>
    </FadeInDiv>
  </>;

};

const OptimizedSkills = React.memo(Skills);

export default OptimizedSkills;