import Link from "next/link";
import { motion } from "framer-motion";

//hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contacts", name: "Contacts" }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((e, index) => (
        <Link key={index} href={e.path} className={`capitalize ${linkStyles}`}>
          {e.path === path ? (
            <motion.span
              initial={{ y: "-100&" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          ) : null}
          {e.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
