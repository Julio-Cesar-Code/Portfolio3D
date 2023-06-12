
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    first,
    threejs,
    python,
    fastapi,
    PHP,
    MySQL
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web 3.0 Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analysis",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
      
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "FastAPI",
      icon: fastapi
    },
    {
      name: "PHP",
      icon: PHP
    },
    {
      name: "MySQL",
      icon: MySQL
    }
      ];
  
  const experiences = [
    {
      title: "Physics Teacher",
      company_name: "Colegio Agustiniano",
      icon: starbucks,
      iconBg: "#383E56",
      date: "February 2022 - December 2022",
      points: [
        " I have experience teaching and managing educational programs with international companies and NASA. As a teacher, I have managed educational programs associated with NASA and Esri Panama, graduating the first Latin American students in day and night remote sensing. I stand out for my ability to combine my knowledge in physics with technical skills to create innovative solutions in the digital world."

      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Forestal los Carpatos",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "January 2023 - Present",
      points: [
        " I am a physicist with experience in full stack software development, specializing in frontend technologies such as React and backend such as FastAPI. Combining my knowledge in physics with technical skills, I have created digital tools for the management of family farm projects promoted by the Panama Canal authority. I have worked with farms and farmers to improve their performance and efficiency in their work. My experience in software development and my knowledge in physics allows me to design innovative solutions to complex problems. I am looking for opportunities to further develop digital solutions to improve agriculture and the environment."
     ],
    },
    ,
  ];
  
   
  const projects = [
    {
      name: "My first Project",
      description:
        "My first Personal Website, I'm Julio, a passionate self-taught with a love for creating innovative solutions and exploring new technologies",
      tags:[
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Asyncronomous",
          color: "green-text-gradient",
        },

      ],
      image: first,
      source_code_link: "https://github.com/Julio-Cesar-Code/Async-landing",

      
     },
  ];
  
  export { services, technologies, experiences, projects };