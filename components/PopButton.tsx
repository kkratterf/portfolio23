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
        <li
          className="navitem transition duration-500 group"
          onClick={() => setTheme("light")}
        >
          <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
            🌑
          </span>
          Make it dark //
        </li>
      ) : (
        <li
          className="navitem transition duration-500 group"
          onClick={() => setTheme("dark")}
        >
          <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
            🧨
          </span>
          Make it pop //
        </li>
      )}
    </>
  );
}

export default PopButton;
