"use client";
import React, { useEffect, useRef } from "react";
import { EXPERIENCES, IExperience } from "@/constants/experiences";
import Link from "next/link";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";
import GrowOnHover from "@/components/animations/GrowOnHover";
import { ARROW_SVG } from "@/constants/utils.icons";


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

const Experience = ({ experience, className }: { experience: IExperience, className: string }) => {
  const { company, website, title, years, description, technologies } = experience;
  const formatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });


  return <div className={`flex flex-col gap-2 flex-grow ${className}`}>
    <Link className={"w-fit"} aria-label={`Visit ${company} page `} href={website} target={"_blank"}><h3
      className={"text-2xl font-bold"}>{company}</h3></Link>
    <h4 className={"text-xl"}>{title}</h4>
    <p>{description}</p>
    <p>{formatter.format(technologies)}</p>
    <p className={"italic pt-2"}> {years}</p>
  </div>;
};

const Experiences = () => {

  const [currentXp, setCurrentXp] = React.useState<number>(0);
  const prevExp = EXPERIENCES[currentXp - 1];
  const nextExp = EXPERIENCES[currentXp + 1];

  const scrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft = scrollRef.current?.offsetWidth * currentXp;
  }, [currentXp]);

  const onNext = () => {
    setCurrentXp(currentXp + 1);
  };

  const onPrevious = () => {
    setCurrentXp(currentXp - 1);
  };

  return <FadeInDiv
    delay={AnimationTiming.EXPERIENCE.delay}
    duration={AnimationTiming.EXPERIENCE.duration}
    className={"flex flex-col gap-9  w-full max-w-4xl md:px-0 px-1"}>
    <h3 className={"text-4xl font-bold text-center"}>
      Professional Experience
    </h3>
    <div className={"flex gap-6  justify-evenly flex-[0 1 0]"}>
      {prevExp && <ManageButton onClick={onPrevious}>
        {ARROW_SVG}
      </ManageButton>}
      <div className={"w-full flex    overflow-x-hidden"} ref={scrollRef}>
        {EXPERIENCES.map((experience) => <Experience className={"w-full min-w-[100%]"} experience={experience} />)}
      </div>


      {nextExp && <ManageButton onClick={onNext} aria-label={"Next"} rotate>
        {ARROW_SVG}
      </ManageButton>}
    </div>


  </FadeInDiv>;
};

export default Experiences;