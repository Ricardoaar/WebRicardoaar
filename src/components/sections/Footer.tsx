"use client";
import AttributionsPage from "@/AttributionsPage";
import React from "react";
import Modal from "@/components/components/Modal/Modal";

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <footer className="relative mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 dark:from-secondary-950/50 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Ricardo Rito Anguiano
              </h3>
              <p className="text-gray-600 dark:text-gray-50 text-sm">
                FullStack Developer
              </p>
            </div>

            {/* Quick links with better contrast */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a 
                  href="#skills" 
                  className="text-gray-600 dark:text-gray-50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Skills
                </a>
                <a 
                  href="#experience" 
                  className="text-gray-600 dark:text-gray-50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-600 dark:text-gray-50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
                <button 
                  onClick={() => setIsOpen(true)}
                  className="text-gray-600 dark:text-gray-50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Attributions
                </button>
              </div>
            </div>

            {/* Contact info with better contrast */}
            <div className="text-center md:text-right">
              <p className="text-gray-600 dark:text-gray-50 text-sm mb-2">
                Let's work together
              </p>
              <a 
                href="mailto:ricardo.rito.a@gmail.com" 
                className="text-primary-600 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200 transition-colors duration-200 font-medium"
              >
                ricardo.rito.a@gmail.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300/50 dark:border-secondary-500/50 my-8"></div>

          {/* Bottom section with better contrast */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-100 text-sm">
              © 2024 Ricardo Rito Anguiano. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500 dark:text-gray-100">
                Built with
              </span>
              <div className="flex items-center gap-2">
                <span className="text-red-500">❤️</span>
                <span className="text-gray-600 dark:text-gray-50">Next.js</span>
                <span className="text-gray-500 dark:text-gray-100">&</span>
                <span className="text-gray-600 dark:text-gray-50">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attributions modal */}
      {isOpen && (
        <Modal isOpen setIsOpen={setIsOpen}>
          <AttributionsPage />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;