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

function ProjectList({ projects }: Props) {
  return (
    <section className="mt-[60vh] relative z-50">
      <div className="grid grid-cols-1 gap-y-20 gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ClientSideRoute
            route={`/project-library/${project.slug.current}`}
            key={project._id}
          >
            <div className="group cursor-pointer opacity-70 hover:opacity-100 duration-500 transition space-y-4">
              <div className="relative w-full h-124 aspect-w-1 rounded-xl overflow-hidden">
                <Image
                  className="object-center object-cover group-hover:scale-105 duration-500"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
              </div>
              <div className="space-y-2 mx-1">
                <h5 className="font-bold text-3xl">{project.title}</h5>
                <div className="flex space-x-2">
                  {project.categories.map((category) => (
                    <p key={category._id}>{category.title}</p>
                  ))}
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
