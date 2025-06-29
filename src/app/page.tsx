import "react-toastify/dist/ReactToastify.css";
import React from "react";
import HomeOptions from "@/components/buttons/HomeOptions";
import AppContext from "@/app/ReactAppContext";
import { CellsBackground, Experience, Footer, Head, Projects, Skills, ToastWrapper } from "@/components/sections";

export default function Home() {
  return (
    <AppContext>
      <main className="min-h-screen relative overflow-x-hidden">
        {/* Background with enhanced visual effects */}
        <div className="fixed inset-0 -z-10">
          <CellsBackground />
        </div>
        


        {/* Main content with improved spacing and structure */}
        <div className="relative z-10">

            <div className="w-full mt-20">
              <Head />
            </div>
            



          <section className="section bg-gradient-to-b from-transparent to-secondary-50/30 dark:to-secondary-900/20">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
              <Skills />
            </div>
          </section>

          {/* Experience Section */}
          <section className="section">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
              <Experience />
            </div>
          </section>

          {/* Projects Section */}
          <section className="section bg-gradient-to-b from-secondary-50/30 dark:from-secondary-900/20 to-transparent">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
              <Projects />
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
      <ToastWrapper />
    </AppContext>
  );
}
