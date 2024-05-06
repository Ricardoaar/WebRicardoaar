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
      <p className={'text-justify'}>
        I am a skilled Full-Stack Developer with three years of hands-on experience in delivering robust and innovative
        digital solutions. Passionate about creating seamless user experiences from concept to deployment, I specialize
        in building scalable web applications that empower businesses.

      </p>
      <br/>
      <p className={'text-center'}>
        Let's collaborate to bring your digital ideas to life! Feel free to reach out via my social media channels or
        email. I'm excited to connect and create amazing projects!
      </p>

    </article>

    <SocialMedia />
  </FadeInDiv>;
};

export default Head;