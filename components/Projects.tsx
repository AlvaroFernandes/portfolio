import React from "react";
import SectionHeading from "@/components/SectionHeading";
import Project from "@/components/Project";
import { ProjectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {ProjectsData.map((item, index) => (
          <React.Fragment key={index}>
            <Project {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
