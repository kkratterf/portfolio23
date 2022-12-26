// Import core
// Import third parts
// Import customs
import Logo from "./Logo"
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <nav className="relative sm:flex sm:justify-between mt-6 sm:mt-10 xl:mt-16 space-y-10 sm:space-y-0 z-50">
        <Logo />
        <Navbar />
      </nav>
    </>
  );
}

export default Header;
