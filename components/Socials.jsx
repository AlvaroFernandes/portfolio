"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiGithubFill /> },
  { path: "/", name: <RiFacebookFill /> },
  { path: "/", name: <RiInstagramFill /> }
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((e, index) => (
        <Link href={e.path} key={index}>
          <div className={`${iconsStyles}`}>{e.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
