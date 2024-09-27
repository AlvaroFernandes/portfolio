"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&apos;m Alvaro Augusto Fernandes, a skilled Full Stack Developer with a
        strong focus on front-end development. I&apos;ve built clean,
        responsive, and engaging user interfaces using technologies like HTML,
        CSS, JavaScript, React, and Next.js, while also leveraging back-end
        expertise in Node.js, PHP, and .NET to deliver end-to-end solutions. I
        hold a Bachelor&apos;s degree in Digital Design and a Master&apos;s in
        Business and Project Management, along with a Full Stack Developer
        Certificate from the University of Sydney and additional certifications
        in UML and SQL.
      </p>
      <p>
        Throughout my career, I&apos;ve led the redesign of key interfaces,
        optimized codebases, and collaborated with cross-functional teams to
        enhance user engagement and streamline project timelines. My experience
        spans freelance projects and corporate roles, where I&apos;ve adapted
        quickly to evolving requirements and implemented new technologies to
        drive continuous improvement and deliver high-quality solutions.
      </p>
    </motion.section>
  );
}

export default About;
