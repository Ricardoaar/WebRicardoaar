import React from "react";

export type SpeedDialOption = {
  icon: React.ReactNode;
  onClick: () => void;
  fixClasses?: string;
  tooltip: string;
  show: boolean;
};

export type speedDialSetup = {
  hover?: boolean;
  click?: boolean;
}

export type SpeedDialProps = {
  icon: React.ReactNode;
  setup?: speedDialSetup;
  speedDialOptions: SpeedDialOption[];
}


export const defaultSetup: speedDialSetup = {
  hover: true,
  click: true

};
