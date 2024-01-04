"use client";

// Import core
import { ThemeProvider } from "next-themes";
// Import customs

function Providers({ children }: { children: React.ReactNode}) {
  return <ThemeProvider enableSystem={false} attribute="class">{children}</ThemeProvider>;
}

export default Providers;
