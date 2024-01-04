"use client"

// Import core
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// Import customs
import "@/styles/globals.css";
import "@/styles/font.css";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Awwwards from "@/components/Awwwards";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 7000);
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <html className="scroll-smooth">
      <Providers>
        <body
          onMouseUp={() => setCursorVariant('default')}
          id="top"
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-16 overflow-x-hidden scroll-smooth"
        >
          {!loading ? (
            <>
              <Header />
              {children}
              <Footer />
            </>
          ) : (
            <Loader />
          )}
          <Cursor cursorVariant={cursorVariant} />
          <Awwwards />
          <Background />

          <Analytics />
        </body>
      </Providers>
    </html>
  );
}
