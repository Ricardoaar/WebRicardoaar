"use client";
import React, { PropsWithChildren, ReactPropTypes, useRef } from "react";
import useDarkMode from "@/app/useDarkMode";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

type window = typeof window & {
  env: {
    baseUrl: string;
  }
}

const createApolloClient = () => {
  return new ApolloClient({


    uri: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache()
  });
};
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

  const { current: client } = useRef(createApolloClient());

  return <ReactAppContext.Provider value={{
    areAnimationsEnabled,
    enabledAnimations,
    disabledAnimations,
    isDarkModeEnabled,
    setIsDarkModeEnabled
  }}>
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  </ReactAppContext.Provider>;


};

export const useAppContext = () => {
  return React.useContext(ReactAppContext);
};


export default AppContext;