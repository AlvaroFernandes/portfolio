"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6">
        Please contact me directly at{" "}
        <a href="mailto:fernandes.alvaro@gmail.com">
          fernandes.alvaro@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col text-gray-900"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg border border-white/10 px-4 py-2"
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg border boder-white/10 px-4 py-2"
          placeholder="Your message"
          name="message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-700 rounded-full outline-none transition-all "
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
