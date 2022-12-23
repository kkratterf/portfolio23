// Import core
// Import third parts
// Import customs
import ExperienceList from "./ExperienceList";
import { Experience, Education, Certification, Award } from "../typings";

type Props = {
  experiences: Experience[];
  educations: Education[];
  certifications: Certification[];
  awards: Award[];
};

function Experience({ experiences, educations, certifications, awards }: Props) {
  return (
    <section className="flex relative z-20">
      <div className="space-y-20">
        <h3 className="text-9xl font-bold">
          Enough talk. Show me more but less.
        </h3>
        <ExperienceList
          experiences={experiences}
          educations={educations}
          certifications={certifications}
          awards={awards}
        />
      </div>
    </section>
  );
}

export default Experience;
