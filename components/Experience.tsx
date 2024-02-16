"use client";

// Import core
import { motion } from "framer-motion";
// Import customs
import ExperienceList from "@/components/ExperienceList";
import { Experience, Education, Volunteering, Award } from '@/typings';

type Props = {
  experiences: Experience[];
  educations: Education[];
  volunteering: Volunteering[];
  awards: Award[];
};

function Experience({ experiences, educations, volunteering, awards }: Props) {
  return (
    <motion.section className="relative z-20 space-y-10 sm:space-y-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-10 sm:space-y-20"
      >
        <motion.h3 className="text-6xl sm:text-9xl font-bold">
          Enough talk. Show me more but less.
        </motion.h3>
        <ExperienceList
          experiences={experiences}
          educations={educations}
          awards={awards}
          volunteering={volunteering}
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
      >
        <motion.h4 className="text-2xl sm:text-4xl">
          Not enough? Here is my
          <motion.a
            className="ml-1 sm:ml-2 underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500"
            href="image/FedericoKratterThaler_CV.pdf"
            download
          >
            curriculum
          </motion.a>
        </motion.h4>
      </motion.div>
    </motion.section>
  );
}

export default Experience;
