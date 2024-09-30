import { useSectionInView } from "@/lib/hooks";
import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";
import { BiBorderRight } from "react-icons/bi";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.2);

  const { theme } = useTheme();
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
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgb(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                lineHeight: "1rem",
              }}
              date={item.data}
              icon={item.icon}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              iconStyle={{
                background: theme === "light" ? "#9ca3af" : "white",
                fontSize: "1.5rem",
                color: theme === "light" ? "white" : "#9ca3af",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.institution}</p>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
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
