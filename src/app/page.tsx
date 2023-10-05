import React from "react";
import SocialMedia from "@/modules/main/SocialMedia";
import Skills from "@/modules/main/Skills";
import Experience from "@/modules/main/Experience";
import CellsBackground from "@/modules/main/CellsBackground";
import styled from "styled-components";
import Head from "@/modules/main/Head";

const Footer = () => {
  return <div className={"h-12 text-center  flex justify-center items-center bg-blue-950/20 w-full"}>
    <strong>@Ricardooar</strong>
  </div>;
};



export default function Home() {
  return (
    <main className="flex font-sans min-h-screen flex-col items-center justify-between pt-24 linear-bg gap-8">
      <CellsBackground />
      <div className={"flex flex-col gap-8 justify-center  w-full max-w-4xl "}>
        <Head />
        <Skills />
        <Experience />
      </div>

      <Footer></Footer>
    </main>
  );
}
