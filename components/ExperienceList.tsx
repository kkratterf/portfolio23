"use client";

// Import core
// Import third parts
import { motion } from "framer-motion";
// Import customs
import { Experience, Education, Certification, Award } from "../typings";

type Props = {
  experiences: Experience[];
  educations: Education[];
  certifications: Certification[];
  awards: Award[];
};

function ExperienceList({
  experiences,
  educations,
  certifications,
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
            <p className="text-sm font font-medium">{experience.description}</p>
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
            <p className="text-sm font font-medium">{education.description}</p>
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
            <p className="text-sm font font-medium">{award.description}</p>
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
          Certification
        </h4>
        {certifications.map((certification) => (
          <div key={certification._id} className="space-y-2">
            <h5 className="text-xl sm:text-3xl font-bold">
              {certification.title}
            </h5>
            <p className="text-sm sm:text-base italic font-medium">
              {certification.school}, {certification.date}
            </p>
            <p className="text-sm font font-medium">
              {certification.description}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ExperienceList;
