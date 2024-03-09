"use client";
import React, { useEffect } from "react";
import ReactPortal from "@/components/components/Portal/Portal";
import { FadeInDiv } from "@/components/animations/FadeIn";
import NoSelectableWrapper from "@/components/components/UtilityComponents/NoSelectableWrapper";


const useKeydown = (key: string, callback: (e: KeyboardEvent) => void) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback(e);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


};

const Modal = ({ children, isOpen: isOpenByOutside, domId = "modal", setIsOpen: setControlledOpen }: {
  children: React.ReactNode,
  isOpen: boolean,
  domId?: string,
  setIsOpen?: (isOpen: boolean) => void,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  useKeydown("Escape", () => {
    setIsOpen(false);
    setControlledOpen?.(false);
  });

  useEffect(() => {
    if (isOpen === isOpenByOutside) return;
    setIsOpen(isOpenByOutside);

  }, [isOpenByOutside]);


  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (modalRef?.current?.contains(e.target as Node)) {
        return;
      }
      setIsOpen(false);
      setControlledOpen?.(false);
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <ReactPortal domId={domId}>
      <div className={"w-full font-sans fixed top-0 left-0 h-full bg-gray-900/80"}>
        <FadeInDiv
          duration={1.2}
          ref={modalRef}
          className={`fixed top-[20%] left-[20%] w-[60%] h-[60%] dark:bg-gray-950/95 bg-indigo-200/95 dark:text-white text-gray-800 flex justify-center items-center rounded-md shadow-gray-950 shadow-2xl`}>
          <NoSelectableWrapper className={"absolute top-3 right-3"} element={"div"}>
            <button
              onClick={() => {
                setIsOpen(false);
                setControlledOpen?.(false);
              }}
              className={"rounded-full dark:bg-indigo-950/60 bg-indigo-100 shadow-sm shadow-gray-950 w-8 h-8"}>
              X
            </button>
          </NoSelectableWrapper>
          {children}
        </FadeInDiv>
      </div>
    </ReactPortal>
  );
};

export default Modal;