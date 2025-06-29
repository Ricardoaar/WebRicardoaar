"use client";
import React, { useCallback, useEffect } from "react";
import { defaultSetup, SpeedDialProps } from "@/components/components/SpeedDial/SpeedDial.types";
import GrowOnHover from "@/components/animations/GrowOnHover";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { useAppContext } from "@/app/ReactAppContext";

const SpeedDial = ({ icon = "", speedDialOptions = [], setup = defaultSetup }: SpeedDialProps) => {
  const { areAnimationsEnabled } = useAppContext();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const onMouseEnter = useCallback(() => {
    setup.hover && setIsOpen(true);
  }, [setup.hover]);

  const onClick = useCallback(() => {
    setup.click && !isOpen && setIsOpen(true);
    setup.click && isOpen && setIsOpen(false);
  }, [setup.click, isOpen]);

  const onMouseLeave = () => {
    setup.hover && setIsOpen(false);
  };

  const onClickOutside = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", onClickOutside);
    }
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed top-6 right-6 flex flex-col gap-3 z-50"
    >
      {/* Main button */}
      <GrowOnHover>
        <button 
          aria-label="Settings and options"
          className="group relative w-14 h-14 rounded-2xl bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md shadow-large hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center border border-white/20 dark:border-secondary-700/50"
              onClick={onClick}
      >
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon */}
          <div className="relative z-10 w-6 h-6 text-secondary-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
      {icon}
          </div>

          {/* Pulse animation when open */}
          {isOpen && (
            <div className="absolute inset-0 rounded-2xl bg-primary-500/30 animate-ping"></div>
          )}
      </button>
      </GrowOnHover>

      {/* Speed dial options */}
      {isOpen && (
        <div className="flex flex-col gap-3">
          {speedDialOptions.map((option, index) => {
            if (!option.show) return null;
            
            return (
              <FadeInDiv 
                duration={areAnimationsEnabled ? 0.3 : 0} 
                key={option.tooltip}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
            <GrowOnHover>
                  <button 
                    onClick={option.onClick}
                    aria-label={option.tooltip}
                    title={option.tooltip}
                    className="group relative w-14 h-14 rounded-2xl bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md shadow-large hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center border border-white/20 dark:border-secondary-700/50"
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-5 h-5 text-secondary-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 ${option.fixClasses || ''}`}>
                      {option.icon}
                    </div>
                    
                    {/* Tooltip with better contrast */}
                    <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white dark:bg-secondary-800 px-3 py-1 rounded-lg shadow-lg border border-gray-200 dark:border-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-700 dark:text-white">
                        {option.tooltip}
                      </span>
                </div>
              </button>
            </GrowOnHover>
              </FadeInDiv>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SpeedDial;