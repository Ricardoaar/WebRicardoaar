export interface IExperience {
  company: string;
  title: string;
  description: string;
  technologies: string[];
  website: string;
  years: string;
}

export const EXPERIENCES: IExperience[] = [
  {
    company: "Freelancer",
    title: "Web Developer",
    description: "Worked in multiple projects using React, Node, Typescript, Javascript, HTML, CSS",
    technologies: ["React", "Node", "Typescript", "Javascript", "HTML", "CSS", "NextJS", "MongoDB"],
    website: "https://www.linkedin.com/in/ricardoaar/",
    years: "2019 - 2022"
  },
  {
    company: "LagInc",
    title: "Game Developer",
    description: "Worked in multiple projects of different industries using Unity, C#, Javascript, HTML, CSS",
    technologies: ["Unity", "C#", "Javascript", "HTML", "CSS"],
    website: "https://lag-inc.itch.io/",
    years: "2019 - 2021"
  },
  {
    company: "Ubidots",
    title: "Web Developer",
    description: "Lead projects and worked in multiple features using React",
    technologies: ["React", "Node", "Typescript", "Javascript", "HTML", "CSS"],
    website: "https://ubidots.com/",
    years: "2022 - 2023"
  },
  {
    company: "Ocelotbot",
    title: "Fullstack Developer",
    description: "Solved bugs and added new features to the bot and the website",
    technologies: ["React", "Node", "Typescript", "Javascript", "HTML", "CSS", "NextJS", "MongoDB"],
    website: "https://ocelotbot.com/",
    years: "2023 - current"
  }
];