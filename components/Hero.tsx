"use client"
// Import core
import { motion } from "framer-motion";
// Import customs

function Hero() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="relative z-20 flex pt-[40vh] sm:pt-[60vh] overscroll-y-none"
    >
      <div>
        <h4 className="text-3xl sm:text-5xl">
          <span className="italic">Hello</span>, I am Federico, a digital
          product designer focused on design systems, user experience, user interface and
          interaction. I have been creating mainly UX/UI design over the past 4
          years, but my work spans across digital design to branding, as well as
          creative & art directions, graphics, interior design, photography and
          frontend development. I build experiences from screens, mobiles to
          physical spaces. No matter the mediums, through my work I aim to blur
          the line between design, art and technology while always pushing the
          boundaries of my creativity.
        </h4>
      </div>
    </motion.section>
  );
}

export default Hero;
