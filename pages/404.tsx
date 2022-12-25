// Import core
// Import third parts
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";
import Link from "next/link";
// Import customs
import "../styles/globals.css";
import Header from "../components/Logo";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Providers from "../components/Providers";

export default function Custom404() {
  return (
    <html>
      <Providers>
        <body className="max-w-screen-xl mx-auto">
          <Header />
          <Navbar />
          <div className="mt-[40vh] space-y-10 relative z-30">
            <h3 className="text-9xl font-bold">Error 404</h3>
            <h4 className="text-4xl">
              The page you were looking for was moved or doesn`t exist,{" "}
              <span className="underline underline-offset-8 cursor-pointer hover:opacity-70">
                <Link href="/">back to the homepage</Link>
              </span>
            </h4>
          </div>
          <AnalyticsWrapper />
          <Background />
        </body>
      </Providers>
    </html>
  );
}
