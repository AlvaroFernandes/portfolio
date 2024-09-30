"use client";

import React from "react";
import { motion } from "framer-motion";
import { NavigationData } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-red-300 dark:border-white border-opacity-20 bg-gray-400 dark:bg-gray-950 bg-opacity-80 shadow-lg shadow-white/[0.03] dark:shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 125, duration: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-950 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {NavigationData.map((item) => (
            <motion.li
              key={item.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 125, duration: 1 }}
            >
              <Link
                href={item.hash}
                className={clsx(
                  "flex w-full items-center justify-center text-gray-950 dark:text-white px-3 py-3 hover:text-red-700 dark:hover:text-red-400 transition",
                  { "text-red-800": activeSection === item.name }
                )}
                onClick={() => {
                  setActiveSection(item.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {item.name}
                {item.name === activeSection && (
                  <motion.span
                    className="bg-gray-400 dark:bg-gray-800 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
