// Import core
// Import third parts
import Link from "next/link";
import PopButton from "./PopButton";
// Import customs

function Navbar() {
  return (
    <nav className="fixed top-20 right-20 rotate-90 origin-top-left translate-x-full">
      <ul className="flex space-x-6">
        <li className="navitem">
          <Link href="/project-library">Project library</Link>
        </li>
        <li className="navitem">
          <a href="/contact">Contact me</a>
        </li>
        <PopButton/>
      </ul>
    </nav>
  );
}

export default Navbar;
