import React from "react";

const totalCells = 15;
const cells = Array.from({ length: totalCells });

const CellsBackground = () => {
  return (
    <>
      {cells.map((_, index) => {
        return <div className="firefly" key={index}></div>;
      })}
    </>);
};

const OptimizedCellsBackground = React.memo(CellsBackground);

export default OptimizedCellsBackground

;