import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.2);
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:nb-40"
      ref={ref}
      id="experience"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline layout="2-columns" lineColor="">
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgb(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                lineHeight: "1rem",
                color: "black",
              }}
              date={item.data}
              icon={item.icon}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                color: "black",
              }}
            >
              <h3 className="font-semibold capitalize text-gray-950">
                {item.title}
              </h3>
              <p className="text-black font-normal !mt-0 italic">
                {item.institution}
              </p>
              <p className="!mt-1 text-gray-950">{item.location}</p>
              <p className="text-gray-700 !mt-1 !font-normal">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
