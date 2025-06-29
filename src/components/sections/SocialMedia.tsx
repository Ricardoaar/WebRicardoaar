import React from "react";
import { SOCIAL_MEDIA } from "@/constants/media";
import GrowOnHover from "@/components/animations/GrowOnHover";

const SocialMedia = () => {
  return (
    <section className="flex flex-row justify-center gap-6 md:gap-8 w-full">
      {SOCIAL_MEDIA.map((social, index) => {
        const { icon, name, link } = social;
        
        return (
          <div 
            className="flex flex-col items-center justify-center" 
            key={social.name}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <GrowOnHover className="group">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Contact me by ${name}`}
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md shadow-large hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center border border-white/20 dark:border-secondary-700/50 group-hover:scale-110"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with better contrast */}
                <div className="relative z-10 w-6 h-6 md:w-7 md:h-7 text-secondary-700 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              {icon && icon}
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
              
              {/* Platform name with better contrast */}
              <span className="mt-2 text-xs font-medium text-secondary-600 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {name}
              </span>
          </GrowOnHover>
          </div>
        );
      })}
    </section>
  );
};

const OptimizedSocialMedia = React.memo(SocialMedia);

export default OptimizedSocialMedia;