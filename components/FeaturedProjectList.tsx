// Import core
// Import third parts
import Image from "next/image";
// Import customs
import urlFor from "../lib/urlFor";
import { Project } from "../typings";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    projects: Project[];
};

function FeaturedProjectList({ projects }: Props) {
  return (
    <section>
      {projects.map((project) => (
        <ClientSideRoute route={`/project-library/${project.slug.current}`} key={project._id}>
          <div>
            <div className="relative w-full h-80">
              <Image
                className=""
                src={urlFor(project.mainImage).url()}
                alt={project.author.name}
                fill
              />
            </div>
            <div>
              <p>{project.title}</p>
            </div>
            <div>
              {project.categories.map((category) => (
                <div key={category._id}>
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
            <div>
              <p>{project.title}</p>
              <p>{project.description}</p>
            </div>
          </div>
        </ClientSideRoute>
      ))}
    </section>
  );
}

export default FeaturedProjectList;
