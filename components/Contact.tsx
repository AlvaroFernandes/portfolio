"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "@/components/SubmitButton";
import toast from "react-hot-toast";

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
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          className="text-gray-800 h-14 rounded-lg border border-white/10 px-4 py-2"
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          className="text-gray-800 h-52 my-3 rounded-lg border boder-white/10 px-4 py-2"
          placeholder="Your message"
          name="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
