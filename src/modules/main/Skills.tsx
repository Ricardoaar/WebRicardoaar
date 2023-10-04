"use client";
import React, { useState } from "react";
import { ISkill, SkillCategory } from "@/constants/skills/types";
import { skills } from "@/constants/skills";

interface ISkillProps {
  skill: ISkill;
}


const Skill = ({ skill }: ISkillProps) => {
  return <div className={"md:w-32 w-20"}>  {skill.icon} {skill.name}</div>;
};


const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState<SkillCategory>("backend");
  const selectedSkills = skills[selectedSkill];

  return <section className={"w-full justify-center flex flex-col items-center pt-10  md:pt-0"}>


    <nav className={"bg-indigo-900/20 shadow-2xl w-full max-w-4xl py-4 "}>
      <ul className={"flex justify-evenly items-center w-full text-center"}>
        <li>
          <button onClick={() => setSelectedSkill("backend")}>Backend</button>
        </li>
        <li>
          <button onClick={() => setSelectedSkill("frontend")}>Frontend</button>
        </li>
        <li>
          <button onClick={() => setSelectedSkill("others")}>Others</button>
        </li>
      </ul>
    </nav>

    <div
      className={"gap-10 overflow-y-scroll pt-2 grid grid-cols-2 md:grid-cols-3 shadow-2xl text-center place-items-center w-full max-w-4xl pb-8 bg-indigo-950/10 md:h-96 h-[27rem] "}>
      {selectedSkills.map((skill) => {
        return <Skill skill={skill} />;
      })}
    </div>


  </section>;
};

export default Skills;