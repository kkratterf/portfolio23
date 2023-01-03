// Import core
// Import third parts
// Import customs
import Logo from "./Logo"
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <section id="top" className="relative z-50">
        <nav className="sm:flex sm:justify-between pt-6 sm:pt-10 xl:pt-16 space-y-10 sm:space-y-0">
          <Logo />
          <Navbar />
        </nav>
      </section>
    </>
  );
}

export default Header;
