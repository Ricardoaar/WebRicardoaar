import React, { PropsWithChildren } from "react";
import classNames from "classnames";


interface NoPointerWrapper extends PropsWithChildren {
  element: string;
  className?: string;
}

const NoSelectableWrapper = ({ element = "div", children, ...props }: NoPointerWrapper) => {
  return React.createElement(element, {
    children,
    ...props,
    className: classNames("select-none", props.className || "")
  });
};
export default NoSelectableWrapper;