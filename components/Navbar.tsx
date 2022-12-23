// Import core
// Import third parts
import Link from "next/link";
import PopButton from "./PopButton";
import { motion } from "framer-motion";
// Import customs

function Navbar() {
  return (
    <motion.nav
      className="fixed top-20 right-20 rotate-90 origin-top-left translate-x-full"
    >
      <ul className="flex space-x-6">
        <li className="navitem">
          <Link href="/project-library" scroll={true}>
            Project library
          </Link>
        </li>
        <li className="navitem">
          <a href="mailto:kkratterf@gmail.com">Contact me</a>
        </li>
        <PopButton />
      </ul>
    </motion.nav>
  );
}

export default Navbar;
