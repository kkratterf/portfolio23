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
      <motion.ul className="space-y-2">
        <li className="navitem">
          <Link href="/project-library" scroll={true}>
            Project library //
          </Link>
        </li>
        <li className="navitem">
          <a href="mailto:kkratterf@gmail.com">Contact me //</a>
        </li>
        <PopButton />
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
