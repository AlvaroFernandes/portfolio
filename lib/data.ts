import focusCleaningImg from "@/public/focusCleaning.png"
import codeQuizImg from "@/public/codeQuiz.png"
 
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
    }
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