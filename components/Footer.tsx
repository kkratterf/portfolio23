"use client";

// Import core
import { motion } from "framer-motion";
// Import customs

function Footer() {
  return (
    <motion.footer className="relative mt-40 mb-6 sm:mb-10 xl:mb-16 z-40">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-medium uppercase cursor-default">
          <span className="italic">2023</span>, Federico Kratter Thaler
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
