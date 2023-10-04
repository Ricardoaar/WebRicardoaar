import React from "react";
import SocialMedia from "@/modules/main/SocialMedia";
import { SkillCategory } from "@/constants/skills/types";
import Skills from "@/modules/main/Skills";
import Experience from "@/modules/main/Experience";


const Head = () => {
  return <div className={"flex flex-col gap-16"}>
    <h2 className={"text-4xl  text-center"}>
      Hi, I'm Ricardo <strong>(@Ricardoaar)</strong> &#160;
      FullStack Developer
    </h2>
    <SocialMedia />
  </div>;
};


export default function Home() {
  return (
    <main className="flex font-sans min-h-screen flex-col items-center justify-between py-24 linear-bg gap-4">
      <Head />
      <Skills />
      <Experience />
    </main>
  );
}
