// Import core
// Import third parts
import Link from "next/link";
import { motion } from "framer-motion";
// Import customs

function Header() {
  return (
    <motion.header
      initial={{ y:-25, opacity:0}}
      animate={{ y:0, opacity:1}}
      transition={{ duration: 1, delay:1}}
      className="flex relative mt-20 z-50"
    >
      <Link href="/" className="cursor-pointer">
        <div className="space-y-1">
          <h1 className="text-xl font-bold uppercase">
            Federico Kratter Thaler
          </h1>
          <h2 className="font-medium">Experience & Interaction Designer</h2>
        </div>
      </Link>
    </motion.header>
  );
}

export default Header;
