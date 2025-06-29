"use client";
import SocialMedia from "@/components/sections/SocialMedia";
import React from "react";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { AnimationTiming } from "@/constants/animations";

const Head = () => {
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Ricardo_Rito_Resume.pdf';
    link.download = 'Ricardo_Rito_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <FadeInDiv
    delay={AnimationTiming.HEAD.delay}
    duration={AnimationTiming.HEAD.duration}
        className="text-center space-y-8 md:space-y-12 relative z-10"
      >
        {/* Hero section with enhanced visual impact */}
        <div className="space-y-6 md:space-y-8">
          {/* Greeting without emoji */}
          <div className="text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-secondary-600 dark:text-white">
              Hello, I'm
            </p>
          </div>

          {/* Main name with enhanced gradient and animation */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
                Ricardo Rito
              </span> 
              <br />
            </h1>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-accent-500 rounded-full animate-bounce-gentle opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-6 h-6 md:w-10 md:h-10 bg-primary-500 rounded-full animate-bounce-gentle delay-500 opacity-80"></div>
          </div>

          {/* Animated role title */}
          <div className="relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-secondary-700 via-primary-600 to-accent-600 dark:from-gray-200 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent animate-gradient-x">
                Full Stack Developer
              </span>
    </h2>

            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced tagline with icons */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-secondary-600 dark:text-gray-200 leading-relaxed font-medium">
              <span className="inline-flex items-center gap-2">
                <span className="text-primary-500">⚡</span>
                Crafting digital experiences
              </span>
              <br />
              <span className="inline-flex items-center gap-2">
                <span className="text-accent-500">🚀</span>
                Turning ideas into reality
              </span>
            </p>
          </div>

          {/* Enhanced CTA buttons with animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          
            
            <button 
              onClick={handleDownloadCV}
              className="btn-secondary group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-700 opacity-0 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                <span>Download CV</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced description with colorful cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Experience card */}
            <div className="glass-card rounded-2xl p-6 shadow-soft border-l-4 border-l-primary-500 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">4+ Years Experience</h3>
              <p className="text-secondary-600 dark:text-gray-300 text-sm">
                Delivering robust and innovative digital solutions across various industries
              </p>
            </div>

            {/* Skills card */}
            <div className="glass-card rounded-2xl p-6 shadow-soft border-l-4 border-l-accent-500 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">Full Stack Expertise</h3>
              <p className="text-secondary-600 dark:text-gray-300 text-sm">
                Frontend, backend, databases, and cloud technologies - end-to-end development
              </p>
            </div>

            {/* Innovation card */}
            <div className="glass-card rounded-2xl p-6 shadow-soft border-l-4 border-l-primary-500 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">Innovation Driven</h3>
              <p className="text-secondary-600 dark:text-gray-300 text-sm">
                Creating seamless user experiences from concept to deployment
              </p>
            </div>
          </div>

          {/* Main description with enhanced styling */}
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-soft relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-secondary-700 dark:text-gray-300 text-balance mb-6 leading-relaxed">
                I am a passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">Full-Stack Developer</span> with three years of hands-on experience in delivering robust and innovative
                digital solutions. Specializing in building <span className="text-accent-600 dark:text-accent-400 font-semibold">scalable web applications</span> that empower businesses and create meaningful impact.
      </p>
              
              <p className="text-secondary-600 dark:text-gray-400 text-balance leading-relaxed">
        Let's collaborate to bring your digital ideas to life! Feel free to reach out via my social media channels or
                email. I'm excited to connect and create <span className="text-primary-600 dark:text-primary-400 font-semibold">amazing projects</span> together.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced social media section with title */}
        <div className="pt-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-800 dark:text-white mb-2">
              Let's Connect
            </h3>
            <p className="text-secondary-600 dark:text-gray-300">
              Follow me on social media for updates and insights
            </p>
          </div>
    <SocialMedia />
        </div>
      </FadeInDiv>
    </div>
  );
};

export default Head;