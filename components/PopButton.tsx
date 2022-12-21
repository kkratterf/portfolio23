"use client";

// Import core
import { useState, useEffect } from "react";
// Import third parts
import { useTheme } from "next-themes";
// Import customs

function PopButton() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <li className="navitem" onClick={() => setTheme("light")}>make it dark</li>
      ) : (
        <li className="navitem" onClick={() => setTheme("dark")}>make it pop</li>
      )}
    </>
  );
}

export default PopButton;
