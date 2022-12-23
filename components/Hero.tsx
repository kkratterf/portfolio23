"use client"
// Import core
// Import third parts
import { motion } from "framer-motion";
// Import customs

function Hero() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex relative mt-[60vh] z-20"
    >
      <div>
        <h4 className="text-4xl">
          Hi, there. I am Federico, a digital product designer focus on user
          experience, user interface and interaction. Im love also frontend
          development and photography. I have been creating digital design over
          past 3 years. My work spans across brandings to digital UI/UX, as well
          as creative & art directions, graphics, websites for brand
          communications in Milano, and interactions for high profile movies in
          Los Angeles. I build experiences from screens, mobiles to physical
          spaces. No matter the mediums, I have been always blurring the line
          between design and technology, and keep pushing the boundaries of
          what’s ahead.
        </h4>
      </div>
    </motion.section>
  );
}

export default Hero;
