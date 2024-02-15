import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Alvaro Fernandes" },
  { icon: <PhoneCall size={20} />, text: "+61 432 328 150" },
  { icon: <MailIcon size={20} />, text: "fernandes.alvaro@gmail.com" },
  { icon: <Calendar size={20} />, text: "Born on 07 Jul, 1985" },
  {
    icon: <GraduationCap size={20} />,
    text: "Master of Business and Project Managerment"
  },
  { icon: <HomeIcon size={20} />, text: "North Many, NSW, 2100" }
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Universidade Anhembi Morumbi",
        qualification: "Bachelor in Digital Design",
        years: "2005 - 2010"
      },
      {
        university: "Asia Pacific International Collage",
        qualification: "Master of Business and Project Managerment",
        years: "2017 - 2018"
      },
      {
        university: "The University of Sydney (Trilogy Education Services)",
        qualification: "The Coding Boot Camp at the University of Sydney",
        years: "2020"
      }
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "Inso Technology Information System",
        position: "Front-end Developer",
        country: "Brazil",
        years: "2008 - 2009"
      },
      {
        company: "Allied Advanced Technologies",
        position: "Front-end Developer",
        country: "Brazil",
        years: "2010 - 2011"
      },
      {
        company: "X-GEN (Web Business Technology LTDA)",
        position: "Front-end Developer",
        country: "Brazil",
        years: "2012 - 2012"
      },
      {
        company: "EMC",
        position: "IT Analyst",
        country: "Brazil",
        years: "2012 - 20014"
      },
      {
        company: "X-GEN (Web Business Technology LTDA)",
        position: "Front-end Developer",
        country: "Brazil",
        years: "2014 - 2016"
      },
      {
        company: "Easy Glide Door and Rollers",
        position: "Door And Window Technician",
        country: "Australia",
        years: "2017 - 2022"
      },
      {
        company: "Black Lab Design",
        position: "Junior Developer and IT Assistant",
        country: "Australia",
        years: "2022 - 2022"
      },
      {
        company: "Cisco",
        position: "Business Operations Analyst (Contract)",
        country: "Australia",
        years: "2023 - 2023"
      }
    ]
  }
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS"
      },
      {
        name: "Front-end Developemnt"
      },
      {
        name: "Javascript, PHP"
      },
      {
        name: "Back-End Developemnt"
      }
    ]
  },
  {
    title: "tools",
    data: [
      {
        imgPath: ""
      }
    ]
  }
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] px-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div>
          {/* image */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
