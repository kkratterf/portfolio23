"use client"

// Import core
// Import third parts
import Image from "next/image";
import { motion } from "framer-motion";
// Import customs


function About() {
  return (
    <motion.section className="flex relative z-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.25 }}
        className="space-y-20 sm:space-y-40"
      >
        <h3 className="text-6xl sm:text-9xl font-bold">
          Inspired by the words of Alessandro Mendini: I am not a designer, I am
          a dragon.
        </h3>
        <div className="space-y-6 sm:space-y-10">
          <h4 className="text-2xl sm:text-4xl">
            What about me. My name is Federico Kratter Thaler, I´m 24 and I am
            from Milan, Italy. Since high school I have developed a particular
            passion for photography, which subsequently led me to approach the
            world of art and design, starting my studies at Politecnico di
            Milano.
          </h4>
          <h4 className="text-2xl sm:text-4xl">
            During these three years, in addition to investigating the themes of
            space and living, I have also explored the themes of user
            experience, interaction and communication design during my first
            working experiences as a freelancer. Thanks to these experiences I
            realized that these were the areas I wanted to focus on.
          </h4>
          <h4 className="text-2xl sm:text-4xl">
            My first work experience was in Value Partners, a consultancy firm
            in Milan. I participated in various projects in the role of User
            Interface Designer, as well as User Experience & Interaction
            Designer. The clients I worked with included Juventus, UnipolSai,
            Zegna, Crif, Edison and OneofUs.
          </h4>
          <h4 className="text-2xl sm:text-4xl">
            Currently I work as experience & interaction designer at IT Value
            Partner, another milanese consulting firm.
          </h4>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.25 }}
          className="relative w-full h-96 sm:h-124 md:h-128 rounded-xl overflow-hidden"
        >
          <Image
            src="/image/cover.jpg"
            className="object-center object-cover"
            alt="Federico Kratter Thaler"
            fill
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
