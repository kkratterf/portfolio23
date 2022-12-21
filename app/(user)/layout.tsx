// Import core
import "../../styles/globals.css";
// Import third parts
// Import customs
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-screen-xl mx-auto">
        <Header />
        <Navbar />
        {children}
        <Background />
      </body>
    </html>
  );
}
