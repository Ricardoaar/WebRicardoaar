"use client";
import React from "react";
import { EXPERIENCES } from "@/constants/experiences";
import Link from "next/link";
import { FadeInDiv } from "@/modules/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";
import GrowOnHover from "@/modules/animations/GrowOnHover";

type ManageButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  rotate?: boolean;
}

const ManageButton = ({ onClick, children, rotate = false, ...props }: ManageButtonProps) => {
  return <GrowOnHover>
    <button onClick={onClick} className={`w-12 flex-none ${rotate && "rotate-180"}`} {...props}>
      {children}
    </button>
  </GrowOnHover>;

};

const Experience = () => {

  const [currentXp, setCurrentXp] = React.useState<number>(1);
  const isThereNext = currentXp + 1 < EXPERIENCES.length;
  const isTherePrevious = currentXp > 0;
  const currentExperience = EXPERIENCES[currentXp];
  const { company, title, description, technologies, website, years } = currentExperience;
  const onNext = () => {
    setCurrentXp(currentXp + 1);
  };

  const onPrevious = () => {
    setCurrentXp(currentXp - 1);
  };
  const formatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });

  return <FadeInDiv
    delay={AnimationTiming.EXPERIENCE.delay}
    duration={AnimationTiming.EXPERIENCE.duration}
    className={"flex flex-col gap-9  w-full max-w-4xl md:px-0 px-1"}>
    <h3 className={"text-4xl font-bold text-center"}>
      Professional Experience
    </h3>
    <div className={"flex gap-6  justify-evenly flex-[0 1 0]"}>
      {
        isTherePrevious && <ManageButton onClick={onPrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="fill" height="fill" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654 5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z"
                  fill="#fff" />
          </svg>
        </ManageButton>
      }


      <div className={"flex flex-col gap-2 flex-grow"}>
        <Link href={website} target={"_blank"}><h3 className={"text-2xl font-bold"}>{company}</h3></Link>

        <h4 className={"text-xl"}>{title}</h4>
        <p>{description}</p>
        <p>{formatter.format(technologies)}</p>

        <p className={"italic pt-2"}> {years}</p>

      </div>
      {
        isThereNext && <ManageButton onClick={onNext} rotate>
          <svg xmlns="http://www.w3.org/2000/svg" width="fill" height="fill" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654 5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z"
                  fill="#fff" />
          </svg>

        </ManageButton>
      }

    </div>


  </FadeInDiv>;
};

export default Experience;