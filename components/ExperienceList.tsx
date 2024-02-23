"use client";

// Import core
import { motion } from "framer-motion";
// Import customs
import { Experience, Education, Volunteering, Award } from '@/typings';

type Props = {
  experiences: Experience[];
  educations: Education[];
  volunteering: Volunteering[];
  awards: Award[];
};

function ExperienceList({
  experiences,
  educations,
  volunteering,
  awards,
}: Props) {
  return (
    <motion.section className="relative z-30 space-y-10 sm:space-y-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-sm sm:text-base font-medium uppercase">
          Experience
        </h4>
        {experiences.map((experience) => (
          <div key={experience._id} className="space-y-2">
            <h5 className="text-xl sm:text-3xl font-bold">{experience.role}</h5>
            <p className="text-sm sm:text-base italic font-medium">
              {experience.brand}, {experience.fromto}
            </p>
            <p className="text-sm sm:text-base font-medium">
              {experience.description}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-sm sm:text-base font-medium uppercase">
          Education
        </h4>
        {educations.map((education) => (
          <div key={education._id} className="space-y-2">
            <h5 className="text-xl sm:text-3xl font-bold">{education.title}</h5>
            <p className="text-sm sm:text-base italic font-medium">
              {education.school}, {education.fromto}
            </p>
            <p className="text-sm sm:text-base font-medium">
              {education.description}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-sm sm:text-base font-medium uppercase">
          Volunteering
        </h4>
        {volunteering.map((volunteering) => (
          <div key={volunteering._id} className="space-y-2">
            <h5 className="text-xl sm:text-3xl font-bold">
              {volunteering.title}
            </h5>
            <p className="text-sm sm:text-base italic font-medium">
              {volunteering.brand}, {volunteering.date}
            </p>
            <p className="text-sm sm:text-base font-medium">
              {volunteering.description}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-sm sm:text-base font-medium uppercase">Awards</h4>
        {awards.map((award) => (
          <div key={award._id} className="space-y-2">
            <h5 className="text-xl sm:text-3xl font-bold">{award.title}</h5>
            <p className="text-sm sm:text-base italic font-medium">
              {award.brand}, {award.date}
            </p>
            <p className="text-sm sm:text-base font-medium">
              {award.description}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ExperienceList;
