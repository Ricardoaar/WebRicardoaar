import { createPortal } from "react-dom";
import { ReactNode } from "react";

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;

}

const ReactPortal = ({ children, domId = "react-portal" }: {
  children: ReactNode,
  domId?: string
}) => {
  const element = document.getElementById(domId) ?? createWrapperAndAppendToBody(domId);
  return createPortal(children, element);
};


export default ReactPortal;
