// Import core
// Import third parts
// Import customs
import Logo from "./Logo"
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <nav className="relative flex justify-between mt-20 space z-50">
        <Logo />
        <Navbar />
      </nav>
    </>
  );
}

export default Header;
