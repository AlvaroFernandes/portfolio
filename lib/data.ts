import focusCleaningImg from "@/public/focusCleaning.png"
import codeQuizImg from "@/public/codeQuiz.png"
import frInformaticaImg from "@/public/frInformatica.png"
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
 
export const NavigationData = [
    {name: "Home", hash:"#home"},
    {name:"About", hash:"#about"},
    {name:"Projects", hash:"#projects"},
    {name:"Skills", hash:"#skills"},
    {name: "Experience", hash:"#experience"},
    {name:"Contact", hash:"#contact"}
] as const;

export const ProjectsData = [
    {
        title: "Focus Cleaning",
        description:"I developed and maintained the Focus Cleaning Sydney website, ensuring optimal performance, responsive design, and an improved user experience.",
        tags: ['React', 'Bootstrap'],
        imageUrl: focusCleaningImg
    },
   
    {
        title: 'Game Network',
        description:"",
        tags: ['React','Express','Material Ui', 'MongoDB' ],
        imageUrl: ""
    },

    {
        title: 'Code Quiz',
        description:"I created a timed quiz with JavaScript fundamentals that stores high scores.",
        tags: ['JavaScript', 'Bootstrap' ],
        imageUrl: codeQuizImg
    }, {
        title: "FR Informatica",
        description:"The first website I developed over 15 years ago, frinformatica.com.br, showcased my web development skills.",
        tags: ["HTML", "CSS", "JavaScript", "JQuery"],
        imageUrl: frInformaticaImg
    },
] as const

export const skillsData = [
    "REACT",
    "NEXT.JS",
    "NodeJS",
    "HTML",
    "CSS", 
    "JavaScript",
    "Salesforce",
    "SAP",
    "Python",
    ".Net",
    "Express",
    "PHP",
    "Power Query",
    "Excel",
    "MongoDB",
    "Prisma",
    "TypeScript",
    "Git",
    "Redux",
    "Tailwind",
    "Bootstrap",
    "Material UI",
    "Franer Motion"
] as const

export const experienceData = [
    {
        title:"Bachelor in Digital Design",
        institution: "Universidade Anhembi Morumbi",
        location: "Sao Paulo - Brazil",
        description: "Earned a Bachelor's degree in Digital Design, building a solid foundation in design principles and web development.",
        icon: React.createElement(LuGraduationCap),
        data: '2005 - 2010'
    },
    {
        title:"Junior Front-End developer",
        institution: "Universidade Anhembi Morumbi",
        location: "Sao Paulo - Brazil",
        description: "Provided IT support for computer labs, ensuring system functionality and availability for academic use.",
        icon: React.createElement(CgWorkAlt),
        data: '2006 - 2008'
    },
       {
        title:"Front-End developer",
        institution: "Inso Technology Information System",
        location: "Sao Paulo - Brazil",
        description: "Developed applications and modules to streamline legal documentation processes and optimize website performance.",
        icon: React.createElement(CgWorkAlt),
        data: '2008 - 2009'
    },
       {
        title:"Front-End developer",
        institution: "Allied Advanced Technologies",
        location: "Sao Paulo - Brazil",
        description: "Maintained and developed e-commerce portals, addressing logistical challenges and enhancing user experience.",
        icon: React.createElement(CgWorkAlt),
        data: '2011 - 20011'
    },
       {
        title:"Front-End developer",
        institution: "X-GEN (Web Business Technology LTDA)",
        location: "Sao Paulo - Brazil",
        description: "Played a key role in redesigning the company's website and collaborated with a major telecommunications company to launch an e-commerce portal.",
        icon: React.createElement(CgWorkAlt),
        data: '2012 - 2012'
    },
       {
        title:"IT Analyst",
        institution: "EMC",
        location: "Sao Paulo - Brazil",
        description: "Led data reporting and project management for EMC storage systems, optimizing storage utilization and performance for clients.",
        icon: React.createElement(CgWorkAlt),
        data: '2012 - 2014'
    },
       {
        title:"Front-End developer",
        institution: "X-GEN (Web Business Technology LTDA)",
        location: "Sao Paulo - Brazil",
        description: "Developed and maintained critical product modules and enhanced the company’s website, improving user engagement and functionality.",
        icon: React.createElement(CgWorkAlt),
        data: '2014 - 2016'
    },
    {
        title:"Master of Business and Project Manager",
        institution: "Asia Pacific International College (APIC)",
        location: "Sydney - Australia",
        description: "Acquired strong business and project management skills, enhancing my ability to lead and deliver successful technology projects.",
        icon: React.createElement(LuGraduationCap),
        data: '2017 - 2018'
 
    },
    {
        title:"Door & Window technician",
        institution: "Easy Glide Doors & Rollers",
        location: "Sydney - Australia",
        description: "Provided technical expertise in door and window installation and maintenance, ensuring smooth operation and customer satisfaction.",
        icon: React.createElement(CgWorkAlt),
        data: '2017 - 2022'
    },
    {
        title:"Full-Stack BootCamp",
        institution: "The university of Sydney",
        location: "Sydney - Australia",
        description: "Completed a comprehensive Full Stack Developer program, gaining advanced skills in front-end and back-end technologies.",
        icon: React.createElement(LuGraduationCap),
        data: '2020 - 2020'
 
    },
    {
        title:"Junior developer & IT assistant",
        institution: "Black Lab Design",
        location: "Sydney - Australia",
        description: "Built a MERN stack application for digital signage management and automated data extraction processes to streamline operations and enhance efficiency.",
        icon: React.createElement(CgWorkAlt),
        data: '2022 - 2022'
    },
    {
        title:"Business Operations Analyst",
        institution: "Cisco",
        location: "Sydney - Australia",
        description: "Designed and automated data reporting processes using Python and Excel, significantly improving reporting accuracy and efficiency for the sales pipeline and metrics analysis.",
        icon: React.createElement(CgWorkAlt),
        data: '2023 - 2023'
    },

]