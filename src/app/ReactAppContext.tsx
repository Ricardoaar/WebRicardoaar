"use client";
import React, { PropsWithChildren, ReactPropTypes } from "react";


type ReactAppContextType = {
  areAnimationsEnabled: boolean;
  enabledAnimations: () => void;
  disabledAnimations: () => void;
}
const ReactAppContext = React.createContext<ReactAppContextType>({
  areAnimationsEnabled: true,
  enabledAnimations: () => {
  },
  disabledAnimations: () => {
  }
});

const AppContext = ({ children }: PropsWithChildren) => {
  const [areAnimationsEnabled, setAreAnimationsEnabled] = React.useState(true);

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
    disabledAnimations
  }}>
    {children}
  </ReactAppContext.Provider>;
};

export const useAppContext = () => {
  return React.useContext(ReactAppContext);
};


export default AppContext;