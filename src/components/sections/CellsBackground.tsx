"use client";
import React from "react";
import cells from "@/scss/animation.module.scss";
import { useAppContext } from "@/app/ReactAppContext";

// @ts-ignore
const cellFrom = Array.from({ length: cells.quantity });

const CellsBackground = () => {
  const { areAnimationsEnabled } = useAppContext();
  
  if (!areAnimationsEnabled) {
    return (
      <div className="fixed inset-0 -z-10">
        {/* Static background when animations are disabled */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-accent-50/30 dark:from-primary-900/10 dark:via-transparent dark:to-accent-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.1),transparent_50%)]"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-accent-50/30 dark:from-primary-900/10 dark:via-transparent dark:to-accent-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.1),transparent_50%)]"></div>
      
      {/* Animated particles */}
      <div className="relative w-full h-full">
        {cellFrom.map((_, index) => (
          <div 
            key={index} 
            className={`${cells.particle} animate-float`}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-bounce-gentle"></div>
    </div>
  );
};

const OptimizedCellsBackground = React.memo(CellsBackground);

export default OptimizedCellsBackground;