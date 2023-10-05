import { ReactElement } from "react";

export type ISkill = {
  name: string;
  icon: ReactElement | string;
}


export type SkillsType = {
  [key in SkillCategory]: ISkill[];
};


export type SkillCategory = "backend" | "frontend" | "others"

export enum SkillCategoryEnum {
  BACKEND = "backend",
  FRONTEND = "frontend",
  OTHERS = "others"
}