import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import CellsBackground from "@/components/sections/CellsBackground";
import Head from "@/components/sections/Head";
import HomeOptions from "@/components/buttons/HomeOptions";
import AppContext from "@/app/ReactAppContext";
import Footer from "@/components/sections/Footer";
import ToastWrapper from "@/components/sections/ToastWrapper";


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
        </div>
        <Footer />
      </main>
      <ToastWrapper />
    </AppContext>
  );
}
