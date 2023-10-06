import React from "react";
import cells from "@/scss/animation.module.scss";


// @ts-ignore
const cellFrom = Array.from({ length: cells.quantity });

const CellsBackground = () => {

  return (
    <>
      {cellFrom.map((_, index) => {

        return <div className={cells.particle} key={index}></div>;
      })}
    </>);
};

const OptimizedCellsBackground = React.memo(CellsBackground);

export default OptimizedCellsBackground;