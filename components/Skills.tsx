"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Stack");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:nb-40"
      id="stack"
    >
      <SectionHeading>My stack</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-950 dark:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-gray-50 dark:bg-white/10 dark:text-white/80 border border-black/[0.1]  rounded-xl px-3 py-3 "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
