"use client";
import React from "react";
import { useAppContext } from "@/app/ReactAppContext";
import { ToastContainer } from "react-toastify";

const ToastWrapper = () => {
  const { isDarkModeEnabled } = useAppContext();
  const theme = isDarkModeEnabled ? "dark" : "light";
  console.log({isDarkModeEnabled});
  return (
    <ToastContainer
      position={"bottom-left"}
      theme={theme}
      autoClose={2000}
      hideProgressBar
    />
  );
};

export default ToastWrapper;