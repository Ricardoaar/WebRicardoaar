"use client";
import React, { useCallback, useEffect } from "react";
import { defaultSetup, SpeedDialProps } from "@/components/components/SpeedDial/SpeedDial.types";
import GrowOnHover from "@/components/animations/GrowOnHover";
import { FadeInDiv } from "@/components/animations/FadeIn";
import { useAppContext } from "@/app/ReactAppContext";


const SpeedDial = ({ icon = "", speedDialOptions = [], setup = defaultSetup }: SpeedDialProps) => {
  const { areAnimationsEnabled } = useAppContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const onMouseEnter = useCallback(() => {
    setup.hover && setIsOpen(true);
  }, [setup.hover]);

  const onClick = useCallback(() => {

    setup.click && !isOpen && setIsOpen(true);
    setup.click && isOpen && setIsOpen(false);
  }, [setup.click, isOpen]);

  const onMouseLeave = () => {
    setup.hover && setIsOpen(false);
  };

  const onClickOutside = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", onClickOutside);
    }
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [isOpen]);


  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={"fixed top-10 right-10 flex flex-col gap-2"}
    >
      <button aria-label={"settings"}
              className={"rounded-full bg-[#24223f] w-12 h-12 flex items-center justify-center shadow-md shadow-gray-950"}
              onClick={onClick}
      >
      <span className={"w-8 h-8 "}>
      {icon}
      </span>

      </button>
      {isOpen &&
        speedDialOptions.map((options) => {
          if (!options.show) return null;
          return <FadeInDiv duration={areAnimationsEnabled ? 1 : 0} key={options.tooltip}>
            <GrowOnHover>
              <button onClick={options.onClick}
                      aria-label={options.tooltip}
                      title={options.tooltip}
                      className={"flex items-center justify-center mt-2 w-12 h-12 bg-[#24223f] rounded-full shadow-md shadow-gray-950"}>
                <div className={`w-5 h-5 flex justify-center items-center ${options.fixClasses}`}>
                  {options.icon}
                </div>
              </button>
            </GrowOnHover>
          </FadeInDiv>;
        })

      }
    </div>
  );
};

export default SpeedDial;