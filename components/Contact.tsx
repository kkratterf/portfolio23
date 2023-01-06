"use client";

// Import core
// Import third parts
import { motion } from "framer-motion";
// Import customs

function Contact() {
  return (
    <motion.section className="relative z-40 space-y-10 sm:space-y-20 pb:10 sm:pb-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
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
        className="space-y-2"
      >
        <h4 className="text-2xl sm:text-4xl">
          If anything of those sounds interesting, just feel free to reach out
          to me. You are welcome.
        </h4>
        <h4 className="text-2xl sm:text-4xl">
          Too lazy to scroll and want to go back to top?
          <a href="#top">
            <span className="ml-1 sm:ml-2 underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500">
              Don`t worry
            </span>
          </a>
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
            <a href="https://www.linkedin.com/in/kkratter/" className="group">
              Ordinary people //
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                🥱
              </span>
            </a>
          </li>
          <li className="contactitem">
            <a href="https://www.behance.net/kkratter" className="group">
              For creatives //
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                🤯
              </span>
            </a>
          </li>
          <li className="contactitem">
            <a href="https://www.instagram.com/kkratter/" className="group">
              Stalk me //
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                👀
              </span>
            </a>
          </li>
          <li className="contactitem">
            <a
              href="mailto:kkratterf@gmail.com?subject=Say Hello!"
              className="group"
            >
              Say hello //
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                👋
              </span>
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
