// Import core
// Import customs
import Logo from "@/components/Logo";
import Navbar from '@/components/Navbar';

function Header() {

  return (
    <>
      <nav 
        className="sm:flex sm:justify-between pt-6 sm:pt-10 xl:pt-16 space-y-10 sm:space-y-0 relative z-50"
      >
        <Logo />
        <Navbar />
      </nav>
    </>
  );
}

export default Header;
