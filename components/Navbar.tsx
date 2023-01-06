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
            <Link href="/project-archive" scroll={true}>
              Project archive //
            </Link>
          </li>
          <li className="navitem">
            <a href="mailto:kkratterf@gmail.com">Say hello //</a>
          </li>
          <PopButton />
        </motion.ul>
      </motion.nav>
  );
}

export default Navbar;
