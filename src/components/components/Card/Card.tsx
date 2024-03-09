import React, { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className={""}>
      {children}
    </div>
  );
};

export default Card;