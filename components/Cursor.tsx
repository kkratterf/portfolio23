"use client"

// Import core
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Import customs


const Cursor: React.FC<{ cursorVariant: string }> = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      top: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        bounce: 1.1,
        mass: 1.1,
      },
    },
    hover: {

    }
  };

  return (
    <motion.div
      className="bg-brand dark:bg-azure invisible lg:visible h-3 w-3 rounded-full fixed top-0 left-0 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export default Cursor;
