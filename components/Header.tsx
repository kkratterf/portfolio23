// Import core
// Import third parts
import Link from "next/link";
// Import customs

function Header() {
  return (
    <header className="flex relative mt-20 z-50">
      <Link href="/" className="cursor-pointer">
        <div className="space-y-1">
          <h1 className="text-xl font-bold uppercase">
            Federico Kratter Thaler
          </h1>
          <h2>Experience & Interaction Designer</h2>
        </div>
      </Link>
    </header>
  );
}

export default Header;
