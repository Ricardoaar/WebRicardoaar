"use client";
import React, { useEffect, useRef } from "react";
import { EXPERIENCES, IExperience } from "@/constants/experiences";
import Link from "next/link";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";
import GrowOnHover from "@/components/animations/GrowOnHover";
import { ARROW_SVG } from "@/constants/utils.icons";
import { Tag } from "@/components/components/Tag";


type ManageButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  rotate?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const ManageButton = ({ children, rotate = false, ...buttonProps }: ManageButtonProps) => {
  return <GrowOnHover>
    <button {...buttonProps} className={`w-12 flex-none ${rotate && "rotate-180"}`}>
      {children}
    </button>
  </GrowOnHover>;

};

const Experience = ({ experience, className, odd = false }: {
  experience: IExperience,
  className: string,
  odd: boolean
}) => {
  const { company, website, title, years, description, technologies } = experience;

  return <div
    className={`flex flex-col gap-4 flex-grow ${className} overflow-x-auto ${!odd ? "text-right" : "text-left"}`}>
    <Link className={"w-full"} aria-label={`Visit ${company} page `} href={website} target={"_blank"}>
      <h3
        className={"text-2xl font-bold"}>{company}</h3>
    </Link>
    <p className={"italic pt-2"}> {years}</p>
    <h4>{title}</h4>
    <p>{description}</p>
    <div className={"flex gap-2 flex-wrap justify-center"}>{technologies.map((technology) => {
      return <Tag key={technology}>
        {technology}
      </Tag>;
    })}</div>
  </div>;
};

const Experiences = () => {


  return <FadeInDiv
    delay={AnimationTiming.EXPERIENCE.delay}
    duration={AnimationTiming.EXPERIENCE.duration}
    className={"flex flex-col gap-9  w-full max-w-4xl md:px-0 px-1"}>
    <h3 className={"text-4xl font-bold text-center"}>
      Professional Experience
    </h3>

    <div className={"w-full flex flex-col"}>
      {EXPERIENCES.map((experience, index) => <Experience odd={index % 2 === 0} key={experience.title}
                                                          className={"w-full min-w-[100%]"}
                                                          experience={experience} />)}
    </div>


  </FadeInDiv>;
};

export default Experiences;