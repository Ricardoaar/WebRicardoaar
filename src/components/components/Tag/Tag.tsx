import React, { PropsWithChildren } from "react";
import NoSelectableWrapper from "@/components/components/UtilityComponents/NoSelectableWrapper";

interface TagProps extends PropsWithChildren {
  color?: string;
}

const Tag = ({ children }: TagProps) => {
  return (
    <NoSelectableWrapper element={"div"}
                      className={"px-2 inline-block bg-blue-200 dark:bg-blue-950 rounded-full shadow-white shadow-2xl dark:text-white text-black"}>
      {children}
    </NoSelectableWrapper>
  );
};

export default Tag;