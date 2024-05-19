import React, { useCallback } from "react";

const useDarkMode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(true);

  const setDarkMode = useCallback((enable: boolean) => {
    enable && document.querySelector("html")?.classList.add("dark");
    !enable && document.querySelector("html")?.classList.remove("dark");
    setIsDarkModeEnabled(enable);
  }, []);


  return {
    isDarkModeEnabled,
    setIsDarkModeEnabled: setDarkMode
  };
};

export default useDarkMode;