"use client";
import React from "react";
import SpeedDial from "@/components/components/SpeedDial/SpeedDial";
import { PLAY_SVG, SETTINGS_SVG, STOP_SVG } from "@/constants/utils.icons";
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

    }
  ];

  return <SpeedDial icon={SETTINGS_SVG} speedDialOptions={speedDialOptions} />;
};

export default HomeOptions;