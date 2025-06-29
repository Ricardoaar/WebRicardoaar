import React, { PropsWithChildren } from "react";
import NoSelectableWrapper from "@/components/components/UtilityComponents/NoSelectableWrapper";
import classNames from "classnames";

interface TagProps extends PropsWithChildren {
  color?: string;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <NoSelectableWrapper 
      element={"div"}
      className={classNames(
        "px-3 py-1 inline-block bg-blue-200 dark:bg-blue-950 rounded-full shadow-white shadow-2xl dark:text-white text-black text-sm font-medium transition-colors duration-200",
        className
      )}
    >
      {children}
    </NoSelectableWrapper>
  );
};

export default Tag;