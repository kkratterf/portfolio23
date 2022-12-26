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
      <div className="space-y-10 sm:space-y-20">
        <h3 className="text-6xl sm:text-9xl font-bold">
          Enough talk. Show me more but less.
        </h3>
        <ExperienceList
          experiences={experiences}
          educations={educations}
          certifications={certifications}
          awards={awards}
        />
        
        <h4 className="text-2xl sm:text-4xl">
          Not enough? Here is my
            <a
              className="ml-1 sm:ml-2 underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500"
              href="image/KratterThalerFederico_CV.pdf"
              download
            >
              curriculum
            </a>
        </h4>
      </div>
    </section>
  );
}

export default Experience;
