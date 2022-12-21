// Import core
// Import third parts
// Import customs
import "../../styles/globals.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import Providers from "../../components/Providers";
import Footer from "../../components/Footer";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Providers>
        <body className="max-w-screen-xl mx-auto">
          <Header />
          <Navbar />
          {children}
          <Footer />
          <Background />
        </body>
      </Providers>
    </html>
  );
}
