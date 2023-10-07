"use client";
import SocialMedia from "@/components/sections/SocialMedia";
import React from "react";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";


const Head = () => {
  return <FadeInDiv
    delay={AnimationTiming.HEAD.delay}
    duration={AnimationTiming.HEAD.duration}
    className={"flex flex-col gap-16 entry md:px-0 px-2"}>

    <h2 className={"text-4xl  text-center"}>
      Hi, I'm Ricardo
      FullStack Developer
    </h2>

    <article className={"text-center text-md font-light"}>
      <p>
        I'm a <strong> FullStack Developer </strong>with 3 years of experience in the field.

      </p>
      <p>
        Let's collaborate! you can contact me through my <strong>social media </strong> or my email.
      </p>

    </article>

    <SocialMedia />
  </FadeInDiv>;
};

export default Head;