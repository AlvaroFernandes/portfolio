import focusCleaning from "@/public/focusCleaning.png"

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
        imageUrl: focusCleaning
    },
    {
        title: 'Game Network',
        description:"",
        tags: ['React','Express','Material Ui', 'MongoDB' ],
        imageUrl: ""
    },

    {
        title: 'Code Quiz',
        description:"",
        tags: ['JavaScript', 'Bootstrap' ],
        imageUrl: ""
    }
] as const