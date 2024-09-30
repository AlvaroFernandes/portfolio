import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-300">
      <small className="mb-2 block text-xs">
        &copy; 2024 Alvaro Fernandes. All rights reserved.{" "}
      </small>
      <p className="text-xs">
        <span className="font-semibold">This website technoloagies:</span>{" "}
        React, Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Hostinger hosting.
      </p>
    </footer>
  );
};

export default Footer;
