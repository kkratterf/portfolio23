"use client"

// Import core
// Import third parts
import Image from "next/image";
import { motion } from "framer-motion";
// Import customs


function About() {
  return (
    <motion.section className="relative z-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-20 sm:space-y-40"
      >
        <motion.h3 className="text-6xl sm:text-9xl font-bold">
          Inspired by the words of Alessandro Mendini: I am not a designer, I am
          a dragon.
        </motion.h3>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.04 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-10"
        >
          <motion.h4 className="text-2xl sm:text-4xl">
            What about me. My name is Federico Kratter Thaler. Yes, my surname
            is Austrian, no, (unfortunately) I can’t speak german. I’m 24 and I
            am from Milan, Italy. While in high school I developed a special
            passion for photography, which subsequently led me to approach the
            world of art and design and then to start my studies (in Interior
            design) at Politecnico di Milano.
          </motion.h4>
          <motion.h4 className="text-2xl sm:text-4xl">
            During those three years, in addition to investigating the themes of
            space and living, I also had the opportunity to explore the world of
            user experience, interaction and communication design thanks to my
            first projects as a freelancer. Those experiences made me realize
            that those were the areas I wanted to focus on.
          </motion.h4>
          <motion.h4 className="text-2xl sm:text-4xl">
            My first work experience was in Value Partners, a consulting firm based in
            Milan, trough which I took part to various projects as User
            Interface Designer, as well as User Experience & Interaction
            Designer, collaborating with clients such as Juventus, UnipolSai,
            Zegna, Crif, Edison and OneofUs.
          </motion.h4>
          <motion.h4 className="text-2xl sm:text-4xl">
            I currently work as User Experience & Interaction Designer at the
            consulting firm IT Value Partner.
          </motion.h4>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.04 }}
          viewport={{ once: true }}
          className="relative w-full h-96 sm:h-124 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden"
        >
          <Image
            src="/image/cover.jpg"
            className="object-center object-cover rounded-xl"
            alt="Federico Kratter Thaler"
            fill
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
