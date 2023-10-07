"use client";
import React from "react";
import cells from "@/scss/animation.module.scss";
import { useAppContext } from "@/app/ReactAppContext";


// @ts-ignore
const cellFrom = Array.from({ length: cells.quantity });

const CellsBackground = () => {
  const { areAnimationsEnabled } = useAppContext();
  if (!areAnimationsEnabled) return null;

  return (
    <>
      {cellFrom.map((_, index) => {

        return <div className={cells.particle} key={index}></div>;
      })}
    </>);
};

const OptimizedCellsBackground = React.memo(CellsBackground);

export default OptimizedCellsBackground;