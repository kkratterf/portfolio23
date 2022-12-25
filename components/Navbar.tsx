// Import core
// Import third parts
import Link from "next/link";
import PopButton from "./PopButton";
import { motion } from "framer-motion";
// Import customs

function Navbar() {
  return (
    <motion.nav
    >
      <ul className="space-y-1">
        <li className="navitem">
          <Link href="/project-library" scroll={true}>
            Project library //
          </Link>
        </li>
        <li className="navitem">
          <a href="mailto:kkratterf@gmail.com">Contact me //</a>
        </li>
        <PopButton />
      </ul>
    </motion.nav>
  );
}

export default Navbar;
