"use client";

// Import core
// Import third parts
import { motion } from "framer-motion";
// Import customs

function Contact() {
  return (
    <motion.section className="relative z-20 space-y-10 sm:space-y-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className=""
      >
        <h3 className="text-6xl sm:text-9xl font-bold">
          Maybe just drop me a line to grab a drink.
        </h3>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl sm:text-4xl">
          If anything of those sounds interesting, just feel free to reach out
          to me. you are welcome.
        </h4>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
      >
        <ul className="space-y-2">
          <li className="contactitem">
            <a href="https://www.linkedin.com/in/kkratter/">Linkedin //</a>
          </li>
          <li className="contactitem">
            <a href="https://www.behance.net/kkratter">Behance //</a>
          </li>
          <li className="contactitem">
            <a href="https://www.instagram.com/kkratter/">Instagram //</a>
          </li>
          <li className="contactitem">
            <a href="mailto:kkratterf@gmail.com">kkratterf@gmail.com //</a>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
