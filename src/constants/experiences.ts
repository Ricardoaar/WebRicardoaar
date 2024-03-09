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
    description: "Created important website for clients, using different technology stacks.",
    technologies: ["React", "Node", "Typescript", "Javascript", "HTML", "CSS", "NextJS", "MongoDB"],
    website: "https://www.linkedin.com/in/ricardoaar/",
    years: "2019 - 2022"
  },
  {
    company: "LagInc",
    title: "Game Developer",
    description: "Developed funny video games for game jams and personal projects. ",
    technologies: ["Unity", "C#", "Javascript", "HTML", "CSS"],
    website: "https://lag-inc.itch.io/",
    years: "2019 - 2021"
  },
  {
    company: "Ubidots",
    title: "Web Developer",
    description: "Lead projects, fix bugs, improve and maintain design systems",
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