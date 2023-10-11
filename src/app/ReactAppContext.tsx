"use client";
import React, { PropsWithChildren, ReactPropTypes } from "react";
import useDarkMode from "@/app/useDarkMode";


export type ReactAppContextType = {
  areAnimationsEnabled: boolean;
  enabledAnimations: () => void;
  disabledAnimations: () => void;
  isDarkModeEnabled: boolean;
  setIsDarkModeEnabled: (isDarkModeEnabled: boolean) => void;
}
const ReactAppContext = React.createContext<ReactAppContextType>({
  areAnimationsEnabled: true,
  enabledAnimations: () => {
  },
  disabledAnimations: () => {
  },
  isDarkModeEnabled: false,
  setIsDarkModeEnabled: () => {
  }
});

const AppContext = ({ children }: PropsWithChildren) => {
  const [areAnimationsEnabled, setAreAnimationsEnabled] = React.useState(true);
  const { isDarkModeEnabled, setIsDarkModeEnabled } = useDarkMode();
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