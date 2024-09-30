"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toogleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 dark:bg-gray-100 bg-gray-800 text-gray-200 dark:text-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toogleTheme}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
