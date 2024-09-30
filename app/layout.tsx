import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContexProvider from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alvaro | Personal Portfolio",
  description: "Full-stack developer Alvaro Fernandes personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} dark:bg-gray-950 bg-white text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <div className="bg-gray-900 dark:bg-gray-100 absolute -z-10 top-[-6rem] right-[11rem] h-[11.25rem] w-[11.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-gray-950 dark:bg-gray-300 absolute -z-10 top-[-1rem] left-[35rem] h-[11.25rem] w-[11.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <ThemeContexProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContexProvider>
      </body>
    </html>
  );
}
