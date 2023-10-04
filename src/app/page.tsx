import React from "react";
import SocialMedia from "@/modules/main/SocialMedia";
import Skills from "@/modules/main/Skills";
import Experience from "@/modules/main/Experience";

const Footer = () => {
  return <div className={"h-12 text-center  flex justify-center items-center bg-blue-950/20 w-full"}>
    <strong>@Ricardooar</strong>
  </div>;
};


const Head = () => {
  return <div className={"flex flex-col gap-16"}>
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
  </div>;
};


export default function Home() {
  return (
    <main className="flex font-sans min-h-screen flex-col items-center justify-between pt-24 linear-bg gap-8">
      <div className={"flex flex-col gap-8 justify-center  w-full max-w-4xl "}>
        <Head />
        <Skills />
        <Experience />
      </div>

      <Footer></Footer>
    </main>
  );
}
