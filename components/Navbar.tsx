// Import core
// Import third parts
import Link from "next/link";
import PopButton from "./PopButton";
import { motion } from "framer-motion";
// Import customs

function Navbar() {
  return (
    <motion.nav
      initial={{ x: 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <motion.ul className="space-y-2 sm:space-y-1 ">
        <li className="navitem">
          <Link href="/project-archive" scroll={true} className="group">
            <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
              📁
            </span>
            Project archive //
          </Link>
        </li>
        <li className="navitem">
          <a href="mailto:kkratterf@gmail.com" className="group">
            <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
              👋
            </span>
            Say hello //
          </a>
        </li>
        <PopButton />
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
