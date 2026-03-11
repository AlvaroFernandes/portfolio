"use client";

import { useSectionInView } from "@/lib/hooks";
import { validateString } from "@/lib/utils";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import SubmitButton from "@/components/SubmitButton";
import toast from "react-hot-toast";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactEndpoint) {
      toast.error("Configure NEXT_PUBLIC_CONTACT_ENDPOINT before deploying.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
      toast.error("Invalid sender email.");
      return;
    }

    if (!validateString(message, 5000)) {
      toast.error("Invalid message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      form.reset();
      toast.success("Email sent successfully!");
    } catch {
      toast.error("Could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <p className="-mt-6 text-gray-800 dark:text-gray-200">
        Please contact me directly at{" "}
        <a href="mailto:fernandes.alvaro@gmail.com" className="text-red-500">
          fernandes.alvaro@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          required
          maxLength={500}
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg border boder-black/10 p-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitButton pending={isSubmitting} />
      </form>
    </motion.section>
  );
};

export default Contact;
