"use client";
import React, { PropsWithChildren, ReactPropTypes, useEffect } from "react";
import useDarkMode from "@/app/useDarkMode";
import { ANIMATION_STATE, DARK_MODE_STATE } from "@/app/INITIAL_STATE";


export type ReactAppContextType = {
  areAnimationsEnabled: boolean;
  enabledAnimations: () => void;
  disabledAnimations: () => void;
  isDarkModeEnabled: boolean;
  setIsDarkModeEnabled: (isDarkModeEnabled: boolean) => void;
}
const ReactAppContext = React.createContext<ReactAppContextType>({
  areAnimationsEnabled: ANIMATION_STATE,
  enabledAnimations: () => {
  },
  disabledAnimations: () => {
  },
  isDarkModeEnabled: DARK_MODE_STATE,
  setIsDarkModeEnabled: () => {
  }
});

const AppContext = ({ children }: PropsWithChildren) => {
  const [areAnimationsEnabled, setAreAnimationsEnabled] = React.useState(ANIMATION_STATE);
  const { isDarkModeEnabled, setIsDarkModeEnabled } = useDarkMode();

  useEffect(() => {
    setIsDarkModeEnabled(DARK_MODE_STATE);
  }, []);
  const enabledAnimations = () => {
    document.body.classList.remove("notransition");
    setAreAnimationsEnabled(true);
  };

  const disabledAnimations = () => {
    document.body.classList.add("notransition");
    setAreAnimationsEnabled(false);
  };

  return <ReactAppContext.Provider value={{
    areAnimationsEnabled,
    enabledAnimations,
    disabledAnimations,
    isDarkModeEnabled,
    setIsDarkModeEnabled
  }}>
    {children}
  </ReactAppContext.Provider>;
};

export const useAppContext = () => {
  return React.useContext(ReactAppContext);
};


export default AppContext;