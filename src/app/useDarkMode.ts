import React from "react";

const useDarkMode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(true);

  const setDarkMode = (enable: boolean) => {

    isDarkModeEnabled && document.querySelector("html")?.classList.remove("dark");
    !isDarkModeEnabled && document.querySelector("html")?.classList.add("dark");
    setIsDarkModeEnabled(enable);
  };

  return {
    isDarkModeEnabled,
    setIsDarkModeEnabled: setDarkMode
  };
};

export default useDarkMode;