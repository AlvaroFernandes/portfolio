"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import Project from "@/components/Project";
import { ProjectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
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
