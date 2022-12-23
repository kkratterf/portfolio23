// Import core
// Import third parts
// Import customs
import { Experience, Education, Certification, Award } from "../typings";

type Props = {
  experiences: Experience[];
  educations: Education[];
  certifications: Certification[];
  awards: Award[];
};

function ExperienceList({ experiences, educations, certifications, awards }: Props) {
  return (
    <section className="relative z-30 space-y-20">
      <div className="space-y-4">
        <h4 className="font-medium uppercase">Experience</h4>
        {experiences.map((experience) => (
          <div key={experience._id} className="space-y-2">
            <h5 className="text-3xl font-bold">{experience.role}</h5>
            <p className="italic font-medium">
                {experience.brand}, {experience.fromto}
            </p>
            <p className="text-sm font font-medium">
                {experience.description}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h4 className="font-medium uppercase">Education</h4>
        {educations.map((education) => (
          <div key={education._id} className="space-y-2">
            <h5 className="text-3xl font-bold">{education.title}</h5>
            <p className="italic font-medium">
                {education.school}, {education.fromto}
            </p>
            <p className="text-sm font font-medium">{education.description}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h4 className="font-medium uppercase">Certification</h4>
        {certifications.map((certification) => (
          <div key={certification._id} className="space-y-2">
            <h5 className="text-3xl font-bold">{certification.title}</h5>
            <p className="italic font-medium">
                {certification.school}, {certification.date}
            </p>
            <p className="text-sm font font-medium">
              {certification.description}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h4 className="font-medium uppercase">Awards</h4>
        {awards.map((award) => (
          <div key={award._id} className="space-y-2">
            <h5 className="text-3xl font-bold">{award.title}</h5>
            <p className="italic font-medium">
                {award.brand}, {award.date}
            </p>
            <p className="text-sm font font-medium">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceList;
