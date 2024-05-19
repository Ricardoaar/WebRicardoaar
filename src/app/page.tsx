import "react-toastify/dist/ReactToastify.css";
import React from "react";
import HomeOptions from "@/components/buttons/HomeOptions";
import AppContext from "@/app/ReactAppContext";
import { CellsBackground, Experience, Footer, Head, Projects, Skills, ToastWrapper } from "@/components/sections";


export default function Home() {
  return (
    <AppContext>
      <main
        className="flex font-sans dark:text-white text-gray-700 min-h-screen flex-col items-center justify-between pt-24 linear-bg gap-8">
        <HomeOptions />
        <CellsBackground />
        <div className={"flex flex-col gap-8 justify-center  w-full max-w-4xl "}>
          <Head />
          <Skills />
          <Experience />
          <Projects />
        </div>
        <Footer />
      </main>
      <ToastWrapper />
    </AppContext>
  );
}
