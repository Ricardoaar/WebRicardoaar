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
    description: "Designed and developed key websites for various clients using diverse technology stacks. Collaborated closely with clients to understand their requirements and deliver high-quality, user-friendly web solutions.",
    technologies: ["React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "MongoDB"],
    website: "https://www.linkedin.com/in/ricardoaar/",
    years: "2019 - 2022"
  },
  {
    company: "LagInc",
    title: "Game Developer",
    description: "Created engaging video games for game jams and personal projects, enhancing gameplay and user experience. Worked on end-to-end game development, from initial concept and design to implementation and testing.",
    technologies: ["Unity", "C#", "JavaScript", "HTML", "CSS"],
    website: "https://lag-inc.itch.io/",
    years: "2019 - 2021"
  },
  {
    company: "Ubidots",
    title: "Web Developer",
    description: "Led projects, resolved bugs, and improved and maintained design systems for web applications. Played a crucial role in optimizing performance and ensuring the scalability of web solutions, while maintaining high standards of code quality.",
    technologies: ["React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    website: "https://ubidots.com/",
    years: "2021 - 2023"
  },
  {
    company: "Ocelotbot",
    title: "Fullstack Developer",
    description: "Implemented new features and resolved bugs for both the bot and the website, ensuring smooth functionality. Contributed to the development of a robust backend and an intuitive frontend, while constantly improving the user experience and performance.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "MongoDB", "NestJS"],
    website: "https://ocelotbot.com/",
    years: "2023 - 2024"
  },
  {
    company: "Keystone AI",
    title: "Fullstack Developer",
    description: "Lead the development of an intranet. Built a web application using React, Next.js, Node.js, TypeScript, JavaScript, HTML, CSS, and MongoDB. The application is used by the company's employees to manage their projects and tasks.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "MongoDB", "NestJS"],
    website: "https://keystone.ai/",
    years: "2024 - present"
  }
];
