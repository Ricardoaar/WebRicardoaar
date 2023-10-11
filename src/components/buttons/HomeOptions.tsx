"use client";
import React from "react";
import SpeedDial from "@/components/components/SpeedDial/SpeedDial";
import { MOON_SVG, PLAY_SVG, SETTINGS_SVG, STOP_SVG, SUN_SVG } from "@/constants/utils.icons";
import ReactAppContext, { useAppContext } from "@/app/ReactAppContext";
import { SpeedDialOption } from "@/components/components/SpeedDial/SpeedDial.types";
import { toast } from "react-toastify";


const HomeOptions = () => {
  const context = useAppContext();
  const speedDialOptions: SpeedDialOption[] = [
    {
      icon: STOP_SVG,
      show: context.areAnimationsEnabled,
      onClick: () => {
        context.disabledAnimations();
        toast.info("Animations disabled", {
          icon: "🥺"
        });
      },
      tooltip: "Stop animations"

    }, {
      icon: PLAY_SVG,
      show: !context.areAnimationsEnabled,
      onClick: () => {
        context.enabledAnimations();
        toast.info("Animations enabled", {
          icon: "🎉"
        });
      },
      tooltip: "Start animations"

    }, {
      icon: MOON_SVG,
      show: context.isDarkModeEnabled,
      onClick: () => {
        context.setIsDarkModeEnabled(false);
      },
      tooltip: "Toggle Dark Mode"
    }, {
      icon: SUN_SVG,
      show: !context.isDarkModeEnabled,
      onClick: () => {
        context.setIsDarkModeEnabled(true);
      },
      tooltip: "Toggle Light Mode"
    }
  ];

  return <SpeedDial icon={SETTINGS_SVG} speedDialOptions={speedDialOptions} />;
};

export default HomeOptions;