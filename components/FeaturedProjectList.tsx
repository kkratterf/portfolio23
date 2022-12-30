"use client"

// Import core
// Import third parts
import Image from "next/image";
import { motion } from "framer-motion";
// Import customs
import urlFor from "../lib/urlFor";
import { Project } from "../typings";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    projects: Project[];
};

function FeaturedProjectList({ projects }: Props) {
  return (
    <motion.section className="relative z-30 space-y-20 sm:space-y-40">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.25 }}
      >
        <h3 className="text-6xl sm:text-9xl font-bold">
          Delightful and intuitive human-centered experiences through innovation
          and product strategy.
        </h3>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.25 }}
        className="grid grid-cols-1 gap-y-10 sm:gap-y-20 gap-x-6 2xl:gap-x-10 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <ClientSideRoute
            route={`/project-library/${project.slug.current}`}
            key={project._id}
          >
            <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
              <div className="relative w-full h-116 bg-grey dark:bg-pop sm:h-124 aspect-w-1 rounded-xl overflow-hidden">
                <Image
                  className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
              </div>
              <div className="space-y-1 sm:space-y-2 mx-1">
                <h5 className="font-bold text-2xl sm:text-3xl">
                  {project.title}
                </h5>
                <p>{project.category.title}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default FeaturedProjectList;
