"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <Image
              src="/alvaro.jpg"
              alt="Alvaro Fernandes"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        Hi, I&apos;m{" "}
        <span className="font-bold text-red-800">Alvaro Augusto Fernandes</span>
        , a <span className="font-bold text-red-800">Full Stack Developer</span>{" "}
        specialized in{" "}
        <span className="italic text-red-800">front-end development</span>,
        creating seamless,{" "}
        <span className="underline text-red-800">user-friendly</span> web
        experiences.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
      >
        <Link
          href="#contact"
          className="group text-white bg-red-500 dark:bg-red-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-red-700 dark:hover:bg-red-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="Alvaro_resume.pdf"
          download
          className="group bg-gray-200 dark:bg-white text-gray-700 dark:text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-white/10"
        >
          Download CV
          <HiDownload className="opacity-70" />
        </a>
        <a
          href="https://www.linkedin.com/in/alvaroafernandes/"
          target="_blank"
          className="bg-gray-200 dark:bg-white dark:text-black text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-95000 active:scale-105 transition cursor-pointer border border-white/10"
        >
          <BsLinkedin className="opacity-70" />
        </a>
        <a
          href="https://github.com/AlvaroFernandes"
          target="_blank"
          className="bg-gray-200 dark:bg-white dark:text-black text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-95000 active:scale-105 transition cursor-pointer border border-white/10"
        >
          <BsGithub className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
